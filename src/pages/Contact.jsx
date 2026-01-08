import './Pages.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-intro bg-neutral">
        <div className="container text-center">
          <h1>Let's Start Growing</h1>
          <p className="large-text">Have a system in mind or a brand that needs a fresh start? Let's talk about how we can forge it together.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-grid">
          <div className="contact-form">
            <h3 className="mb-4">Send a Message</h3>
            <form>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="e.g. John Doe" />
              </div>
              <div className="form-group">
                <label>Business Email</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Project Type</label>
                <select>
                  <option>Select Option</option>
                  <option>Business Website</option>
                  <option>Web App / Internal Tool</option>
                  <option>Brand Identity</option>
                  <option>Digital Marketing</option>
                  <option>Something Else</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="btn btn-primary w-full" style={{width: '100%'}}>Send Inquiry</button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-block mb-6">
              <h3>Book a Call</h3>
              <p className="mb-3">Schedule a 30-minute discovery call to discuss your project.</p>
              <a href="#" className="btn btn-outline" style={{width: '100%'}}>Open Calendar</a>
            </div>

            <div className="info-block">
              <h3>Direct Contact</h3>
              <p>Email: <a href="mailto:hello@strataforge.com">hello@strataforge.com</a></p>
              <p>Location: Lusaka, Zambia (Remote-first)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
