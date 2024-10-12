"use client"

import { useTenantContext } from "@/contexts/tenantContext"
import Link from "next/link"

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
