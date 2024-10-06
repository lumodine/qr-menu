import { useState, useEffect } from "react"

export const useScrollVisible = (limit: number) => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(window.scrollY >= limit)
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    return isVisible
}
