"use client"

import { useAppContext } from "@/contexts/AppContext";
import type { Tenant } from "@/types";
import { cn } from "@/utils/shadcn";
import Image from "next/image";

export type TenantLogoProps = {
    tenant: Tenant;
}

export const TenantLogo = ({ tenant }: TenantLogoProps) => {
    return (
        <>
            {
                tenant.logo && (
                    <Image
                        src={tenant.logo}
                        alt={tenant.name}
                        width={100}
                        height={100}
                        loading={"lazy"}
                        className="rounded-sm w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
                    />
                )
            }
            {
                !tenant.logo && (
                    <h1 className="text-center text-4xl text-primary-foreground font-bold">
                        {tenant.name}
                    </h1>
                )
            }
        </>
    )
}
TenantLogo.displayName = "TenantLogo"

export const TenantHero = () => {
    const { tenant } = useAppContext();

    const hasBackground = !!tenant.background;

    return (
        <section
            style={{
                ['--bg-image' as string]: hasBackground
                    ? `url(${tenant.background})`
                    : null
            }}
            className={
                cn(
                    hasBackground && "bg-[image:var(--bg-image)]",
                    "bg-center bg-no-repeat bg-cover overflow-hidden bg-primary/50",
                )
            }
        >
            <div className="flex items-center justify-center w-full h-[30vh] lg:h-[40vh] bg-black/50 p-2">
                <TenantLogo
                    tenant={tenant}
                />
            </div>
        </section>
    )
}
TenantHero.displayName = "TenantHero"
