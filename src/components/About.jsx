export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-label reveal"><div className="line" /><span>Get In Touch</span></div>
      <h2 className="section-title-main reveal reveal-delay-1">Let's Build<br />Something Together</h2>

      <div className="contact-grid">
        <div className="reveal reveal-delay-1">
          <p className="section-sub">
            I'm open to full-time roles, freelance projects, and collaborations. Whether you have a project idea or just want to connect — feel free to reach out!
          </p>
          <div className="contact-info-list">
            {[
              { icon: 'fa-solid fa-envelope', label: 'Email', val: 'venkateshsrigiri13@gmail.com' },
              { icon: 'fa-solid fa-phone', label: 'Phone', val: '+91-7569752014' },
              { icon: 'fa-solid fa-location-dot', label: 'Location', val: 'Chandanagar, Hyderabad, Telangana 500050' },
            ].map(item => (
              <div className="ci-item" key={item.label}>
                <div className="ci-icon"><i className={item.icon} /></div>
                <div>
                  <div className="ci-label">{item.label}</div>
                  <div className="ci-val">{item.val}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="social-row" style={{ marginTop: 30 }}>
            <a href="mailto:venkateshsrigiri13@gmail.com" className="social-link" aria-label="Email"><i className="fa-solid fa-envelope" /></a>
            <a href="tel:+917569752014" className="social-link" aria-label="Phone"><i className="fa-solid fa-phone" /></a>
            <button className="social-link" aria-label="LinkedIn" onClick={() => window.open('https://linkedin.com', '_blank')}><i className="fa-brands fa-linkedin-in" /></button>
            <button className="social-link" aria-label="GitHub" onClick={() => window.open('https://github.com', '_blank')}><i className="fa-brands fa-github" /></button>
            <button className="social-link" aria-label="Twitter" onClick={() => window.open('https://twitter.com', '_blank')}><i className="fa-brands fa-twitter" /></button>
          </div>
        </div>

        <div className="contact-form-wrap reveal reveal-delay-2">
          <div className="form-title">Send a Message</div>
          <p className="form-sub">I'll get back to you within 24 hours.</p>
          <form action="https://formspree.io/f/xaqobywn" method="POST">
            <div className="form-row">
              <div className="form-field">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-field">
                <label>Your Email</label>
                <input type="email" name="email" placeholder="john@email.com" required />
              </div>
            </div>
            <div className="form-field">
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Project collaboration..." />
            </div>
            <div className="form-field">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Tell me about your project or opportunity..." required />
            </div>
            <button type="submit" className="btn-submit">
              <i className="fa-solid fa-paper-plane" style={{ marginRight: 8 }} />Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
