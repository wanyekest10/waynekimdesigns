#!/bin/bash
# Downloads scans of Van Gogh's handwritten letters (Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation))
# into ~/Downloads/portfolio-rebuild/dear-theo-letters/ for the Dear Theo reel.
set -e
d=~/Downloads/portfolio-rebuild/dear-theo-letters; mkdir -p "$d"
get() { printf '%s\n' "$1"; curl -sSfL -A "Mozilla/5.0" "https://iiif.micr.io/$2/full/1600,/0/default.jpg" -o "$d/$1"; }
get bedroom-letter.jpg       mLXNw
get yellow-house-letter.jpg  pUVaI
get cicada-letter.jpg        akJLF
echo "Done. Files are in $d"
open "$d" 2>/dev/null || true
