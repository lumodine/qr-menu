"use client";

import type {Tenant} from "@/types";
import {Facebook, Globe, Instagram, Wrench, X, Youtube} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {cn} from "@/utils/shadcn";
import {useAppContext} from "@/contexts/AppContext";

export type TenantLogoProps = {
  tenant: Tenant;
};

export const TenantLogo = ({tenant}: TenantLogoProps) => {
  return (
    <>
      {tenant.logo && (
        <Image
          alt={tenant.name}
          className="rounded-sm w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
          height={100}
          loading={"lazy"}
          src={tenant.logo}
          width={100}
        />
      )}
      {!tenant.logo && (
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-white drop-shadow-2xl">
          {tenant.name}
        </h1>
      )}
    </>
  );
};
TenantLogo.displayName = "TenantLogo";

export const TenantHero = () => {
  const {tenant} = useAppContext();

  const hasBackground = !!tenant.background;

  return (
    <section
      className={cn(
        hasBackground && "bg-[image:var(--bg-image)]",
        "bg-center bg-no-repeat bg-cover overflow-hidden bg-primary/50",
      )}
      style={{
        ["--bg-image" as string]: hasBackground ? `url(${tenant.background})` : null,
      }}
    >
      <div className="flex items-center justify-center w-full h-[30vh] lg:h-[40vh] bg-black/50 p-2">
        <TenantLogo tenant={tenant} />
      </div>
    </section>
  );
};
TenantHero.displayName = "TenantHero";

const socialMediaIcons = {
  instagram: Instagram,
  x: X,
  facebook: Facebook,
  youtube: Youtube,
  website: Globe,
};

export const TenantSocialMedia = () => {
  const {tenant} = useAppContext();

  const socialMedias = tenant.socialMedias.filter((socialMedia) => !!socialMedia.value);

  if (!socialMedias || socialMedias.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      {socialMedias.map((socialMedia, socialMediaIndex) => {
        const Icon = socialMediaIcons[socialMedia.type];

        return (
          <Link
            key={socialMediaIndex}
            className="rounded-full border bg-primary text-primary-foreground p-2 hover:scale-90"
            href={socialMedia.value}
            target="_blank"
          >
            {Icon && <Icon />}
          </Link>
        );
      })}
    </div>
  );
};
TenantSocialMedia.displayName = "TenantSocialMedia";

export const TenantMaintenance = () => {
  const {t} = useAppContext();

  return (
    <div className="container pt-16">
      <div className="flex flex-col w-full items-center justify-center gap-6 text-center">
        <Wrench className="text-primary" size={46} />
        <h1 className="text-3xl font-semibold text-primary">{t("maintenance_title")}</h1>
        <p className="font-semibold">{t("maintenance_description")}</p>
      </div>
    </div>
  );
};
TenantMaintenance.displayName = "TenantMaintenance";
