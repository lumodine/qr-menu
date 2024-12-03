"use client"

import { useAppContext } from "@/contexts/AppContext"
import { Tenant } from "@/types"
import Image from "next/image"
import Link from "next/link"

export type FooterProps = {
    tenant: Tenant
}

export const Footer = ({
    tenant
}: FooterProps) => {
    const startYear = 2024;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const year = startYear === currentYear
        ? startYear
        : `${startYear}-${currentYear}`;

    const { t } = useAppContext();

    return (
        <footer className="py-16">
            <div className="container flex flex-col gap-6">
                <div className="flex flex-col gap-6 items-center justify-center">
                    <Link
                        href={"/"}
                        className="flex flex-col gap-2 items-center justify-center"
                    >
                        {
                            tenant.logo && (
                                <Image
                                    src={tenant.logo}
                                    alt={tenant.name}
                                    width={50}
                                    height={50}
                                    loading={"lazy"}
                                    className="rounded-sm w-[50px] h-[50px]"
                                />
                            )
                        }
                        <span>
                            {tenant.name}
                        </span>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                    <p className="text-xs">
                        &copy; {year} &#x2022; <Link
                            href={process.env.NEXT_PUBLIC_LANDING_URL!}
                            target="_blank"
                            className="underline"
                        >
                            {process.env.NEXT_PUBLIC_APP_NAME}
                        </Link> &#x2022; {t("all_rights_reserved")}
                    </p>
                </div>
            </div>
        </footer>
    )
}
Footer.displayName = "Footer"
