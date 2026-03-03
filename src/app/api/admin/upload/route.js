import { v2 as cloudinary } from "cloudinary"
import { NextResponse } from "next/server"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(req) {
  const form = await req.formData()

  // Multiple files come through as an array
  const files = form.getAll("files")
  const alts = form.getAll("alts")
  const tags = form.getAll("tags")
  if (!files || files.length === 0) {
    return NextResponse.json({ error: "No files uploaded" }, { status: 400 })
  }

  const uploadSingle = (file, i) => {
    const tag = tags[i]
    const alt = alts[i]
    new Promise((resolve, reject) => {
      file
        .arrayBuffer()
        .then(bytes => {
          const buffer = Buffer.from(bytes)

          const stream = cloudinary.uploader.upload_stream(
            {
              folder: process.env.CLOUDINARY_FOLDER,
              tags: tag === "on" ? "gallery" : "", // put back to process.env.CLOUDINARY_TAG, TEST ONLY
              context: {
                alt
              }
            },
            (error, result) => {
              if (error) reject(error)
              else resolve(result)
            }
          )

          stream.end(buffer)
        })
        .catch(reject)
    })
  }

  try {
    const results = await Promise.all(files.map((file, i) => uploadSingle(file, i)))
    return NextResponse.json({ success: true, uploaded: results })
  } catch (error) {
    console.error("Cloudinary upload error:", error)
    return NextResponse.json({ error: "Upload failed", details: error.message }, { status: 500 })
  }
}
