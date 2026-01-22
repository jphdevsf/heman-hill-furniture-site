import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ScrollRefsProvider } from "./contexts/ScrollRefsContext"

export { siteMetadata as metadata } from "./seo/metadata"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export const metadata = {
  title: "Home | HemanHill",
  description: "Furniture portfolio for HemanHill"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/heman-hill-logo.jpg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400&family=Roboto:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased sans`}>
        <ScrollRefsProvider>
          <div id="__next">{children}</div>
        </ScrollRefsProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
