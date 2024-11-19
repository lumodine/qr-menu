import tenantService from "@/services/tenant.service"
import { notFound } from "next/navigation"

type TenantLayoutProps = {
    children: React.ReactNode
    params: Promise<{
        tenantAlias: string
    }>
}

export default async function TenantLayout({ children, params }: TenantLayoutProps) {
    const { tenantAlias } = await params

    if (!tenantAlias) {
      notFound()
    }

    const tenantQrMenu = await tenantService.getQrMenu(tenantAlias);
    if (!tenantQrMenu.success) {
        notFound();
    }

    return (
        <>
            {children}
        </>
    )
}
