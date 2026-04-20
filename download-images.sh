#!/bin/bash
# Image download script for SuperDeco Canada product catalogue
# Downloads product images locally from source CDN, with retry logic

BASE="/home/emilianobastardogodoy/test-website/images/products"
SRC="https://superdecoimport.com/wp-content/uploads"
DOWNLOADED=0
SKIPPED=0
FAILED=0

dl() {
  local url="$1"
  local dest="$2"
  if [ -f "$dest" ]; then
    SKIPPED=$((SKIPPED+1))
    return 0
  fi
  local dir
  dir=$(dirname "$dest")
  mkdir -p "$dir"
  local attempt=0
  while [ $attempt -lt 3 ]; do
    if curl -s -L --max-time 30 --retry 2 -o "$dest" "$url" 2>/dev/null; then
      if [ -s "$dest" ]; then
        DOWNLOADED=$((DOWNLOADED+1))
        return 0
      fi
    fi
    attempt=$((attempt+1))
    sleep 1
  done
  rm -f "$dest"
  FAILED=$((FAILED+1))
  echo "FAILED: $url"
}

echo "=== Downloading Indoor Wall Panel images ==="
dl "$SRC/2025/06/1.jpg"                          "$BASE/indoor-wall-panels/1.jpg"
dl "$SRC/2025/06/5.jpg"                           "$BASE/indoor-wall-panels/5.jpg"
dl "$SRC/2025/06/walnuts-3.png"                   "$BASE/indoor-wall-panels/walnuts-3.png"
dl "$SRC/2025/06/3.jpg"                           "$BASE/indoor-wall-panels/3.jpg"
dl "$SRC/2025/06/2.jpg"                           "$BASE/indoor-wall-panels/2.jpg"
dl "$SRC/2025/06/6.jpg"                           "$BASE/indoor-wall-panels/6.jpg"
dl "$SRC/2025/06/7.jpg"                           "$BASE/indoor-wall-panels/7.jpg"
dl "$SRC/2025/06/ash-woos.png"                    "$BASE/indoor-wall-panels/ash-woos.png"
dl "$SRC/2025/06/9.jpg"                           "$BASE/indoor-wall-panels/9.jpg"
dl "$SRC/2025/06/10.jpg"                          "$BASE/indoor-wall-panels/10.jpg"
dl "$SRC/2025/06/madera-clasica.png"              "$BASE/indoor-wall-panels/madera-clasica.png"
dl "$SRC/2025/06/12.jpg"                          "$BASE/indoor-wall-panels/12.jpg"
dl "$SRC/2025/12/nogal-photoshop.png"             "$BASE/indoor-wall-panels/nogal-photoshop.png"
dl "$SRC/2025/07/esquineros-1.png"                "$BASE/indoor-wall-panels/esquineros-1.png"
dl "$SRC/2025/07/lineas-de-terminacion-1.png"     "$BASE/indoor-wall-panels/lineas-de-terminacion-1.png"
dl "$SRC/2025/06/Imagen-de-WhatsApp-2025-04-03-a-las-10.14.54_9d2c6388.jpg"  "$BASE/indoor-wall-panels/Imagen-de-WhatsApp-2025-04-03-a-las-10.14.54_9d2c6388.jpg"

echo "=== Downloading Outdoor Wall Panel images ==="
dl "$SRC/2025/06/16.jpg"                          "$BASE/outdoor-wall-panels/16.jpg"
dl "$SRC/2025/06/teka.jpg"                        "$BASE/outdoor-wall-panels/teka.jpg"
dl "$SRC/2025/06/17.jpg"                          "$BASE/outdoor-wall-panels/17.jpg"
dl "$SRC/2025/06/15.jpg"                          "$BASE/outdoor-wall-panels/15.jpg"

echo "=== Downloading Flat Wall Panel images ==="
dl "$SRC/2025/08/pure-black.png"                  "$BASE/flat-wall-panels/pure-black-flat.png"
dl "$SRC/2025/07/walnut-2.png"                    "$BASE/flat-wall-panels/walnut-2.png"
dl "$SRC/2025/06/24.jpg"                          "$BASE/flat-wall-panels/24.jpg"
dl "$SRC/2025/07/costa-del-sol.jpg"               "$BASE/flat-wall-panels/costa-del-sol.jpg"
dl "$SRC/2025/06/23.jpg"                          "$BASE/flat-wall-panels/23.jpg"
dl "$SRC/2025/07/dark-gold.jpg"                   "$BASE/flat-wall-panels/dark-gold.jpg"
dl "$SRC/2025/06/22.jpg"                          "$BASE/flat-wall-panels/22.jpg"
dl "$SRC/2025/06/ash-wood.jpg"                    "$BASE/flat-wall-panels/ash-wood.jpg"
dl "$SRC/2025/06/21.jpg"                          "$BASE/flat-wall-panels/21.jpg"
dl "$SRC/2025/07/dark-oak.jpg"                    "$BASE/flat-wall-panels/dark-oak.jpg"
dl "$SRC/2025/06/madera-clasica-flat-2.png"       "$BASE/flat-wall-panels/madera-clasica-flat-2.png"
dl "$SRC/2025/06/19.jpg"                          "$BASE/flat-wall-panels/19.jpg"
dl "$SRC/2025/07/white-ash.jpg"                   "$BASE/flat-wall-panels/white-ash.jpg"
dl "$SRC/2025/06/18.jpg"                          "$BASE/flat-wall-panels/18.jpg"
dl "$SRC/2025/07/dark-caramel.jpg"                "$BASE/flat-wall-panels/dark-caramel.jpg"

echo "=== Downloading Acoustic Panel images ==="
dl "$SRC/2025/08/wall-panels-acoustic-22_02.jpg"  "$BASE/acoustic-panels/wall-panels-acoustic-22_02.jpg"
dl "$SRC/2025/08/wall-panels-acoustic_01.jpg"     "$BASE/acoustic-panels/wall-panels-acoustic_01.jpg"
dl "$SRC/2025/08/wall-panels-acoustic_03.jpg"     "$BASE/acoustic-panels/wall-panels-acoustic_03.jpg"
dl "$SRC/2025/08/wall-panels-acoustic_02.jpg"     "$BASE/acoustic-panels/wall-panels-acoustic_02.jpg"

echo "=== Downloading Mirror PVC images ==="
dl "$SRC/2025/06/25.jpg"                          "$BASE/mirror-pvc/25.jpg"
dl "$SRC/2025/06/classic.png"                     "$BASE/mirror-pvc/classic.png"
dl "$SRC/2025/06/26.jpg"                          "$BASE/mirror-pvc/26.jpg"
dl "$SRC/2025/06/steel.jpg"                       "$BASE/mirror-pvc/steel.jpg"
dl "$SRC/2025/06/27.jpg"                          "$BASE/mirror-pvc/27.jpg"
dl "$SRC/2025/06/gold.jpg"                        "$BASE/mirror-pvc/gold.jpg"
dl "$SRC/2025/06/28.jpg"                          "$BASE/mirror-pvc/28.jpg"
dl "$SRC/2025/06/pink.png"                        "$BASE/mirror-pvc/pink.png"

echo "=== Downloading Metal PVC images ==="
dl "$SRC/2025/06/bronce-metal-2.png"              "$BASE/metal-pvc/bronce-metal-2.png"
dl "$SRC/2025/06/silver.png"                      "$BASE/metal-pvc/silver.png"

echo "=== Downloading Marble PVC High Gloss images ==="
dl "$SRC/2025/06/31.jpg"                          "$BASE/marble-pvc-high-gloss/31.jpg"
dl "$SRC/2025/06/negro-marquina.jpg"              "$BASE/marble-pvc-high-gloss/negro-marquina.jpg"
dl "$SRC/2025/06/32.jpg"                          "$BASE/marble-pvc-high-gloss/32.jpg"
dl "$SRC/2025/06/dark-london.jpg"                 "$BASE/marble-pvc-high-gloss/dark-london.jpg"
dl "$SRC/2025/06/33.jpg"                          "$BASE/marble-pvc-high-gloss/33.jpg"
dl "$SRC/2025/06/blanco-gold-carrara.jpg"         "$BASE/marble-pvc-high-gloss/blanco-gold-carrara.jpg"
dl "$SRC/2025/06/34.jpg"                          "$BASE/marble-pvc-high-gloss/34.jpg"
dl "$SRC/2025/06/blanco-calacatta.jpg"            "$BASE/marble-pvc-high-gloss/blanco-calacatta.jpg"
dl "$SRC/2025/06/35.jpg"                          "$BASE/marble-pvc-high-gloss/35.jpg"
dl "$SRC/2025/06/grey-gold.jpg"                   "$BASE/marble-pvc-high-gloss/grey-gold.jpg"
dl "$SRC/2025/06/36.jpg"                          "$BASE/marble-pvc-high-gloss/36.jpg"
dl "$SRC/2025/12/ChatGPT-Image-26-sept-2025-05_37_53-p.m.png"  "$BASE/marble-pvc-high-gloss/ChatGPT-Image-26-sept-2025-05_37_53-p.m.png"

echo "=== Downloading WPC Fence images ==="
dl "$SRC/2025/06/fences.png"                      "$BASE/wpc-fence/fences.png"
dl "$SRC/2025/06/Vivienda-moderna-con-cerca-oscura.png"   "$BASE/wpc-fence/Vivienda-moderna-con-cerca-oscura.png"
dl "$SRC/2025/06/Casa-moderna-con-cerca-elegante.png"     "$BASE/wpc-fence/Casa-moderna-con-cerca-elegante.png"

echo "=== Downloading Partition Divider images ==="
dl "$SRC/2025/08/nogal-americano.png"             "$BASE/partition-dividers/nogal-americano.png"
dl "$SRC/2025/08/aregue.png"                      "$BASE/partition-dividers/aregue.png"
dl "$SRC/2025/08/Sala-minimalista-con-vigas-de-PVC.png"  "$BASE/partition-dividers/Sala-minimalista-con-vigas-de-PVC.png"
dl "$SRC/2025/08/Sala-moderna-con-divisores-de-madera-1.png" "$BASE/partition-dividers/Sala-moderna-con-divisores-de-madera-1.png"

echo "=== Downloading Accessories images ==="
dl "$SRC/2025/07/3-s.png"                         "$BASE/accessories/3-s.png"
dl "$SRC/2025/07/1.jpg"                           "$BASE/accessories/1-acc.jpg"
dl "$SRC/2025/06/2-5.jpg"                         "$BASE/accessories/2-5.jpg"
dl "$SRC/2025/06/1-6.jpg"                         "$BASE/accessories/1-6.jpg"
dl "$SRC/2025/06/3-4.jpg"                         "$BASE/accessories/3-4.jpg"
dl "$SRC/2025/06/3-2.jpg"                         "$BASE/accessories/3-2.jpg"
dl "$SRC/2025/06/1-4.jpg"                         "$BASE/accessories/1-4.jpg"
dl "$SRC/2025/06/2-3.jpg"                         "$BASE/accessories/2-3.jpg"
dl "$SRC/2025/06/2-4.jpg"                         "$BASE/accessories/2-4.jpg"
dl "$SRC/2025/06/1-5.jpg"                         "$BASE/accessories/1-5.jpg"
dl "$SRC/2025/06/3-3.jpg"                         "$BASE/accessories/3-3.jpg"
dl "$SRC/2025/06/2-6.jpg"                         "$BASE/accessories/2-6.jpg"
dl "$SRC/2025/06/1-7.jpg"                         "$BASE/accessories/1-7.jpg"
dl "$SRC/2025/06/14.jpg"                          "$BASE/accessories/14.jpg"
dl "$SRC/2025/07/esquineros-1.png"                "$BASE/accessories/esquineros-1.png"
dl "$SRC/2025/07/lineas-de-terminacion-1.png"     "$BASE/accessories/lineas-de-terminacion-1.png"

echo "=== Downloading Kitchen images ==="
dl "$SRC/2025/07/gabinetes-cocinas-2.png"         "$BASE/kitchen/gabinetes-cocinas-2.png"
dl "$SRC/2025/07/gabinetes-cocinas.png"           "$BASE/kitchen/gabinetes-cocinas.png"
dl "$SRC/2025/07/1.png"                           "$BASE/kitchen/1-kitchen.png"

echo "=== Downloading Fireplace images ==="
dl "$SRC/2025/10/Sin-titulo-1-1.png"              "$BASE/fireplace/Sin-titulo-1-1.png"
dl "$SRC/2025/10/Sala-moderna-con-pampas-y-chimenea.png"   "$BASE/fireplace/Sala-moderna-con-pampas-y-chimenea.png"
dl "$SRC/2025/10/ChatGPT-Image-7-oct-2025-12_05_14-a.m.png" "$BASE/fireplace/ChatGPT-Image-7-oct-2025-12_05_14-a.m.png"
dl "$SRC/2025/10/ChatGPT-Image-7-oct-2025-12_05_11-a.m.png" "$BASE/fireplace/ChatGPT-Image-7-oct-2025-12_05_11-a.m.png"

echo "=== Downloading Lights images ==="
dl "$SRC/2025/07/led-light-profile.png"           "$BASE/lights/led-light-profile.png"
dl "$SRC/2025/07/2.jpg"                           "$BASE/lights/2-lights.jpg"
dl "$SRC/2025/12/4db34b66b5437dd643265cf9e27b1a43.png"  "$BASE/lights/4db34b66b5437dd643265cf9e27b1a43.png"

echo ""
echo "=== Download Summary ==="
echo "Downloaded: $DOWNLOADED"
echo "Skipped (already existed): $SKIPPED"
echo "Failed: $FAILED"
