"use client";

import type {Tenant} from "@/types";
import Image from "next/image";

export type TenantLogoProps = {
  tenant: Tenant;
};

const TenantLogo = ({tenant}: TenantLogoProps) => {
  return (
    <>
      {tenant.logo && (
        <Image
          alt={tenant.name}
          className="rounded-sm w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
          height={100}
          src={tenant.logo}
          width={100}
        />
      )}
      {!tenant.logo && (
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold drop-shadow-2xl">
          {tenant.name}
        </h1>
      )}
    </>
  );
};

TenantLogo.displayName = "TenantLogo";

export {TenantLogo};
