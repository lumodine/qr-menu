import { Grid2X2, TableProperties } from "lucide-react"

export const VIEWS = {
    list: {
        key: "list",
        title: "Liste",
        icon: <TableProperties />
    },
    grid: {
        key: "grid",
        title: "Izgara",
        icon: <Grid2X2 />
    }
}

export const DEFAULT_VIEW = VIEWS.list
