import type { Metadata } from "next"
import { BackToTopButton } from "@/components/app/back-to-top-button"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_APP_NAME!,
    template: `%s - ${process.env.NEXT_PUBLIC_APP_NAME!}`
  }
}

type RootLayoutProps = {
  children: Readonly<React.ReactNode>
}

export default async function RootLayout({
  children,
}: RootLayoutProps) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <BackToTopButton />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
