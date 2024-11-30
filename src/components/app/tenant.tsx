"use client"

import { Tenant } from "@/types";
import Image from "next/image";

export type TenantLogoProps = {
    tenant: Tenant;
}

export const TenantLogo = ({ tenant }: TenantLogoProps) => {
    if (!tenant.logo) {
        return null;
    }

    return (
        <Image
            src={tenant.logo}
            alt={tenant.name}
            width={300}
            height={300}
            loading={"lazy"}
            className="rounded-sm w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
        />
    )
}
TenantLogo.displayName = "TenantLogo"

export type TenantHeroProps = {
    tenant: Tenant;
}

export const TenantHero = ({ tenant }: TenantHeroProps) => {
    return (
        <section
            style={{ ['--bg-image' as string]: `url(${tenant.background})` }}
            className="bg-[image:var(--bg-image)] bg-center bg-no-repeat bg-cover overflow-hidden bg-primary/50"
        >
            <div className="flex items-center justify-center w-full h-[30vh] lg:h-[40vh] bg-black/50">
                <TenantLogo
                    tenant={tenant}
                />
            </div>
        </section>
    )
}
TenantHero.displayName = "TenantHero"
