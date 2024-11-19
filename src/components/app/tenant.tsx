"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export type TenantGroupHeaderProps = {
    tenant: any
    href: string
}

export const TenantGroupHeader = ({ tenant, href }: TenantGroupHeaderProps) => {
    return (
        <header className="bg-background w-full flex justify-between items-center px-4 py-1">
            <Link href={href} className="inline-flex items-center justify-center">
                <ArrowLeft />
            </Link>

            <Link href="/">
                <Image
                    src={tenant.logo}
                    alt={`${tenant.name} logo`}
                    width={100}
                    height={55}
                    loading="lazy"
                />
            </Link>

            <Select value="tr-TR">
                <SelectTrigger className="w-[150px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {
                        tenant.languages.map((language, languageIndex) => (
                            <SelectItem
                                key={languageIndex}
                                value={language._id.culture}
                            >
                                {language._id.name} ({language._id.shortName})
                            </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
        </header>
    )
}
TenantGroupHeader.displayName = "TenantGroupHeader"
