const fs = require("node:fs")
const path = require("node:path")

const galleryDir = path.join(process.cwd(), "public/images/gallery")
const outputFilePath = path.join(process.cwd(), "public/images/gallery/images.json")

console.log("Generating images JSON file...")
console.log("Gallery directory:", galleryDir)
console.log("Output file path:", outputFilePath)

const validExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"]

const files = fs.readdirSync(galleryDir)
const images = files
  .filter(file => validExtensions.includes(path.extname(file).toLowerCase()))
  .filter(file => !/^EXCLUDE_/.test(file))
  .map(file => `/images/gallery/${file}`)

fs.writeFileSync(outputFilePath, JSON.stringify(images, null, 2))

console.log("Images JSON file generated successfully.")
