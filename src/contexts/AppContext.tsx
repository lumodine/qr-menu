"use client";

import type {CurrencyGroup, LanguageGroup, Tenant, Message} from "@/types";
import {createContext, useContext, useState, ReactNode} from "react";
import messages from "@/messages";

type AppContextType = {
  tenant: Tenant;
  defaultLanguage: LanguageGroup;
  language: LanguageGroup;
  defaultCurrency: CurrencyGroup;
  currency: CurrencyGroup;
  setLanguage: (language: LanguageGroup) => void;
  setCurrency: (currency: CurrencyGroup) => void;
  t: (key: keyof Message) => string;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({
  children,
  tenant,
  defaultLanguage,
  defaultCurrency,
}: {
  children: ReactNode;
  tenant: Tenant;
  defaultLanguage: LanguageGroup;
  defaultCurrency: CurrencyGroup;
}) => {
  const [language, setLanguage] = useState<LanguageGroup>(defaultLanguage);
  const [currency, setCurrency] = useState<CurrencyGroup>(defaultCurrency);

  const t = (key: keyof Message) => messages[language.language.culture][key] || key;

  return (
    <AppContext.Provider
      value={{
        tenant,
        defaultLanguage,
        language,
        defaultCurrency,
        currency,
        setLanguage,
        setCurrency,
        t,
      }}
    >
      <html dir={language.language.direction} lang={language.language.culture}>
        {children}
      </html>
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

export {AppProvider, useAppContext};
