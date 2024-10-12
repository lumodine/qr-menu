"use client"

import { VIEWS } from "@/constants"
import { Button } from "@/components/ui/button"
import { useViewContext } from "@/contexts/viewContext"

export const View = () => {
    const { view, setView } = useViewContext()

    const handleClick = (viewKey: string) => setView(viewKey)

    return (
        <div className="flex gap-1 items-center justify-end">
            {
                Object.entries(VIEWS).map(([index, v]) => (
                    <Button
                        onClick={() => handleClick(v.key)}
                        key={index}
                        variant="secondary"
                        size="icon"
                        className={v.key == view ? "bg-rose-500 focus:bg-rose-500 text-white" : ""}>
                        {v.icon}
                    </Button>
                ))
            }
        </div>
    )
}
View.displayName = "View"
