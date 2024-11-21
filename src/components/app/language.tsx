"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export type LanguageSelectProps = {
    languages: any
    defaultLanguage: any
}

export const LanguageSelect = ({ languages, defaultLanguage }: LanguageSelectProps) => {
    return (
        <Select defaultValue={defaultLanguage._id.culture}>
            <SelectTrigger className="rounded-full bg-primary text-primary-foreground border-primary-foreground">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {languages.map((language, languageIndex) => (
                    <SelectItem
                        key={languageIndex}
                        value={language._id.culture}
                    >
                        {language._id.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
LanguageSelect.displayName = "LanguageSelect"
