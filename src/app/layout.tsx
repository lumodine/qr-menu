import type { Metadata } from "next"
import { BackToTopButton } from "@/components/app/back-to-top-button"
import { settings } from "@/data"
import { Suspense } from "react"
import { Loading } from "@/components/app/loading"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: settings.name,
    template: `%s - ${settings.name}`
  },
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon.ico"
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      url: "/favicon.ico"
    }
  ],
  robots: "nofollow, noindex"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <Suspense fallback={<Loading />}>
          {children}
          <BackToTopButton />
        </Suspense>
      </body>
    </html>
  )
}
