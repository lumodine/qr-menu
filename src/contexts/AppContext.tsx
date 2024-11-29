"use client";

import messages, { type Message } from "@/messages";
import {
    createContext,
    useContext,
    useState,
    ReactNode
} from "react";

type AppContextType = {
    defaultLanguage: any;
    language: any;
    defaultCurrency: any;
    currency: any;
    setLanguage: (language: any) => void;
    setCurrency: (currency: any) => void;
    t: (key: keyof Message) => string;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({
    children,
    defaultLanguage,
    defaultCurrency,
}: {
    children: ReactNode,
    defaultLanguage: any,
    defaultCurrency: any,
}) => {
    const [language, setLanguage] = useState<any>(defaultLanguage);
    const [currency, setCurrency] = useState<any>(defaultCurrency);

    const t = (key: keyof Message) => messages[language.language.culture][key] || key;

    return (
        <AppContext.Provider
            value={{
                defaultLanguage,
                language,
                defaultCurrency,
                currency,
                setLanguage,
                setCurrency,
                t,
            }}
        >
            <html
                lang={language.language.culture}
                dir={language.language.direction}
            >
                {children}
            </html>
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};