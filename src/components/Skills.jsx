import { useEffect, useRef } from 'react';

const skills = [
  { img: '/java logo.png', name: 'Java', pct: '90%' },
  { img: '/python logo.jpg', name: 'Python', pct: '80%' },
  { img: '/react logo.jpg', name: 'React', pct: '75%' },
  { img: '/mysql logo.png', name: 'MySQL', pct: '80%' },
  { img: '/html logo.png', name: 'HTML5', pct: '85%' },
  { img: '/css.png', name: 'CSS3', pct: '80%' },
];

const tags = [
  { img: '/springboot logo.png', label: 'Spring Boot' },
  { icon: 'fa-brands fa-js', label: 'JavaScript' },
  { icon: 'fa-solid fa-database', label: 'Data Analytics' },
  { icon: 'fa-solid fa-brain', label: 'Machine Learning' },
  { icon: 'fa-brands fa-git-alt', label: 'Git' },
];

export default function Skills() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          const bar = e.target.querySelector('.skill-bar');
          if (bar) bar.style.width = e.target.dataset.pct;
        }
      });
    }, { threshold: 0.2 });
    cardsRef.current.forEach(c => c && obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="section-header">
        <div>
          <div className="section-label reveal"><div className="line" /><span>Technical Skills</span></div>
          <h2 className="section-title-main reveal reveal-delay-1">My Tech Stack</h2>
        </div>
        <div>
          <p className="section-sub reveal reveal-delay-2">
            Proficient across the full development spectrum — from backend engineering to frontend UI, databases to machine learning pipelines.
          </p>
        </div>
      </div>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div
            key={s.name}
            className="skill-card reveal"
            data-pct={s.pct}
            ref={el => cardsRef.current[i] = el}
            style={{ '--pct': s.pct }}
          >
            <img src={s.img} alt={s.name} />
            <h3>{s.name}</h3>
            <div className="skill-bar-wrap"><div className="skill-bar" /></div>
          </div>
        ))}
      </div>
      <div className="skills-also reveal">
        {tags.map(t => (
          <span className="skill-tag" key={t.label}>
            {t.img ? <img src={t.img} alt="" style={{ height: 14, verticalAlign: 'middle', marginRight: 6 }} /> : <i className={t.icon} style={{ color: 'var(--gold)', marginRight: 6 }} />}
            {t.label}
          </span>
        ))}
      </div>
    </section>
  );
}
