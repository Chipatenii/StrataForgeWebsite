import './Pages.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-intro bg-neutral">
        <div className="container text-center">
          <h1>About Strata Forge</h1>
          <p className="large-text">A dev-and-design-first company based in Lusaka, Zambia. We build the digital backbone for modern businesses.</p>
        </div>
      </section>

      <section className="story">
        <div className="container story-grid">
          <div>
            <h2 className="mb-3">Where we started</h2>
            <p>Born from the intersection of technology and creativity, Strata Forge was created to bridge the gap between complex software engineering and high-end brand design.</p>
            <p className="mt-2">We believe systems should be human, and design should be functional. Our remote-first approach allows us to serve clients across the region with agility and precision.</p>
          </div>
          <div className="bg-neutral" style={{height: '300px', borderRadius: '24px'}}></div>
        </div>
      </section>

      <section className="team bg-neutral">
        <div className="container text-center">
          <h2 className="mb-6">The Minds Behind the Forge</h2>
          <div className="founder-card">
            <div className="avatar"></div>
            <h3>Innocent Manda</h3>
            <p className="text-primary" style={{color: 'var(--color-primary)', fontWeight: 600}}>Founder & Backend Architect</p>
            <p className="small mt-2" style={{fontSize: '0.85rem'}}>Development, Design, and Strategy lead for Zambian and regional projects.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
