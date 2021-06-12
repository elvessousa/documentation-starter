import React from 'react';
import Navigation from './Navigation';

const Footer: React.FC = ({ children }) => (
  <footer className="footer">
    <Navigation />
    <p>{children}</p>
  </footer>
);

export default Footer;
