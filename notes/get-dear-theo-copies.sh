#!/bin/bash
# Downloads the four public-domain images for the Dear Theo "he copied the greats" hovers
# into ~/Downloads/portfolio-rebuild/dear-theo-copies/
set -e
d=~/Downloads/portfolio-rebuild/dear-theo-copies; mkdir -p "$d"
get() { printf '%s\n' "$1"; curl -sSfL -A "Mozilla/5.0" "$2" -o "$d/$1"; }
get hiroshige-plum-park.jpg      "https://iiif.micr.io/GOTeM/full/1280,/0/default.jpg"
get vangogh-plum-orchard.jpg     "https://iiif.micr.io/MagLm/full/1280,/0/default.jpg"
get millet-first-steps.jpg       "https://openaccess-cdn.clevelandart.org/1962.407/1962.407_web.jpg"
get vangogh-first-steps.jpg      "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436526/794544/main-image"
echo "Done. Files are in $d"
open "$d" 2>/dev/null || true
