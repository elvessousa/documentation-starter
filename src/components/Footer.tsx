import Navigation from './Navigation';

export default function Footer({ children }) {
  return (
    <footer className="footer">
      <Navigation />
      <p>{children}</p>
    </footer>
  );
}
