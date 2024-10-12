"use client"

import { useTenantContext } from "@/contexts/tenantContext"
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
            <TenantLink href={href} className="inline-flex items-center justify-center">
                <ArrowLeft />
            </TenantLink>

            <TenantLink href="/">
                <Image
                    src={settings.logo}
                    alt={`${settings.name} logo`}
                    width={100}
                    height={55}
                    loading="lazy"
                />
            </TenantLink>

            <TenantLink href="/">
                <Image
                    src={settings.logo}
                    alt={`${settings.name} logo`}
                    width={50}
                    height={30}
                    loading="lazy"
                />
            </TenantLink>
        </header>
    )
}
TenantGroupHeader.displayName = "TenantGroupHeader"

export type TenantLinkProps = {
    children: React.ReactNode
    href: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const TenantLink = ({ children, href, ...props }: TenantLinkProps) => {
    const tenantId = useTenantContext((state) => state.tenantId)

    return (
        <Link href={`/${[tenantId, href].join("")}`} {...props}>
            {children}
        </Link>
    )
}
TenantLink.displayName = "TenantLink"
