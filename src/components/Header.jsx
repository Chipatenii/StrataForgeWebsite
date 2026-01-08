import { useState } from 'react';
import primaryLogo from '../assets/primary-logo.png';
import logoMark from '../assets/logo-mark.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky-header">
      <nav className="container nav-bar">
        <a href="/" className="logo-container">
          <img src={primaryLogo} alt="Strata Forge Technologies" className="logo-desktop" />
          <img src={logoMark} alt="Strata Forge" className="logo-mobile" />
        </a>

        {/* Desktop Menu */}
        <div className="menu-desktop">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/how-we-work">Process</a>
          <a href="/about">About</a>
          <a href="/contact" className="btn btn-primary">Book a Call</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`menu-mobile-overlay ${isMenuOpen ? 'active' : ''}`}>
          <div className="menu-mobile-content">
            <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="/services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="/how-we-work" onClick={() => setIsMenuOpen(false)}>Process</a>
            <a href="/about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="/contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Book a Call</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
