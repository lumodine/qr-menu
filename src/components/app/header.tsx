"use client";

import type {Tenant} from "@/types";
import Image from "next/image";
import Link from "next/link";
import {LanguageSelect} from "./language";
import {CurrencySelect} from "./currency";
import {useScrollVisible} from "@/hooks/useScrollVisible";
import {cn} from "@/utils/shadcn";

export type HeaderProps = {
  tenant: Tenant;
};

export const Header = ({tenant}: HeaderProps) => {
  const isVisible = useScrollVisible(200);

  return (
    <header
      className={cn(
        "transition-all z-50 fixed top-0 w-full",
        isVisible && "bg-primary drop-shadow-lg",
      )}
    >
      <nav className="container flex justify-end items-center p-2 gap-2 h-20">
        <div className="flex-1">
          <Link className={cn("gap-2 items-center hidden", isVisible && "inline-flex")} href={"/"}>
            {tenant.logo && (
              <Image
                alt={tenant.name}
                className="rounded-sm"
                height={50}
                loading={"lazy"}
                src={tenant.logo}
                width={50}
              />
            )}
            <span className="text-primary-foreground">{tenant.name}</span>
          </Link>
        </div>
        {(tenant.currencies.length > 1 || tenant.languages.length > 1) && (
          <div className="flex gap-1">
            <CurrencySelect currencies={tenant.currencies} />
            <LanguageSelect languages={tenant.languages} />
          </div>
        )}
      </nav>
    </header>
  );
};
Header.displayName = "Header";
