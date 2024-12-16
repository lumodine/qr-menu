"use client";

import type {LanguageGroup} from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {useAppContext} from "@/contexts/AppContext";
import { Globe } from "lucide-react";

export type LanguageSelectProps = {
  languages: LanguageGroup[];
};

export const LanguageSelect = ({languages}: LanguageSelectProps) => {
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
      <SelectTrigger className="flex items-center gap-[3px] rounded-sm bg-black/50 text-white text-xs">
        <Globe size={14} /> <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((language, languageIndex) => (
          <SelectItem key={languageIndex} value={language.language.culture} className="text-xs">
            {language.language.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
LanguageSelect.displayName = "LanguageSelect";
