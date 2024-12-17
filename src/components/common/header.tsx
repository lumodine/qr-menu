"use client";

import Image from "next/image";
import Link from "next/link";
import {Search} from "lucide-react";
import {Button} from "../ui/button";
import {CurrencySwitcher} from "../currency/currency-switcher";
import {LanguageSwitcher} from "../language/language-switcher";
import {HeaderPosition, Tenant} from "@/types";
import {cn} from "@/utils/shadcn";
import {useScrollVisible} from "@/hooks/useScrollVisible";

export type HeaderProps = {
  tenant: Tenant;
  position: HeaderPosition;
};

const showSearch = false;

export const Header = ({tenant, position}: HeaderProps) => {
  const isVisible = useScrollVisible(175);

  const isTop = position === HeaderPosition.TOP;
  const isBottom = position === HeaderPosition.BOTTOM;

  return (
    <header
      className={cn(
        "transition-all z-50 fixed w-full drop-shadow-lg",
        isTop && "top-0",
        isBottom && "bottom-0 bg-primary",
        isVisible && "bg-primary",
      )}
    >
      <nav className="container flex justify-end items-center p-2 gap-1">
        <div className="flex-1 flex">
          <Link
            className={cn(
              "gap-2 items-center",
              isTop && "hidden",
              isBottom && "inline-flex",
              isTop && isVisible && "inline-flex",
            )}
            href={"/"}
          >
            {tenant.logo && (
              <Image
                alt={tenant.name}
                className="rounded-sm"
                height={30}
                loading={"lazy"}
                src={tenant.logo}
                width={30}
              />
            )}
            <span className="text-xs text-primary-foreground">{tenant.name}</span>
          </Link>
        </div>
        {(tenant.currencies.length > 1 || tenant.languages.length > 1) && (
          <div className="flex gap-1">
            <CurrencySwitcher currencies={tenant.currencies} />
            <LanguageSwitcher languages={tenant.languages} />
          </div>
        )}
        <div className="flex justify-end">
          {showSearch && (
            <Button className="border-none rounded-sm bg-black/50 text-white text-xs py-2 px-3 hover:bg-black/70">
              <Search size={14} />
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};
Header.displayName = "Header";
