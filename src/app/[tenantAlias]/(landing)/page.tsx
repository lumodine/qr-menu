import {AnnouncementCarousel} from "@/components/announcement/announcement-carousel";
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

  const [{data: items}, {data: announcements}] = await Promise.all([
    qrMenuService.getItems(tenantAlias),
    qrMenuService.getAllAnnouncements(tenantAlias),
  ]);

  return (
    <>
      <TenantHero />

      <AnnouncementCarousel annannouncements={announcements} />

      <ItemList items={items} />
    </>
  );
}
