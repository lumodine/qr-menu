"use client"

import Image from "next/image"
import Link from "next/link"
import { CurrencySelect } from "./currency"
import { LanguageSelect } from "./language"

export type FooterProps = {
    tenant: any
    defaultLanguage: any
    defaultCurrency: any
}

export const Footer = ({
    tenant,
    defaultLanguage,
    defaultCurrency
}: FooterProps) => {
    const startYear = 2024;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const year = startYear === currentYear
        ? startYear
        : `${startYear}-${currentYear}`;

    return (
        <footer className="py-8">
            <div className="container flex flex-col gap-6">
                <div className="flex flex-col gap-6 items-center justify-center">
                    <Link
                        href={"/"}
                        className="flex gap-2 items-center justify-center"
                    >
                        {
                            tenant.logo && (
                                <Image
                                    src={tenant.logo}
                                    alt={tenant.name}
                                    width={50}
                                    height={50}
                                    loading={"lazy"}
                                    className="rounded-full"
                                />
                            )
                        }
                        <span>
                            {tenant.name}
                        </span>
                    </Link>
                    {
                        tenant.address && (
                            <p className="text-sm">
                                {tenant.address}
                            </p>
                        )
                    }
                </div>
                {
                    (tenant.currencies.length > 1 || tenant.languages.length > 1) && (
                        <div className="flex gap-2 max-w-32 items-center justify-center m-auto">
                            <CurrencySelect
                                currencies={tenant.currencies}
                                defaultCurrency={defaultCurrency}
                            />
                            <LanguageSelect
                                languages={tenant.languages}
                                defaultLanguage={defaultLanguage}
                            />
                        </div>
                    )
                }
                <div className="flex flex-col items-center justify-center gap-6">
                    <p className="text-xs">
                        &copy; {year} &#x2022; <Link
                            href={process.env.NEXT_PUBLIC_LANDING_URL!}
                            target="_blank"
                            className="underline"
                        >
                            {process.env.NEXT_PUBLIC_APP_NAME}
                        </Link> &#x2022; Tüm hakları saklıdır
                    </p>
                </div>
            </div>
        </footer>
    )
}
Footer.displayName = "Footer"
