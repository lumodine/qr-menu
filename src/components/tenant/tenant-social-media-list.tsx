"use client";

import {TenantSocialMediaItem} from "@/components/tenant/tenant-social-media-item";
import {useAppContext} from "@/contexts/AppContext";

const TenantSocialMediaList = () => {
  const {tenant} = useAppContext();

  const socialMedias = tenant.socialMedias.filter((socialMedia) => !!socialMedia.value);

  if (!socialMedias || socialMedias.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      {socialMedias.map((socialMedia, socialMediaIndex) => (
        <TenantSocialMediaItem key={socialMediaIndex} socialMedia={socialMedia} />
      ))}
    </div>
  );
};

TenantSocialMediaList.displayName = "TenantSocialMediaList";

export {TenantSocialMediaList};
