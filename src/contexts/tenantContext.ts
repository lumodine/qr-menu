import { create } from "zustand"

type TenantState = {
    tenantId: string | null
    setTenantId: (id: string) => void
}

export const useTenantContext = create<TenantState>(
    (set) => ({
        tenantId: null,
        setTenantId: (id: string) => set({ tenantId: id })
    })
)