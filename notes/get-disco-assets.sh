#!/bin/bash
# Disco Never Died images from the CIID project page.
set -e
D=~/Downloads/portfolio-rebuild/disco-originals
mkdir -p "$D" && cd "$D"
B=https://cdn.prod.website-files.com/64b5a13f40ef9bca819eb43c
curl -sLo main.jpg "$B/676975a3a7fffeda5f0762bd_mainimage.jpg"
curl -sLo 2.jpg "$B/676975b071c59cde13337b50_2.jpg"
curl -sLo 3.jpg "$B/676975aff52ac4fec29a8cad_3.jpg"
curl -sLo 4.jpg "$B/676975af0b9e95ac05eac7df_4.jpg"
ls -la "$D"
echo "Done. Files are in $D"
