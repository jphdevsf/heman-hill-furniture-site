import { readdirSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  const galleryDir = join(process.cwd(), 'public/images/gallery');
  const files = readdirSync(galleryDir);
  const images = files.map(file => `/images/gallery/${file}`);
  res.status(200).json(images);
}