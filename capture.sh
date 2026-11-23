#!/bin/bash
# Render index.html to entry.png with headless Chrome for Testing.
# Usage: ./capture.sh  (run from the repository root)
set -euo pipefail
CHROME="${CHROME:-/home/hatch/workspace/makefun/chrome-linux64/chrome}"
"$CHROME" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
  --window-size=1024,1024 \
  --screenshot="$(pwd)/entry.png" \
  "file://$(pwd)/index.html"
python3 -c "
from PIL import Image
im = Image.open('entry.png')
print('size:', im.size, 'bytes:', __import__('os').path.getsize('entry.png'))
"
