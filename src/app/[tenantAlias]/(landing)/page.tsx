import {CategoryList} from "@/components/category/category-list";
import {TenantHero} from "@/components/tenant/tenant-hero";
import qrMenuService from "@/services/qr-menu.service";

type TenantHomePageProps = {
  params: Promise<{
    tenantAlias: string;
  }>;
};

export default async function TenantHomePage({params}: TenantHomePageProps) {
  const {tenantAlias} = await params;

  const {data: categories} = await qrMenuService.getCategories(tenantAlias);

  return (
    <>
      <TenantHero />

      <CategoryList categories={categories} />
    </>
  );
}
