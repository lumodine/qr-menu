"use client";

import {Wrench} from "lucide-react";
import {useAppContext} from "@/contexts/AppContext";

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
