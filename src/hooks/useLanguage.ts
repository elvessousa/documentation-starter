import { useContext } from 'react';

import { LanguageContext } from '../contexts/LanguageContext';

export function useLanguage() {
  const { locale, setLocale } = useContext(LanguageContext);

  return {
    locale,
    setLocale,
  };
}
