const projects = [
  {
    img: '/url_shortner.png',
    alt: 'Url Shortner',
    link: 'https://url-shortner-1-obft.onrender.com',
    linkLabel: 'View Project →',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    title: 'Url Shortner',
    desc: 'Built a URL shortener service using PostgreSQL that converts long URLs into compact, unique links and efficiently redirects users to the original destination.',
  },
  {
    img: '/movie recommender logo.png',
    alt: 'Movie Recommender',
    link: 'https://movie-recommender-system-2n45.onrender.com',
    linkLabel: 'Live Demo →',
    tags: ['Deep Learning', 'CNN', 'ML'],
    title: 'Movie Recommender System',
    desc: 'An intelligent recommendation engine using collaborative filtering and deep learning to suggest personalized movies based on user preferences.',
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <div>
          <div className="section-label reveal"><div className="line" /><span>Projects</span></div>
          <h2 className="section-title-main reveal reveal-delay-1">Work I'm<br />Proud Of</h2>
        </div>
        <p className="section-sub reveal reveal-delay-2">
          A showcase spanning enterprise Java development and machine learning.
        </p>
      </div>
      <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {projects.map((p, i) => (
          <div className={`project-card reveal reveal-delay-${i + 1}`} key={p.title}>
            <div className="project-img">
              <img src={p.img} alt={p.alt} />
              <div className="project-img-overlay">
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link-btn">{p.linkLabel}</a>
              </div>
            </div>
            <div className="project-body">
              <div className="project-tag-row">
                {p.tags.map(t => <span className="ptag" key={t}>{t}</span>)}
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}