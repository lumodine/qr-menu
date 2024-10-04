import { DEFAULT_VIEW } from "@/constants"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

type ViewState = {
    view: string
}

type ViewActions = {
    setView: (view: string) => void
}

// Todo: 
export const useViewContext = create<ViewState & ViewActions>(
    persist(
        (set) => ({
            view: DEFAULT_VIEW.key,
            setView: (view: string) => {
                set({ view })
            }
        }),
        {
            name: "view",
            storage: createJSONStorage(() => localStorage)
        }
    )
)
