// app/lib/cloudinary.ts
export async function getGalleryImageData() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`

  const body = new URLSearchParams({
    expression: "folder:hemanhill/* AND tags=gallery",
    max_results: "100"
  })

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body,
    next: { revalidate: 3600 }
  })

  const data = await response.json()
  console.log("JPH", data)
  return data.resources.map(img => ({
    url: img.secure_url,
    alt: img.context?.custom?.alt || "",
    width: img.width,
    height: img.height,
    id: img.public_id
  }))
}
