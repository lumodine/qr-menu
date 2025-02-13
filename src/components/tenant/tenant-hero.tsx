"use client";

import {TenantLogo} from "@/components/tenant/tenant-logo";
import {cn} from "@/utils/shadcn";
import {useAppContext} from "@/contexts/AppContext";

const TenantHero = () => {
  const {tenant} = useAppContext();

  const hasBackground = !!tenant.background;

  return (
    <section
      className={cn(
        hasBackground && "bg-[image:var(--bg-image)]",
        "bg-center bg-no-repeat bg-cover overflow-hidden bg-primary text-primary-foreground",
      )}
      style={{
        ["--bg-image" as string]: hasBackground ? `url(${tenant.background})` : null,
      }}
    >
      <div
        className={cn(
          "flex items-center justify-center w-full h-[30vh] lg:h-[40vh] p-2",
          hasBackground && "bg-black/50 text-white",
        )}
      >
        <TenantLogo tenant={tenant} />
      </div>
    </section>
  );
};

TenantHero.displayName = "TenantHero";

export {TenantHero};
