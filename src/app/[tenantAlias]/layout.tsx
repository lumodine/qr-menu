import "./globals.css"
import qrMenuService from "@/services/qr-menu.service"
import { Header } from "@/components/app/header"
import { redirect } from "next/navigation"
import { Footer } from "@/components/app/footer"
import { BackToTopButton } from "@/components/app/button"
import { AppProvider } from "@/contexts/AppContext"

type MetadataProps = {
  params: Promise<{
    tenantAlias: string
  }>
}

export async function generateMetadata({ params }: MetadataProps) {
  const { tenantAlias } = await params

  const tenantResponse = await qrMenuService.getDetail(tenantAlias);

  if (!tenantResponse.success) {
    return;
  }

  return {
    title: `${tenantResponse.data.name} - ${process.env.NEXT_PUBLIC_APP_NAME!}`
  };
}

type RootLayoutProps = {
  children: Readonly<React.ReactNode>
} & MetadataProps

export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {
  const { tenantAlias } = await params

  const tenantResponse = await qrMenuService.getDetail(tenantAlias);

  if (!tenantResponse.success) {
    return redirect(process.env.NEXT_PUBLIC_LANDING_URL!);
  }

  const tenant = tenantResponse.data;

  const defaultLanguage =
    tenant.languages.find((language: any) => language.isDefault)
    || tenant.languages[0];
  const defaultCurrency =
    tenant.currencies.find((currency: any) => currency.isDefault)
    || tenant.currencies[0];

  const themeClassName = `theme-${tenant.theme || "zinc"}`;

  return (
    <AppProvider
      defaultLanguage={defaultLanguage}
      defaultCurrency={defaultCurrency}
    >
      <html
        lang={defaultLanguage.language.culture}
        dir={defaultLanguage.language.direction}
        className={themeClassName}
      >
        <body>
          <Header
            tenant={tenantResponse.data}
          />

          <main>
            {children}
          </main>

          <BackToTopButton />

          <Footer
            tenant={tenantResponse.data}
          />
        </body>
      </html>
    </AppProvider>
  )
}
