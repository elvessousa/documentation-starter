import { useContext } from 'react';
import { LangStrings } from '../config/strings';

import { LanguageContext } from '../contexts/LanguageContext';

export function useLanguage() {
  const { locale, setLocale } = useContext(LanguageContext);

  function t(key: string) {
    if (!LangStrings[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }

    return LangStrings[locale][key] || LangStrings['en'][key] || '';
  }

  return {
    t,
    locale,
    setLocale,
  };
}
