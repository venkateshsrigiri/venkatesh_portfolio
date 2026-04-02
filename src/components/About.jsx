export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-label reveal">
        <div className="line" /><span>About Me</span>
      </div>
      <div className="about-grid">
        <div className="about-img-wrap reveal">
          <img src="/VENKATESH_PHOTO.png" alt="Venkatesh Srigiri" />
          <div className="about-img-badge">
            <div className="badge-num">2025</div>
            <div className="badge-txt">Graduate</div>
          </div>
        </div>
        <div className="reveal reveal-delay-2">
          <h2 className="section-title-main">Driven by code,<br />shaped by curiosity.</h2>
          <p className="section-sub" style={{ maxWidth: '100%', marginTop: 16 }}>
            I graduated from <strong style={{ color: 'var(--white)' }}>GITAM University, Hyderabad</strong> and am currently deepening my expertise in Java FullStack development at Codegnan — building scalable enterprise applications with modern frameworks and clean architecture principles.
          </p>
          <ul className="about-info-list">
            {[
              ['Name', 'Venkatesh Srigiri'],
              ['Date of Birth', 'December 13, 2003'],
              ['Email', 'venkateshsrigiri13@gmail.com'],
              ['Phone', '+91-7569752014'],
              ['Location', 'Hyderabad, Telangana'],
              ['ZIP Code', '503185'],
            ].map(([k, v]) => (
              <li key={k}><span className="info-key">{k}</span><span className="info-val">{v}</span></li>
            ))}
          </ul>
          <div className="edu-box">
            <div className="edu-title">B.Tech — GITAM University, Hyderabad</div>
            <div className="edu-sub">Training: Java FullStack Development · Codegnan</div>
          </div>
          <div className="social-row" style={{ marginTop: 30 }}>
            <a href="mailto:venkateshsrigiri13@gmail.com" className="social-link" aria-label="Email"><i className="fa-solid fa-envelope" /></a>
            <a href="tel:+917569752014" className="social-link" aria-label="Phone"><i className="fa-solid fa-phone" /></a>
            <button className="social-link" aria-label="LinkedIn" onClick={() => window.open('https://linkedin.com', '_blank')}><i className="fa-brands fa-linkedin-in" /></button>
            <button className="social-link" aria-label="GitHub" onClick={() => window.open('https://github.com', '_blank')}><i className="fa-brands fa-github" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}