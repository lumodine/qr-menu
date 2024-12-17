"use client";

import {TenantLogo} from "./tenant-logo";
import {cn} from "@/utils/shadcn";
import {useAppContext} from "@/contexts/AppContext";

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
