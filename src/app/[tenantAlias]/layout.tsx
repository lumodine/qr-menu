import "./globals.css"
import qrMenuService from "@/services/qr-menu.service"
import { Header } from "@/components/app/header"
import { redirect } from "next/navigation"
import { Footer } from "@/components/app/footer"
import { BackToTopButton } from "@/components/app/button"

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
    tenant.languages.find(language => language.isDefault)
    || tenant.languages[0];
  const defaultCurrency =
    tenant.currencies.find(currency => currency.isDefault)
    || tenant.currencies[0];

  const themeClassName = `theme-${tenant.theme || "zinc"}`;

  return (
    <html
      lang={defaultLanguage._id.culture}
      dir={defaultLanguage._id.direction}
      className={themeClassName}
    >
      <body>
        <Header
          tenant={tenantResponse.data}
          defaultLanguage={defaultLanguage}
          defaultCurrency={defaultCurrency}
        />
        
        <main>
          {children}
        </main>

        <BackToTopButton />

        <Footer
          tenant={tenantResponse.data}
          defaultLanguage={defaultLanguage}
          defaultCurrency={defaultCurrency}
        />
      </body>
    </html>
  )
}
