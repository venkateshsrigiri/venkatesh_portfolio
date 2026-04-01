import { useEffect, useState } from 'react';

const roles = ['Java FullStack Developer', 'Data Analytics Engineer', 'Machine Learning Enthusiast', 'Problem Solver'];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const [ri, setRi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const tick = () => {
      const current = roles[ri];
      if (!deleting) {
        setTyped(prev => {
          const next = current.substring(0, prev.length + 1);
          if (next === current) { setTimeout(() => setDeleting(true), 2200); }
          return next;
        });
        timeout = setTimeout(tick, 80);
      } else {
        setTyped(prev => {
          const next = current.substring(0, prev.length - 1);
          if (next === '') {
            setDeleting(false);
            setRi(r => (r + 1) % roles.length);
            return '';
          }
          return next;
        });
        timeout = setTimeout(tick, 40);
      }
    };
    timeout = setTimeout(tick, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  // eslint-disable-next-line
  }, [typed, deleting, ri]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-lines" />
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-eyebrow">
          <div className="eyebrow-line" />
          <span className="eyebrow-text">Available for opportunities</span>
        </div>
        <h1>I'm<br /><span className="name-gold">Venkatesh</span><br />Srigiri</h1>
        <p className="hero-role">
          <span className="typed-text">{typed}</span><span className="typed-cursor">|</span>
        </p>
        <p className="hero-desc">
          Java FullStack Developer crafting scalable enterprise applications. Passionate about clean architecture, data analytics, and building impactful digital products.
        </p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            <i className="fa-solid fa-paper-plane" /> Get In Touch
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('projects')}>View My Work</button>
        </div>
        <div className="hero-stats">
          {[['3+', 'Projects Built'], ['6+', 'Tech Skills'], ['2+', 'Years Learning']].map(([n, l]) => (
            <div className="stat-item" key={l}>
              <div className="stat-num">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-wrap">
          <img src="/VENKATESH_PHOTO.png" alt="Venkatesh Srigiri" />
          <div className="hero-badge">
            <div className="badge-label">Current Focus</div>
            <div className="badge-val"><i className="fa-brands fa-java badge-icon" />Java FullStack</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
