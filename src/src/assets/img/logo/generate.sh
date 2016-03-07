#!/bin/bash
# Generate icons in different sizes
# Inkscape and ImageMagick are required

img="logo.svg"

for size in 16 48 128
do
  inkscape --export-png="${size}x${size}.png" -w $size -h $size $img
done

convert "128x128.png" "scalable.ico"

convert "16x16.png" "favicon.ico"
