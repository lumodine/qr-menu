"use client";

import type {Tenant} from "@/types";
import Image from "next/image";
import Link from "next/link";
import {TenantSocialMedia} from "./tenant";
import {useAppContext} from "@/contexts/AppContext";

export type FooterProps = {
  tenant: Tenant;
};

export const Footer = ({tenant}: FooterProps) => {
  const startYear = 2024;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const year = startYear === currentYear ? startYear : `${startYear}-${currentYear}`;

  const {t} = useAppContext();

  return (
    <footer className="py-16">
      <div className="container flex flex-col gap-6">
        <div className="flex flex-col gap-6 items-center justify-center">
          <Link className="flex flex-col gap-2 items-center justify-center" href={"/"}>
            {tenant.logo && (
              <Image
                alt={tenant.name}
                className="rounded-sm w-[50px] h-[50px]"
                height={50}
                loading={"lazy"}
                src={tenant.logo}
                width={50}
              />
            )}
            <span>{tenant.name}</span>
          </Link>
        </div>

        <TenantSocialMedia />

        <div className="flex flex-col items-center justify-center gap-6 my-8">
          <p className="text-xs">
            &copy; {year} &#x2022;{" "}
            <Link className="underline" href={process.env.NEXT_PUBLIC_LANDING_URL!} target="_blank">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </Link>{" "}
            &#x2022; {t("all_rights_reserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};
Footer.displayName = "Footer";
