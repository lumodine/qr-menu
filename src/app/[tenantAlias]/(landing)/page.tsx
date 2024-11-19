import { Button } from "@/components/ui/button"
import qrMenuService from "@/services/qr-menu.service"
import { getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"

type TenantHomePageProps = {
    params: Promise<{
        tenantAlias: string
    }>
}

export default async function TenantHomePage({ params }: TenantHomePageProps) {
    const t = await getTranslations();

    const { tenantAlias } = await params

    const { data: tenant } = await qrMenuService.getDetail(tenantAlias)

    return (
        <>
            <Image
                src={tenant.background}
                alt={`${tenant.name} image`}
                width={800}
                height={1200}
                loading="lazy"
                className="absolute top-0 left-0 h-full w-full brightness-50 object-cover"
            />

            <section className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center">
                <Image
                    src={tenant.logo}
                    alt={`${tenant.name} logo`}
                    width={150}
                    height={80}
                    loading="lazy"
                />

                <div className="mt-10">
                    <Link
                        href="/categories"
                    >
                        <Button
                            variant="secondary"
                            className="px-8 py-6 rounded-full text-2xl"
                        >
                            {t("menu")}
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    )
}