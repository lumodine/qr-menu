import type { Metadata } from "next"
import { BackToTopButton } from "@/components/app/back-to-top-button"
import { Suspense } from "react"
import { Loading } from "@/components/app/loading"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_APP_NAME!,
    template: `%s - ${process.env.NEXT_PUBLIC_APP_NAME!}`
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
