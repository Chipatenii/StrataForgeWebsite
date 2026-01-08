import primaryLogo from '../assets/primary-logo.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-neutral">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={primaryLogo} alt="Strata Forge Technologies" className="footer-logo" />
          <p className="footer-tagline">Systems | Design | Marketing</p>
          <div className="footer-socials">
            {/* Social placeholders */}
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">LI</a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-services">
          <h4>Services</h4>
          <a href="/services#systems-dev">Websites & Web Apps</a>
          <a href="/services#brand-design">Brand & UI/UX Design</a>
          <a href="/services#marketing-growth">Digital Campaigns</a>
        </div>

        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <p>Lusaka, Zambia</p>
          <p>Remote-first Culture</p>
          <a href="mailto:hello@strataforge.com">hello@strataforge.com</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {currentYear} Strata Forge Technologies Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
