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

    return (
        <div className="fixed bottom-10 right-5 z-50">
            {isVisible && (
                <Button
                    onClick={scrollToTop}
                    className="bg-rose-500 p-2 rounded-full w-10 h-10">
                    <ChevronUp size={30} />
                </Button>
            )}
        </div>
    )
}
BackToTopButton.displayName = "BackToTopButton"
