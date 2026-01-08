import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>We build your systems and brand, then help them grow.</h1>
            <p className="subtext">
              Scalable websites, custom apps, and premium brand identities forged for Zambian SMEs and growing regional brands—then amplified with data-driven marketing.
            </p>
            <div className="hero-ctas">
              <a href="/contact" className="btn btn-primary">Book a Discovery Call</a>
              <a href="/services" className="btn btn-outline">View Services</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-mockup">
              {/* This would be an illustration or image */}
              <div className="mockup-dashboard">
                <div className="bar"></div>
                <div className="bar small"></div>
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Stripe */}
      <section className="who-we-help bg-neutral">
        <div className="container">
          <h2 className="section-title text-center mb-4">Empowering the engines of Zambia's economy.</h2>
          <div className="help-grid">
            <div className="help-item">
              <span>SMEs & Growing Businesses</span>
            </div>
            <div className="help-item">
              <span>Colleges & Institutions</span>
            </div>
            <div className="help-item">
              <span>Finance & Fintech</span>
            </div>
            <div className="help-item">
              <span>Service Brands</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="pillars">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="section-title">Built in layers. Forged for growth.</h2>
            <p className="section-subtitle">A holistic approach to digital excellence.</p>
          </div>
          <div className="pillars-grid">
            <div className="pillar-card">
              <h3>Systems & Development</h3>
              <p>Custom-coded tools and websites built on secure, scalable architecture.</p>
              <a href="/services#systems-dev">Learn more →</a>
            </div>
            <div className="pillar-card">
              <h3>Brand & Design</h3>
              <p>Strategic visual identities that turn first impressions into lasting trust.</p>
              <a href="/services#brand-design">Learn more →</a>
            </div>
            <div className="pillar-card">
              <h3>Digital Growth</h3>
              <p>Targeted campaigns designed to turn traffic into measurable leads and sales.</p>
              <a href="/services#marketing-growth">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section id="featured-services" className="featured-services bg-neutral">
        <div className="container">
          <div className="grid-2">
            <div className="service-card">
              <h4>Business Websites</h4>
              <p>High-performance, mobile-first windows to your business.</p>
            </div>
            <div className="service-card">
              <h4>Web Apps & Tools</h4>
              <p>Custom software built to solve unique operational bottlenecks.</p>
            </div>
            <div className="service-card">
              <h4>UI/UX Design</h4>
              <p>Human-centered design that prioritizes your users.</p>
            </div>
            <div className="service-card">
              <h4>Paid Campaigns</h4>
              <p>Strategic growth through Meta, Google, and TikTok ads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="final-cta text-center">
        <div className="container">
          <h2>Let’s build something that actually scales.</h2>
          <p className="mb-4">Ready to move from manual chaos to digital clarity? Let's map your project together.</p>
          <div className="hero-ctas">
            <a href="/contact" className="btn btn-primary">Book a Discovery Call</a>
            <a href="https://wa.me/260..." className="btn btn-outline">Send us a WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
