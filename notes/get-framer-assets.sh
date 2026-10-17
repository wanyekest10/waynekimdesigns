#!/bin/bash
# Downloads the Framer images and videos for Linee, Mirrored Canvas, and Lume
# into ~/Downloads/portfolio-rebuild/<project>-originals/, numbered in page order.
# Run on the Mac:  bash get-framer-assets.sh
set -e
base=~/Downloads/portfolio-rebuild
get() { # folder, index, url
  mkdir -p "$base/$1"
  name=$(basename "${3%%\?*}")
  printf '%s  %s\n' "$1" "$2-$name"
  curl -sSfL "$3" -o "$base/$1/$2-$name"
}
I=https://framerusercontent.com/images
A=https://framerusercontent.com/assets

f=linee-originals
get $f 01 $I/v7pF528eH2MQ0bvhdJM678VhDe8.jpg
get $f 02 $I/SvGk5v8VmbpMlZnbH0ptuEF6Sd4.jpeg
get $f 03 $A/gDIDZWSM69SZ3m5cA68dfU8OUk.mp4
get $f 04 $A/vqs1Z1j9so0295n6RXADsxCFokA.mp4
get $f 05 $A/tKvojqy0h3Obmq5R7JLsa9Va8RQ.mp4
get $f 06 $I/JzZgFNJGZ5cZe2c7nh1swPSy8w.jpg
get $f 08 $I/Y5RpSVyNP1XpZBKx8i6KRdMtQ.jpg
get $f 09 $I/wJjMFvgm77g75HNHKYvluevF2k.jpg
get $f 11 $A/CEjFcJUSIewd5FiqS6D2WjOyXdw.mp4
get $f 12 $A/BzY6W43IdPeLZMi2Frf8ufVtZw.mp4
get $f 13 $I/vLuw8XSgkVezlHzbdS4wT5ArXg8.jpg
get $f 14 $A/LN20VsvxUv1jjUXesk86dAVDCE.mp4
get $f 15 $A/JAgaw0cEc5jLbHicTGP554oxIY.mp4
get $f 16 $A/FYxs79LchlVistWJkZO8zHu5diQ.mp4
get $f 17 $I/BGySZNZvnZf0nwrtLFlbtAOg8.jpg
get $f 18 $A/Q4RfwXjuPY8FPow2I3wYnECTI0.mp4
get $f 19 $I/qXCNNStU9MFAXOa6Hq9tVRbn18g.jpeg

f=mirrored-canvas-originals
get $f 01 $I/UE628R232KP6FCfDZH1JO7cHauE.jpg
get $f 02 $A/dNYzmVDHuSkBvpy3p4FxMEaOl9w.mp4
get $f 03 $A/JvWlP4kzpjboJpgREaJDYhkqbI.mp4
get $f 04 $I/zK0zkqaqCaXApzp2yPAraRcwcU.jpg
get $f 05 $A/lqsqFbXEdIJnAHSBEJKo1S0YOLQ.mp4
get $f 06 $A/sjxeo751V1SiwCOksS2MIWCmzo.mp4
get $f 07 $I/i0z4IrnTGN7oxqgGNjd4aXvDxw.png

f=lume-originals
get $f 01 $I/SCtkO0uWNXhX6DkoA1nZAA2uIo.jpg
get $f 02 $A/pHvK56sIrXrO7k4l0ERH3tAA.mp4
get $f 03 $I/SXo6l7piBalOhgKEZYOq2xb0M.jpg
get $f 04 $I/RWCRyG2dZp0BiPGzdMVsGGDhkkE.png
get $f 06 $A/ukIqD7w8ZxNmrxleEfkO5prMqg.mp4
get $f 07 $A/ClViKwroNTf7csc3X8DmncemY.mp4
get $f 08 $A/WIbVi0TZgzTfzRzyy4W9tP7w.mp4
get $f 09 $A/IUPAIMBH3FRe9CJg2XamaHG4.mp4
get $f 10 $I/EKrof02NYABrV5BjfxETFRCpuII.jpg
get $f 11 $I/7mcKg2BKjcVFe2DsqkbkqDsynBw.jpg
get $f 12 $I/xYlkfeOh7YN6lAyNpbJCRX0uA.jpg
get $f 13 $I/kLDoIR9DooMFLZERmXhbiDHVNFg.jpg

echo "Done."
