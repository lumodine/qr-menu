"use client"

import { useScrollVisible } from "@/hooks/useScrollVisible"
import Image from "next/image"
import { LanguageSelect } from "./language"
import { CurrencySelect } from "./currency"
import { Search } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import { cn } from "@/utils/shadcn"

export type HeaderProps = {
    tenant: any
    defaultLanguage: any
    defaultCurrency: any
}

export const Header = ({
    tenant,
    defaultLanguage,
    defaultCurrency
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
                {
                    tenant.logo && (
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
                                <Image
                                    src={tenant.logo}
                                    alt={tenant.name}
                                    width={50}
                                    height={50}
                                    loading={"lazy"}
                                    className="rounded-full"
                                />
                                {/* <span className="font-semibold text-primary-foreground">
                            {tenant.name}
                        </span> */}
                            </Link>
                        </div>
                    )
                }
                {
                    tenant.currencies.length > 1 || tenant.languages.length > 1 && (
                        <div className="flex gap-1">
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
                {/* <div>
                    <Button
                        variant={"outline"}
                        size={"icon"}
                        className="rounded-full"
                    >
                        <Search />
                    </Button>
                </div> */}
            </nav>
        </header>
    )
}
Header.displayName = "Header"
