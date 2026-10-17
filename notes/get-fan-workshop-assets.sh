#!/bin/bash
# Downloads A Serious Fan and Workshop Facilitation images from Framer into ~/Downloads/portfolio-rebuild/
set -e
I=https://framerusercontent.com/images
get() { mkdir -p "$1"; printf '%s\n' "$2"; curl -sSfL "$3" -o "$1/$2"; }
f=~/Downloads/portfolio-rebuild/fan-originals
get $f 01.webp $I/qeOV6NGyH7kXnsJ2aqCzw7CSU.webp
get $f 02.webp $I/dHhFJ7UH0QwdU7OfhaToIuG1slo.webp
get $f 03.webp $I/jCdG27SuIgeqiu0xUzL3ZXKyDE.webp
get $f 04.webp $I/Omq3MDCcCZhDr7m1P9oLegdsU.webp
get $f 05.webp $I/nwcO7bgjCkL9tr3iirn7oa9vSY.webp
w=~/Downloads/portfolio-rebuild/workshop-originals
get $w 01-hero.png        $I/to2WOid8ohZAalKJDPdP1YdQk.png
get $w 02-design.png      $I/wHCFI0er7Pa74JTdLxIhFMiUl4.png
get $w 03-in-the-room.png $I/8ryz1KL8GXlynB4k9KLrY3q3xs.png
get $w 04-synthesis-a.png $I/lFSpGouh2T6ibt60eN6smDLkydU.png
get $w 05-synthesis-b.png $I/DCWufUaTqr9pXBBm0AQbaAYPic.png
get $w 06-cover.png       $I/KxGVS44TN5qYYh5rubWeOt2bY7Y.png
get $w 07-client-a.png    $I/x2VUwymDHFPDzDztdt7bFlJi7s.png
get $w 08-client-b.png    $I/eSNrbayElrjMWmTyU8BWgOyHEw.png
get $w 09-client-c.png    $I/qTfffeKj48OQD8ZwkOKPHXzjkI.png
get $w 10-client-d.png    $I/7iNeCxc6VB32IC1OPzxo3lYGIZM.png
echo "Done."
