import {redirect} from "next/navigation";
import {Metadata} from "next";
import React from "react";
import qrMenuService from "@/services/qr-menu.service";
import {AppProvider} from "@/contexts/AppContext";
import {HeaderPosition, TenantStatus, type CurrencyGroup, type LanguageGroup} from "@/types";
import "@/app/globals.css";
import {TenantMaintenance} from "@/components/tenant/tenant-maintenance";
import {Header} from "@/components/common/header";
import {BackToTopButton} from "@/components/common/back-to-top-button";
import {Footer} from "@/components/common/footer";
import {cn} from "@/utils/shadcn";

export const metadata: Metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_APP_NAME!,
    template: `%s - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  },
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "https://cdn.lumodine.com/public/favicon.ico?v=1",
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      url: "https://cdn.lumodine.com/public/favicon.ico?v=1",
    },
  ],
  robots: "nofollow, noindex",
};

type RootLayoutProps = {
  children: Readonly<React.ReactNode>;
  params: Promise<{
    tenantAlias: string;
  }>;
};

export default async function RootLayout({children, params}: RootLayoutProps) {
  const {tenantAlias} = await params;

  const tenantResponse = await qrMenuService.getDetail(tenantAlias);

  if (!tenantResponse.success || !tenantResponse.data) {
    return redirect(process.env.NEXT_PUBLIC_LANDING_URL!);
  }

  const tenant = tenantResponse.data;

  const defaultLanguage =
    tenant.languages.find((language: LanguageGroup) => language.isDefault) || tenant.languages[0];
  const defaultCurrency =
    tenant.currencies.find((currency: CurrencyGroup) => currency.isDefault) || tenant.currencies[0];

  const themeClassName = `theme-${tenant.theme.color || "zinc"}`;
  const font = tenant.theme.font || "nunito";
  const fontClassName = `font-${font}`;
  const headerPosition = tenant.theme.headerPosition || HeaderPosition.BOTTOM;

  return (
    <AppProvider
      defaultCurrency={defaultCurrency}
      defaultLanguage={defaultLanguage}
      tenant={tenant}
    >
      <head>
        <link href="https://cdn.lumodine.com/public/type.css" rel="stylesheet" />
        <link href="https://cdn.lumodine.com/public/theme.css" rel="stylesheet" />
        <link href={`https://cdn.lumodine.com/public/fonts/${font}.css`} rel="stylesheet" />
      </head>
      <body className={cn(fontClassName, themeClassName)}>
        {tenant.status === TenantStatus.PUBLISHED && <main>{children}</main>}
        {tenant.status === TenantStatus.MAINTENANCE && <TenantMaintenance />}

        <Header position={headerPosition} tenant={tenant} />

        <BackToTopButton headerPosition={headerPosition} />

        <Footer tenant={tenantResponse.data} />
      </body>
    </AppProvider>
  );
}
