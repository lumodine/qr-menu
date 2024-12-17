"use client";

import type {LanguageGroup} from "@/types";
import {Globe} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select";
import {useAppContext} from "@/contexts/AppContext";

export type LanguageSwitcherProps = {
  languages: LanguageGroup[];
};

export const LanguageSwitcher = ({languages}: LanguageSwitcherProps) => {
  const {language, defaultLanguage, setLanguage} = useAppContext();

  if (languages.length <= 1) {
    return null;
  }

  const handleValueChange = (languageCulture: string) => {
    const selectedLanguage = languages.find(
      (language) => language.language.culture === languageCulture,
    );

    setLanguage(selectedLanguage || defaultLanguage);
  };

  return (
    <Select
      defaultValue={language.language.culture || defaultLanguage.language.culture}
      onValueChange={handleValueChange}
    >
      <SelectTrigger className="border-none flex items-center gap-[3px] rounded-sm bg-black/50 text-white text-xs p-2 hover:bg-black/70">
        <Globe size={14} />
      </SelectTrigger>
      <SelectContent>
        {languages.map((language, languageIndex) => (
          <SelectItem key={languageIndex} className="text-xs" value={language.language.culture}>
            {language.language.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
LanguageSwitcher.displayName = "LanguageSwitcher";
