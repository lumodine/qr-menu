"use client"

import { useTenantContext } from "@/contexts/tenantContext"
import { notFound } from "next/navigation"
import { useEffect } from "react"

type TenantLayoutProps = {
    children: React.ReactNode
    params: {
        tenantId: string
    }
}

export default function TenantLayout({ children, params }: TenantLayoutProps) {
    const tenantId = params.tenantId

    if (!tenantId) {
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
