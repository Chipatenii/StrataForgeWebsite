import './Pages.css';

const HowWeWork = () => {
  const steps = [
    { num: '01', title: 'Discovery & Strategy', desc: 'We deep dive into your business goals to align on a technical roadmap.' },
    { num: '02', title: 'Experience Design', desc: 'Mapping the user journey and visual identity for maximum engagement.' },
    { num: '03', title: 'Build & Integrate', desc: 'Clean, secure development using modern frameworks and standard practices.' },
    { num: '04', title: 'Launch & Grow', desc: 'Deploying your solution and fueling it with targeted growth campaigns.' },
    { num: '05', title: 'Support & Scale', desc: 'Ongoing maintenance and optimization to ensure long-term success.' }
  ];

  return (
    <div className="how-we-work-page">
      <section className="page-intro bg-neutral">
        <div className="container text-center">
          <h1>How We Work</h1>
          <p className="large-text">Our process keeps everything connected. We follow a layered approach to ensure your brand and systems grow together.</p>
        </div>
      </section>

      <section className="steps">
        <div className="container" style={{maxWidth: '800px'}}>
          {steps.map((step) => (
            <div key={step.num} className="step-item" style={{display: 'flex', gap: '32px', marginBottom: '64px'}}>
              <div className="step-num" style={{fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', opacity: 0.2}}>{step.num}</div>
              <div>
                <h3 className="mb-2">{step.title}</h3>
                <p style={{color: 'var(--color-text-muted)'}}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral text-center" style={{padding: '100px 24px'}}>
        <div className="container">
          <h2>Ready to experience the process?</h2>
          <p className="mb-4">Let's schedule a 30-minute discovery call.</p>
          <a href="/contact" className="btn btn-primary">Schedule Discovery Call</a>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
