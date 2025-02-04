const fs = require('fs');
const path = require('path');

const galleryDir = path.join(process.cwd(), 'public/images/gallery');
const outputFilePath = path.join(process.cwd(), 'public/images/gallery/images.json');

console.log('Generating images JSON file...');
console.log('Gallery directory:', galleryDir);
console.log('Output file path:', outputFilePath);

const files = fs.readdirSync(galleryDir);
const images = files.map(file => `/images/gallery/${file}`);

fs.writeFileSync(outputFilePath, JSON.stringify(images, null, 2));

console.log('Images JSON file generated successfully.');