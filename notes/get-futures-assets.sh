#!/bin/bash
# Downloads the Designit Futures images from Super into ~/Downloads/portfolio-rebuild/futures-originals/
set -e
d=~/Downloads/portfolio-rebuild/futures-originals; mkdir -p "$d"
get() { printf '%s\n' "$1"; curl -sSfL "$2" -o "$d/$1"; }
S=https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig
A=https://assets.super.so/d92e951e-a62b-4795-9a3d-bd3c437c69e1/images
Q=w=3000,quality=95,fit=scale-down
get 01-cover.img        "$S/f2c94006-853a-4a8d-8046-ee3372bfbcb0/download-1/$Q"
get 02-larger-narrative.avif "$A/61fd0912-26d8-4e3d-9470-c87fc41ef0f9/diagram-3_-larger-narrative_2.avif"
get 03-process.img      "$S/0d561cc8-4eb3-4eed-aa79-a30db5fcaa21/group-82/$Q"
get 04-grounding.img    "$S/4e5cb02d-e153-4769-bc4f-23bdf38d8804/group_70/$Q"
get 05-sensing.img      "$S/4fa09c64-3d24-4f4c-9a8c-2d59e1b874ea/screenshot_2024-01-08_at_10.48.57_am/$Q"
get 06-drivers.avif     "$A/bc3e9cc2-67f3-46a7-a02e-c5cded07fbfd/drivers-of-change-_-master_colored-by-teammate_2.avif"
get 07-reframing.avif   "$A/fbc13c11-6e21-4c72-b956-c1b38ea9d40e/group-84b.avif"
get 08-water-score.avif "$A/24cb86ce-b4e7-47ad-8532-e9b61647d448/futures-pov_wayne.avif"
get 09-tech-land.img    "$S/997ad06f-45e3-455a-9e2f-b72666145b26/screenshot_2026-02-02_at_2.24.58_pm/$Q"
get 10-water-ritual.img "$S/5227911e-72fb-47d0-9997-3908aa830bf9/screenshot_2026-02-02_at_2.24.50_pm/$Q"
echo "Done."
