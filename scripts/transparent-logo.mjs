/**
 * Near-white / neutral pixels → transparent PNG.
 * Run: node scripts/transparent-logo.mjs [input.png]
 * Default input: public/logo-mark-raw.png (place source there first).
 */
import sharp from "sharp";
import { existsSync } from "fs";

const input = process.argv[2] ?? "public/logo-mark-raw.png";
const output = "public/logo-mark.png";

if (!existsSync(input)) {
  console.error("Missing input:", input);
  process.exit(1);
}

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const pixels = new Uint8ClampedArray(data);
const { width, height } = info;

for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const sat = max === 0 ? 0 : (max - min) / max;
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;

  // Solid / near-white arka plan (düşük doygunluk + yüksek parlaklık)
  if (lum > 249 && sat < 0.045) {
    pixels[i + 3] = 0;
    continue;
  }
  if (r > 252 && g > 252 && b > 252) {
    pixels[i + 3] = 0;
    continue;
  }
  // Kenar yumuşatma: çok açık gri-beyaz halo
  if (lum > 246 && sat < 0.025) {
    const fade = (lum - 246) / 8;
    pixels[i + 3] = Math.round(pixels[i + 3] * (1 - Math.min(1, Math.max(0, fade))));
  }
}

await sharp(Buffer.from(pixels), {
  raw: { width, height, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log("Wrote", output, `${width}x${height}`);
