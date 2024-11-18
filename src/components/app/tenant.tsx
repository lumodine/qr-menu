"use client"

import Link from "next/link"
import { settings } from "@/data"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export type TenantGroupHeaderProps = {
    href: string
}

export const TenantGroupHeader = ({ href }: TenantGroupHeaderProps) => {
    return (
        <header className="bg-background w-full flex justify-between items-center px-4 py-1">
            <Link href={href} className="inline-flex items-center justify-center">
                <ArrowLeft />
            </Link>

            <Link href="/">
                <Image
                    src={settings.logo}
                    alt={`${settings.name} logo`}
                    width={100}
                    height={55}
                    loading="lazy"
                />
            </Link>

            <Link href="/">
                <Image
                    src={settings.logo}
                    alt={`${settings.name} logo`}
                    width={50}
                    height={30}
                    loading="lazy"
                />
            </Link>
        </header>
    )
}
TenantGroupHeader.displayName = "TenantGroupHeader"
