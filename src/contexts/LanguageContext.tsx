import { createContext, useEffect, useState } from 'react';

type LanguageContextData = {
  locale: string;
  setLocale: (locale: string) => void;
};

export const LanguageContext = createContext({} as LanguageContextData);

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    if (!window) {
      return;
    }

    const language = localStorage.getItem('lang') || locale;
    setLocale(language);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
