import i18nService from "@/services/i18n.service";
import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async () => {
    const locale = await i18nService.getLocale() || "tr-TR";

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
