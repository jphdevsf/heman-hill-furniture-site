export const siteMetadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: "Custom Furniture & Design | HemanHill.com",
    template: "%s | HemanHill.com"
  },
  description:
    "HemanHill LLC creates hand-crafted custom furniture and woodworking pieces for homes and businesses in the San Luis Obispo area. Explore unique, made-to-order designs built with quality craftsmanship.",
  keywords: ["furniture", "custom", "design", "wood", "wood-working", "carpentry"],
  authors: [{ name: "Jacob Hernandez" }],
  creator: "Jacob Hernandez",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "HemanHill",
    title: "Custom Furniture & Design | HemanHill.com",
    description:
      "HemanHill LLC creates hand-crafted custom furniture and woodworking pieces for homes and businesses in the San Luis Obispo area. Explore unique, made-to-order designs built with quality craftsmanship."
  },
  icons: {
    icon: "/favicons/favicon.ico"
  }
}
