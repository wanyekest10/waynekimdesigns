#!/bin/bash
# Downloads the Larvae Lagoon images and video from Framer into ~/Downloads/portfolio-rebuild/larvae-originals/
set -e
d=~/Downloads/portfolio-rebuild/larvae-originals; mkdir -p "$d"
I=https://framerusercontent.com/images; A=https://framerusercontent.com/assets
get() { printf '%s\n' "$1"; curl -sSfL "$2" -o "$d/$1"; }
get 01-challenge.png        $I/8ylC2nw0C6D0C9spapfaBBHI.png
get 02-location-a.png       $I/CACBQf85T36dVULZ0mWKx9mXFE.png
get 03-location-b.png       $I/aSlirOyN4izZgZB6sXNZknOOKTU.png
get 04-synthesis.mp4        $A/HNnQb0oJmg3DAd537lSUbf07Y.mp4
get 05-seasonal-risks.png   $I/zMsqFfxD3AuXOyoGtWcfWM9telc.png
get 06-experts.png          $I/0nNGuDEwDCGhP9qKQwjAvGPSJU.png
get 07-principles.png       $I/wyB7m7xlyGMZ4LHtL6SiomypLR0.png
get 08-site-map.png         $I/9Gs7K8F8IZmNVYqbLE37DiHPw2A.png
get 09-bromeliad.png        $I/Z5I621RWnp8ADoIAItLBYkRR4.png
get 10-mangrove-lotus.png   $I/srPgaraqPkVDw8Ns08AIyHCM0.png
get 11-expert-review.png    $I/H5Vfu5oy1jbFosrKDVRBTymI4HM.png
get 12-site-discussion.png  $I/8sBg6zM7W01AfxjGm5eH46HbYrM.png
get 13-concept.png          $I/pB0CVP0uZQy3kFCO9XC5Y6sDudw.png
echo "Done."
