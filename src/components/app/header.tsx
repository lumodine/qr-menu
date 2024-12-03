"use client"

import { useScrollVisible } from "@/hooks/useScrollVisible"
import Image from "next/image"
import { LanguageSelect } from "./language"
import { CurrencySelect } from "./currency"
import Link from "next/link"
import { cn } from "@/utils/shadcn"
import { Tenant } from "@/types"

export type HeaderProps = {
    tenant: Tenant
}

export const Header = ({
    tenant,
}: HeaderProps) => {
    const isVisible = useScrollVisible(200)

    return (
        <header className={
            cn(
                "transition-all z-50 fixed top-0 w-full",
                isVisible && "bg-primary drop-shadow-lg"
            )
        }>
            <nav className="container flex justify-end items-center p-2 gap-2 h-20">
                <div className="flex-1">
                    <Link
                        href={"/"}
                        className={
                            cn(
                                "gap-2 items-center hidden",
                                isVisible && "inline-flex"
                            )
                        }
                    >
                        {
                            tenant.logo && (
                                <Image
                                    src={tenant.logo}
                                    alt={tenant.name}
                                    width={50}
                                    height={50}
                                    loading={"lazy"}
                                    className="rounded-sm"
                                />
                            )
                        }
                        <span className="text-primary-foreground">
                            {tenant.name}
                        </span>
                    </Link>
                </div>
                {
                    (tenant.currencies.length > 1 || tenant.languages.length > 1) && (
                        <div className="flex gap-1">
                            <CurrencySelect
                                currencies={tenant.currencies}
                            />
                            <LanguageSelect
                                languages={tenant.languages}
                            />
                        </div>
                    )
                }
            </nav>
        </header>
    )
}
Header.displayName = "Header"
