import { LanguageContext } from '../contexts/LanguageContext';
import { useContext } from 'react';

export function useLanguage() {
  const { locale, setLocale } = useContext(LanguageContext);

  return {
    locale,
    setLocale,
  };
}
