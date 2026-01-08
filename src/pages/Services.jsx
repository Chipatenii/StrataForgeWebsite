import './Pages.css';

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-intro bg-neutral">
        <div className="container text-center">
          <h1>Core Systems. Premium Design.</h1>
          <p className="large-text">Digital systems and design are the core of what we do. Growth marketing is the engine that drives it all forward.</p>
        </div>
      </section>

      <section id="systems-dev" className="service-detail">
        <div className="container">
          <h2 className="section-title">Systems & Development</h2>
          <div className="service-items-grid">
            <div className="item">
              <h4>Business Websites</h4>
              <p>Fast, mobile-optimized, and built for SEO. Every pixel is designed to convert visitors into clients.</p>
            </div>
            <div className="item">
              <h4>Web Apps & Internal Tools</h4>
              <p>From client portals to lightweight ERPs, we build the software that runs your business.</p>
            </div>
            <div className="item">
              <h4>APIs & Automations</h4>
              <p>Connect payment gateways (DPO, Airtel, MTN) and automate repetitive tasks.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="brand-design" className="service-detail bg-neutral">
        <div className="container">
          <h2 className="section-title">Brand & Design</h2>
          <div className="service-items-grid">
            <div className="item">
              <h4>Brand Identity</h4>
              <p>Logos, color systems, and brand guides that define how the world sees you.</p>
            </div>
            <div className="item">
              <h4>Marketing Collateral</h4>
              <p>Company profiles and social templates that maintain your premium edge.</p>
            </div>
            <div className="item">
              <h4>UI/UX Design</h4>
              <p>Human-centered wireframes and hi-fi prototypes built for clarity.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="service-cta">
        <div className="container text-center">
          <h3>Not sure where to start?</h3>
          <p className="mb-4">Book a quick call and we’ll map it with you.</p>
          <a href="/contact" className="btn btn-primary">Schedule Discovery Call</a>
        </div>
      </section>
    </div>
  );
};

export default Services;
