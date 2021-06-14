import Layout from '../components/Layout';
import { useLanguage } from '../hooks/useLanguage';

export default function Home() {
  const { t } = useLanguage();

  return (
    <Layout className="home" hideAside>
      <section className="hero">
        <div className="hero-content">
          <h1>{t('hello')}</h1>
          <p>
            {t('slogan')} <br />
            <small>TypeScript + Next.js + Markdown</small>
          </p>
        </div>
      </section>
    </Layout>
  );
}
