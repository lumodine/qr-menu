import qrMenuService from "@/services/qr-menu.service"
import { CategoryList } from "@/components/app/category"
import { TenantHero } from "@/components/app/tenant"

type TenantHomePageProps = {
    params: Promise<{
        tenantAlias: string
    }>
}

export default async function TenantHomePage({ params }: TenantHomePageProps) {
    const { tenantAlias } = await params

    const { data: categories } = await qrMenuService.getCategories(tenantAlias);

    return (
        <>
            <TenantHero />
            
            <CategoryList
                categories={categories}
            />
        </>
    )
}