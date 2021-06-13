import { LanguageProvider } from '../contexts/LanguageContext';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
