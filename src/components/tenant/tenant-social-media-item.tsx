"use client";

import {Facebook, Globe, Instagram, X, Youtube} from "lucide-react";
import Link from "next/link";
import {SocialMedia} from "@/types";

const socialMediaIcons = {
  instagram: Instagram,
  x: X,
  facebook: Facebook,
  youtube: Youtube,
  website: Globe,
};

export type TenantSocialMediaItemProps = {
  socialMedia: SocialMedia;
};

export const TenantSocialMediaItem = ({socialMedia}: TenantSocialMediaItemProps) => {
  const Icon = socialMediaIcons[socialMedia.type];

  if (!Icon) {
    return null;
  }

  return (
    <Link
      className="rounded-full border bg-primary text-primary-foreground p-2 hover:scale-90"
      href={socialMedia.value}
      target="_blank"
    >
      {Icon && <Icon />}
    </Link>
  );
};
TenantSocialMediaItem.displayName = "TenantSocialMediaItem";
