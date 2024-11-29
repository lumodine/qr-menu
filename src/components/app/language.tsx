"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useAppContext } from "@/contexts/AppContext";

export type LanguageSelectProps = {
    languages: any[]
}

export const LanguageSelect = ({ languages }: LanguageSelectProps) => {
    if (languages.length <= 1) {
        return null;
    }

    const {
        language,
        defaultLanguage,
        setLanguage
    } = useAppContext();

    const handleValueChange = (languageCulture: string) => {
        const selectedLanguage = languages
            .find(language => language.language.culture === languageCulture);

        setLanguage(selectedLanguage);
    };

    return (
        <Select
            defaultValue={language.language.culture || defaultLanguage.language.culture}
            onValueChange={handleValueChange}
        >
            <SelectTrigger className="rounded-full bg-primary text-primary-foreground border-primary-foreground">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {languages.map((language, languageIndex) => (
                    <SelectItem
                        key={languageIndex}
                        value={language.language.culture}
                    >
                        {language.language.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
LanguageSelect.displayName = "LanguageSelect"
