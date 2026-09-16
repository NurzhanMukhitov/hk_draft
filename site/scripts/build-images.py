#!/usr/bin/env python3
"""Rebuild public/images/*.webp from the masters in images-src/.

The masters are 1000-2172px JPEGs sized for print, not for a card 286px
wide. Shipping them meant ~6.5 MB of photography on a site whose buyers
are on mainland-China connections.

Each group below is resized to what the layout actually displays at 2x and
re-encoded as WebP. Run after adding or replacing a master:

    python3 scripts/build-images.py

Masters live in images-src/ and are never deployed. Files in images-src/
that no group claims are simply not built — that is how unused art stays
out of the bundle without being deleted.

Requires: cwebp (brew install webp).
"""
import subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'images-src'
OUT = ROOT / 'public' / 'images'

# (source glob, max width in px, quality) — width is the displayed size at 2x.
GROUPS = [
    ('hero/hero_*.jpeg',  1920, 86),  # full-bleed 3:1 carousel, the LCP element.
                                      # Quality is high and -sharp_yuv is on because the
                                      # headline is baked into these photographs; text
                                      # edges are the first thing WebP softens.
    ('categories/*.jpeg',  600, 80),  # 286px card at desktop, object-fit: contain
    ('industries/*.jpeg',  700, 80),  # 300x420 slide, object-fit: cover
    ('global_supply_last.jpg', 1400, 80),  # ~700px column, multiply blend
]

def main():
    if not SRC.is_dir():
        sys.exit(f'Masters not found: {SRC}')
    before = after = 0
    built = 0
    for pattern, width, quality in GROUPS:
        for src in sorted(SRC.glob(pattern)):
            dst = OUT / src.relative_to(SRC).with_suffix('.webp')
            dst.parent.mkdir(parents=True, exist_ok=True)
            cmd = ['cwebp', '-quiet', '-q', str(quality), '-resize', str(width), '0',
                   '-metadata', 'none']
            if 'hero' in pattern:
                cmd += ['-sharp_yuv']
            subprocess.run(cmd + [str(src), '-o', str(dst)], check=True)
            b, a = src.stat().st_size, dst.stat().st_size
            before, after, built = before + b, after + a, built + 1
            print(f'  {str(src.relative_to(SRC)):<34} {b/1024:7.0f} KB → {a/1024:6.0f} KB')
    unused = sorted(p.relative_to(SRC) for p in SRC.rglob('*')
                    if p.is_file() and p.suffix.lower() in {'.jpg', '.jpeg', '.png'}
                    and not (OUT / p.relative_to(SRC).with_suffix('.webp')).exists())
    print(f'\nbuilt {built} images: {before/1048576:.1f} MB → {after/1024:.0f} KB '
          f'({100 - after / before * 100:.1f}% smaller)')
    if unused:
        print('not referenced by any group, left in images-src/ and not deployed:')
        for u in unused:
            print(f'  {u}')

if __name__ == '__main__':
    main()
