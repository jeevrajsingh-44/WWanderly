const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const folder = "./public";

const files = fs.readdirSync(folder);

async function convert() {
  for (const file of files) {
    if (!file.toLowerCase().endsWith(".png")) continue;

    const input = path.join(folder, file);
    const output = path.join(
      folder,
      file.replace(/\.png$/i, ".webp")
    );

    await sharp(input)
      .webp({ quality: 85 })
      .toFile(output);

    console.log(`${file} -> ${path.basename(output)}`);
  }
}

convert();