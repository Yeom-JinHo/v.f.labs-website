import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

export async function getLQIPBase64(
  imagePath: string,
  mimeType = "image/jpeg",
  width = 200,
  height = 300,
): Promise<string> {
  const fullPath = path.join(process.cwd(), "public", imagePath);
  const imageBuffer = await fs.readFile(fullPath);

  const resizedBuffer = await sharp(imageBuffer)
    .resize({ width, height }) // 아주 작게 줄임
    .blur() // 살짝 블러 처리해줌 (선택사항)
    .toBuffer();

  const base64 = resizedBuffer.toString("base64");

  return `data:${mimeType};base64,${base64}`;
}
