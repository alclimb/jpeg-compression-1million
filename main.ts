import * as Sharp from "sharp";

async function main() {
  console.log(`main >>`);

  let buffer = await Sharp(`./assets/src.jpg`).toBuffer();

  for (let i = 0; i < 1000000; i++) {
    buffer = await compression(buffer);

    console.log(`  i="${i}"`);
  }

  await Sharp(buffer).toFile(`out.jpg`);
}

async function compression(src: Buffer) {
  const dst = await Sharp(src)
    .jpeg({ quality: 30 })
    .toBuffer();

  return dst;
}


// async function main() {
//   console.log(`main >>`);

//   const sharp = Sharp(`./assets/src.jpg`);

//   for (let i = 0; i < 1000000; i++) {
//     // 
//     sharp.jpeg({ quality: 30 });

//     console.log(`  i="${i}"`);
//   }

//   sharp.toFile(`out.jpg`);
// }

main();
