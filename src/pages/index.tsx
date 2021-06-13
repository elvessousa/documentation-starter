import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout className="home" hideAside>
      <section className="hero">
        <div className="hero-content">
          <h1>Hello World!</h1>
          <p>
            This a documentation starter for Next.js. <br />
            <small>TypeScript + Next.js + Markdown</small>
          </p>
        </div>
      </section>
    </Layout>
  );
}
