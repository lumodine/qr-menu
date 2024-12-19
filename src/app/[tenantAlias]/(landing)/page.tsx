import {ItemList} from "@/components/item/item-list";
import {TenantHero} from "@/components/tenant/tenant-hero";
import qrMenuService from "@/services/qr-menu.service";

type TenantHomePageProps = {
  params: Promise<{
    tenantAlias: string;
  }>;
};

export default async function TenantHomePage({params}: TenantHomePageProps) {
  const {tenantAlias} = await params;

  const {data: items} = await qrMenuService.getItems(tenantAlias);

  return (
    <>
      <TenantHero />

      <ItemList items={items} />
    </>
  );
}
