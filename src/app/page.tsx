"use client"

import { CategoryList } from "@/components/app/category"
import { View } from "@/components/app/view"
import { categories, settings } from "@/data"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <header className="flex items-center justify-center px-4 py-2">
        <Image
          src={settings.logo}
          alt={`${settings.name} logo`}
          width={100}
          height={55}
          loading="lazy"
        />
      </header>

      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-xl">
            Kategoriler
          </h1>

          <View />
        </div>

        <CategoryList categories={categories} />
      </div>
    </>
  )
}
