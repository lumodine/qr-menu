import {redirect} from "next/navigation";
import {Metadata} from "next";
import React from "react";
import qrMenuService from "@/services/qr-menu.service";
import {Header} from "@/components/app/header";
import {Footer} from "@/components/app/footer";
import {BackToTopButton} from "@/components/app/button";
import {AppProvider} from "@/contexts/AppContext";
import {TenantStatus, type CurrencyGroup, type LanguageGroup} from "@/types";
import "./globals.css";
import {TenantMaintenance} from "@/components/app/tenant";

export const metadata: Metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_APP_NAME!,
    template: `%s - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  },
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

  const themeClassName = `theme-${tenant.theme || "zinc"}`;

  return (
    <AppProvider
      defaultCurrency={defaultCurrency}
      defaultLanguage={defaultLanguage}
      tenant={tenant}
    >
      <head>
        <link href="https://cdn.lumodine.com/public/type.css" rel="stylesheet" />
        <link href="https://cdn.lumodine.com/public/theme.css" rel="stylesheet" />
      </head>
      <body className={themeClassName}>
        <Header tenant={tenant} />

        {tenant.status === TenantStatus.PUBLISHED && <main>{children}</main>}
        {tenant.status === TenantStatus.MAINTENANCE && <TenantMaintenance />}

        <BackToTopButton />

        <Footer tenant={tenantResponse.data} />
      </body>
    </AppProvider>
  );
}
