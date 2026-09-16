#!/usr/bin/env python3
"""Rebuild public/fonts/*.woff2 from the IBM Plex TTF masters.

Why this exists: the full IBM Plex Sans SC TTFs are ~8 MB each because they
carry ~20 000 CJK glyphs. The site uses a few hundred. Shipping the masters
meant the 简体中文 page downloaded 24 MB of fonts before it could render —
unacceptable for the mainland-China buyers this site is built for.

This script subsets every face to the characters the site actually uses and
writes WOFF2. Run it whenever the copy changes, especially the Chinese copy:

    python3 scripts/build-fonts.py

Masters live in fonts-src/ and are never deployed; only public/fonts/*.woff2 ship.
Requires: fonttools, brotli.
"""
import re, sys, subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC_FONTS = ROOT / 'fonts-src'
OUT = ROOT / 'public' / 'fonts'
SCAN_DIRS = [ROOT / 'src']
SCAN_EXT = {'.ts', '.astro', '.tsx', '.js', '.mjs', '.md'}

# Faces carrying 简体中文. Everything else is Latin-only.
CJK_FACES = 'IBMPlexSansSC'

def is_cjk(ch):
    o = ord(ch)
    return (0x2E80 <= o <= 0x2EFF or 0x3000 <= o <= 0x303F or 0x3400 <= o <= 0x4DBF
            or 0x4E00 <= o <= 0x9FFF or 0xF900 <= o <= 0xFAFF or 0xFE30 <= o <= 0xFE4F
            or 0xFF00 <= o <= 0xFFEF)

def collect():
    """Every character that appears in the source, split by script."""
    chars = set()
    for d in SCAN_DIRS:
        for f in d.rglob('*'):
            if f.is_file() and f.suffix in SCAN_EXT:
                chars |= set(f.read_text(encoding='utf-8', errors='ignore'))
    cjk = {c for c in chars if is_cjk(c)}
    latin = {c for c in chars if not is_cjk(c) and ord(c) > 0x1F}
    return cjk, latin

# Safety ranges kept in the Latin faces even when the current copy misses them:
# ASCII, Latin-1 + Latin Extended-A (European brand names), general punctuation
# (— · … ' "), currency, and arrows (the hero carousel uses ← → as text).
LATIN_SAFETY = [(0x0020, 0x007E), (0x00A0, 0x017F), (0x2000, 0x206F),
                (0x20A0, 0x20BF), (0x2190, 0x21FF), (0x2022, 0x2022)]
# Punctuation the Chinese copy needs beyond the characters found in source.
CJK_SAFETY = [(0x3000, 0x303F), (0xFF00, 0xFF65)]

def unicodes_arg(chars, ranges):
    parts = sorted({'U+%04X' % ord(c) for c in chars})
    parts += ['U+%04X-%04X' % r for r in ranges]
    return ','.join(parts)

def main():
    if not SRC_FONTS.is_dir():
        sys.exit(f'Font masters not found: {SRC_FONTS}')
    cjk, latin = collect()
    print(f'source scan: {len(cjk)} CJK characters, {len(latin)} Latin characters')
    OUT.mkdir(parents=True, exist_ok=True)

    before = after = 0
    for ttf in sorted(SRC_FONTS.glob('*.ttf')):
        cjk_face = CJK_FACES in ttf.stem
        target = OUT / (ttf.stem + '.woff2')
        args = [sys.executable, '-m', 'fontTools.subset', str(ttf),
                f'--unicodes={unicodes_arg(cjk if cjk_face else latin, CJK_SAFETY if cjk_face else LATIN_SAFETY)}',
                '--layout-features=kern,liga,calt,locl',
                '--flavor=woff2', '--desubroutinize', '--no-hinting',
                f'--output-file={target}']
        subprocess.run(args, check=True)
        b, a = ttf.stat().st_size, target.stat().st_size
        before, after = before + b, after + a
        print(f'  {ttf.stem:<28} {b/1048576:7.2f} MB → {a/1024:7.1f} KB')
    print(f'\ntotal: {before/1048576:.1f} MB → {after/1024:.0f} KB '
          f'({100 - after / before * 100:.1f}% smaller)')

if __name__ == '__main__':
    main()
