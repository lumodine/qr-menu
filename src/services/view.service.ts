import { DEFAULT_VIEW, VIEWS } from "@/constants"
import { get, set, remove } from "@/lib/cookie"

const COOKIE_KEY = "view_type"

const getView = async () => {
    const view = await get(COOKIE_KEY)

    return view || DEFAULT_VIEW.key
}

const setView = async (view: string) => await set(COOKIE_KEY, view)

const removeView = async () => await remove(COOKIE_KEY)

export default {
    COOKIE_KEY,
    getView,
    setView,
    removeView,
}
