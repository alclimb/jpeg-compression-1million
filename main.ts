import * as sharp from "sharp";

async function main() {
  // 元の画像を読み込んでバッファーとして保持
  let buffer = await sharp(`./assets/src.jpg`).toBuffer();

  // 100万回試行する
  for (let i = 0; i < 1000000; i++) {
    // jpeg圧縮を行う
    buffer = await sharp(buffer)
      .jpeg({ quality: 30 })
      .toBuffer();

    // ログ表示
    console.log(`  i="${i}"`);
  }

  // jpeg圧縮を行った画像を保存する
  await sharp(buffer).toFile(`out.jpg`);
}

main();
