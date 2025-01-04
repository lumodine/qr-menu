import {AnnouncementCarousel} from "@/components/announcement/announcement-carousel";
import {ItemList} from "@/components/item/item-list";
import {TenantHero} from "@/components/tenant/tenant-hero";

export default async function TenantHomePage() {
  return (
    <>
      <TenantHero />

      <AnnouncementCarousel />

      <ItemList />
    </>
  );
}
