"use client";

import {MapPin, MapPinHouse} from "lucide-react";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {DialogTitle} from "@radix-ui/react-dialog";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {useAppContext} from "@/contexts/AppContext";
import {Dialog, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog";
import {TenantBranch} from "@/types";
import qrMenuService from "@/services/qr-menu.service";

export const TenantBranchList = () => {
  const {language, defaultLanguage, tenant} = useAppContext();
  const [branches, setBranches] = useState<TenantBranch[]>([]);

  const fetchBranches = async () => {
    const {data} = await qrMenuService.getTenantBranches(tenant.alias);

    setBranches(data);
  };

  useEffect(() => {
    fetchBranches();
  }, [tenant]);

  const count = branches?.length || 0;
  const hasBranches = branches && count > 0;

  if (!hasBranches) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="rounded-full border bg-primary-foreground text-primary p-2 hover:scale-90 cursor-pointer">
          <MapPinHouse />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-2">
            <MapPinHouse className="w-6 h-6" />
          </DialogTitle>
        </DialogHeader>
        <ul>
          {branches.map((branch: TenantBranch, branchIndex: number) => {
            let translation = branch.translations.find(
              (translation) => translation.language._id === language.language._id,
            );

            if (!translation) {
              translation = branch.translations.find(
                (translation) => translation.language._id === defaultLanguage.language._id,
              );
            }

            return (
              <React.Fragment key={branchIndex}>
                <li className="flex flex-col gap-2">
                  <div className="flex-1 w-full">
                    {translation?.title && (
                      <span className="font-semibold inline-flex gap-1">
                        <MapPin className="w-4" /> {translation?.title}
                      </span>
                    )}
                    {branch.address && (
                      <p className="text-sm text-muted-foreground">{branch.address}</p>
                    )}
                    {translation?.description && (
                      <p className="text-xs text-muted-foreground">{translation?.description}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`https://maps.google.com/maps?daddr=${branch.coordinates.lat},${branch.coordinates.lng}`}
                      target="_blank"
                    >
                      <Button size={"sm"} variant={"outline"}>
                        Google
                      </Button>
                    </Link>
                  </div>
                </li>
                {branchIndex < count - 1 && (
                  <li className="my-4">
                    <Separator />
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </DialogContent>
    </Dialog>
  );
};
TenantBranchList.displayName = "TenantBranchList";
