// app/lib/cloudinary.ts
export async function getGalleryImageData() {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME
    const apiKey = process.env.CLOUDINARY_API_KEY
    const apiSecret = process.env.CLOUDINARY_API_SECRET

    if (!cloudName || !apiKey || !apiSecret) {
      console.error("Missing Cloudinary environment variables")
      return []
    }

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

    if (!response.ok) {
      console.error("Cloudinary fetch failed:", response.status, response.statusText)
      return []
    }

    const data = await response.json()

    if (!data?.resources) {
      console.error("Cloudinary returned no resources:", data)
      return []
    }

    return data.resources.map(img => ({
      url: img.secure_url,
      alt: img.context?.custom?.alt || "",
      width: img.width,
      height: img.height,
      id: img.public_id
    }))
  } catch (err) {
    console.error("Error fetching Cloudinary gallery data:", err)
    return []
  }
}
