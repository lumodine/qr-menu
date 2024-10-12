"use client"

import { TenantLink } from "@/components/app/tenant"
import { Button } from "@/components/ui/button"
import { settings } from "@/data"
import Image from "next/image"

export default function TenantHomePage() {
    return (
        <>
            <Image
                src={settings.background}
                alt={`${settings.name} image`}
                width={800}
                height={1200}
                loading="lazy"
                className="absolute top-0 left-0 h-full w-full brightness-50 object-cover"
            />

            <section className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center">
                <Image
                    src={settings.logo}
                    alt={`${settings.name} logo`}
                    width={150}
                    height={80}
                    loading="lazy"
                />

                <div className="mt-10">
                    <TenantLink href="/categories">
                        <Button variant="secondary" className="px-8 py-6 rounded-full text-2xl">
                            Menü
                        </Button>
                    </TenantLink>
                </div>
            </section>
        </>
    )
}