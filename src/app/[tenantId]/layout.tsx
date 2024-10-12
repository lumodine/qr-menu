"use client"

import { useTenantContext } from "@/contexts/tenantContext"
import { notFound } from "next/navigation"

type TenantLayoutProps = {
    children: React.ReactNode
    params: {
        tenantId: string
    }
}

const allowedTenants = ["test"] // TODO

export default function TenantLayout({ children, params }: TenantLayoutProps) {
    const tenantId = params.tenantId

    if (!tenantId) {
      notFound()
    }

    const hasTenant = allowedTenants.includes(tenantId)
    if (!hasTenant) {
        notFound()
    }
    
    const setTenantId = useTenantContext((state) => state.setTenantId)
    setTenantId(params.tenantId)

    return (
        <>
            {children}
        </>
    )
}
