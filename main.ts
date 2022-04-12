import * as Sharp from "sharp";

// async function main() {
//   console.log(`main >>`);

//   let buffer = await Sharp(`./assets/src.jpg`).toBuffer();

//   for (let i = 0; i < 2; i++) {
//     buffer = await compression(buffer);
//   }

//   await Sharp(buffer).toFile(`out.jpg`);
// }

// async function compression(src: Buffer) {
//   const dst = await Sharp(src)
//     .jpeg({ quality: 85 })
//     .toBuffer();

//   return dst;
// }


async function main() {
  console.log(`main >>`);

  const sharp = Sharp(`./assets/src.jpg`);

  for (let i = 0; i < 10; i++) {
    // 
    sharp.jpeg({ quality: 85 });

    console.log(`  i="${i}"`);
  }

  sharp.toFile(`out.jpg`);
}

main();
