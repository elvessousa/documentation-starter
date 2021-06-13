import Link from 'next/link';
import { useLanguage } from '../hooks/useLanguage';

export default function Navigation() {
  const { locale, setLocale } = useLanguage();
  const language = locale === 'en' ? 'pt' : 'en';

  function handleLocaleChange(language: string) {
    if (!window) {
      return;
    }

    localStorage.setItem('lang', language);
    setLocale(language);
  }

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/docs">
            <a>Documentation</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <button onClick={() => handleLocaleChange(language)}>
            {language}
          </button>
        </li>
      </ul>
    </nav>
  );
}
