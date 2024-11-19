import { get, set } from "@/lib/cookie"

const COOKIE_KEY = "i18n"

const getLocale = async () => {
    const locale = await get(COOKIE_KEY)

    return locale
}

const setLocale = async (locale: string) => await set(COOKIE_KEY, locale)

export default {
    COOKIE_KEY,
    getLocale,
    setLocale,
}
