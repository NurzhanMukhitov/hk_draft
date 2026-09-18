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
import re
import subprocess, sys, tempfile
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
    ('hero/hero_*_zh.png', 1920, 86), # the same four frames with 简体中文 headlines,
                                      # served to /zh-cn. Same reasoning, and CJK
                                      # strokes are finer than Latin ones.
    ('categories/*.jpeg',  600, 80),  # 286px card at desktop, object-fit: contain
    ('industries/*.jpeg',  700, 80),  # 300x420 slide, object-fit: cover
    ('global_supply_last.jpg', 1400, 80),  # ~700px column, multiply blend
]

# Link previews. WhatsApp and WeChat want a 1.91:1 JPEG at an absolute URL, so
# these are cut from the first hero frame of each language: resized by height and
# cropped from the left, which is the side that carries the headline.
OG = [('hero/hero_01.jpeg', 'og-en.jpg'), ('hero/hero_01_zh.png', 'og-zh.jpg')]

# The logo mark ships in two colourways: navy for the white header, and a white
# version for the navy footer, where the navy original would vanish. Generated
# rather than hand-made so both stay in step when the mark is replaced.
LOGO = ('logo-mark.png', 320)   # wide lockup: 320 keeps it sharp at 2x in the header

# Copied byte for byte, not transcoded. The WeChat QR is 700px of flat black on
# white: PNG already beats every WebP setting here, and re-encoding a QR is how
# you end up with modules a phone camera cannot resolve.
COPY = ['wechat-qr.png']

GOLD = '#FFC107'
# The rule has to survive the smallest size the mark is ever drawn at. Below
# roughly this share of the mark's height it lands under one CSS pixel at the
# smallest size the mark is drawn (38px on a narrow phone) and fades out,
# leaving the letters with nothing under them. Measured, not guessed.
RULE_MIN_SHARE = 0.035

def thicken_rule(src):
    """Trim the master and, if its gold rule is a sub-pixel hairline, thicken it.

    Only ever thickens: a mark that already has a solid rule passes through
    untouched, and one with no gold at all is simply trimmed.
    """
    out = Path(tempfile.gettempdir()) / 'logo-mark-trimmed.png'
    # A plain -trim keeps the export's faint anti-aliased halo, which then reads
    # as a margin and pushes the mark off the text edge it should line up with.
    subprocess.run(['magick', str(src), '-fuzz', '8%', '-trim', '+repage', str(out)], check=True)
    h = int(subprocess.run(['magick', str(out), '-format', '%h', 'info:'],
                           capture_output=True, text=True, check=True).stdout)
    box = subprocess.run(['magick', str(out), '-fuzz', '20%', '-fill', 'none', '+opaque', GOLD,
                          '-alpha', 'extract', '-format', '%@', 'info:'],
                         capture_output=True, text=True).stdout.strip()
    m = re.match(r'(\d+)x(\d+)\+(\d+)\+(\d+)', box or '')
    if not m:
        return out
    gw, gh, gx, gy = (int(v) for v in m.groups())
    target = max(gh, round(h * RULE_MIN_SHARE))
    if target <= gh:
        return out
    centre = gy + gh / 2
    y1, y2 = round(centre - target / 2), round(centre + target / 2) - 1
    subprocess.run(['magick', str(out), '-fill', GOLD,
                    '-draw', f'rectangle {gx},{y1} {gx + gw - 1},{y2}', str(out)], check=True)
    print(f'  gold rule thickened {gh}px → {target}px ({target / h * 100:.1f}% of mark height)')
    return out


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
    for src_name, out_name in OG:
        src, dst = SRC / src_name, OUT / out_name
        subprocess.run(['magick', str(src), '-resize', 'x630', '-gravity', 'West',
                        '-crop', '1200x630+0+0', '+repage', '-quality', '82',
                        '-strip', str(dst)], check=True)
        before, after, built = before + src.stat().st_size, after + dst.stat().st_size, built + 1
        print(f'  {out_name:<34} {src.stat().st_size/1024:7.0f} KB → {dst.stat().st_size/1024:6.0f} KB  (link preview)')

    src = SRC / LOGO[0]
    if src.exists():
        trimmed = thicken_rule(src)
        for out_name, recolour in [('logo-mark.png', None), ('logo-mark-on-navy.png', True)]:
            dst = OUT / out_name
            # The export carries ~25% transparent air, most of it above the mark,
            # so an untrimmed file renders small and sits low in its own box.
            cmd = ['magick', str(trimmed), '-resize', f'{LOGO[1]}x{LOGO[1]}']
            if recolour:
                cmd += ['-fuzz', '35%', '-fill', 'white', '-opaque', '#003D7A']
            subprocess.run(cmd + ['-strip', str(dst)], check=True)
            before, after, built = before + src.stat().st_size, after + dst.stat().st_size, built + 1
            print(f'  {out_name:<34} {src.stat().st_size/1024:7.0f} KB → {dst.stat().st_size/1024:6.0f} KB  (logo)')

    for name in COPY:
        src, dst = SRC / name, OUT / name
        dst.write_bytes(src.read_bytes())
        before, after, built = before + src.stat().st_size, after + dst.stat().st_size, built + 1
        print(f'  {name:<34} {src.stat().st_size/1024:7.0f} KB → {dst.stat().st_size/1024:6.0f} KB  (copied)')

    unused = sorted(p.relative_to(SRC) for p in SRC.rglob('*')
                    if p.is_file() and p.suffix.lower() in {'.jpg', '.jpeg', '.png'}
                    and not (OUT / p.relative_to(SRC).with_suffix('.webp')).exists()
                    and str(p.relative_to(SRC)) not in COPY
                    and str(p.relative_to(SRC)) not in {o[0] for o in OG}
                    and str(p.relative_to(SRC)) != LOGO[0])
    print(f'\nbuilt {built} images: {before/1048576:.1f} MB → {after/1024:.0f} KB '
          f'({100 - after / before * 100:.1f}% smaller)')
    if unused:
        print('not referenced by any group, left in images-src/ and not deployed:')
        for u in unused:
            print(f'  {u}')

if __name__ == '__main__':
    main()
