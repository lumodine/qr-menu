"use client"

import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollVisible } from "@/hooks/useScrollVisible"

export const BackToTopButton = () => {
    const isVisible = useScrollVisible(500)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-10 right-5 z-50">
            <Button
                onClick={scrollToTop}
                className="bg-rose-500 p-2 rounded-full w-10 h-10">
                <ChevronUp size={30} />
            </Button>
        </div>
    )
}
BackToTopButton.displayName = "BackToTopButton"

import { CircleArrowLeft } from "lucide-react"
import Link from "next/link"

export const BackToMenuButton = () => {
    return (
        <Link
            href={"/"}
            className="inline-flex items-center gap-1"
        >
            <CircleArrowLeft
                size={32}
                strokeWidth={1}
            />
            <span className="font-semibold">
                Menüye geri dön
            </span>
        </Link>
    )
}
BackToMenuButton.displayName = "BackToMenuButton"
