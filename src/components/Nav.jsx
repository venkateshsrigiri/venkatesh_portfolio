import { useEffect, useState } from 'react';

const links = [
  { href: 'hero', label: 'Home' },
  { href: 'about', label: 'About' },
  { href: 'skills', label: 'Skills' },
  { href: 'projects', label: 'Projects' },
  { href: 'resume', label: 'Resume' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const pos = window.scrollY + 120;
      document.querySelectorAll('section[id]').forEach(sec => {
        if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
          setActive(sec.id);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <span className="nav-logo" onClick={() => scrollTo('hero')}>VS<span>.</span></span>
      <ul>
        {links.map(l => (
          <li key={l.href}>
            <a className={active === l.href ? 'active' : ''} onClick={() => scrollTo(l.href)}>{l.label}</a>
          </li>
        ))}
        <li><a className="nav-cta" onClick={() => scrollTo('contact')}>Hire Me</a></li>
      </ul>
    </nav>
  );
}
