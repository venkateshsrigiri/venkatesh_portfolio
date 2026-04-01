export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">VS<span>.</span></div>
      <p>&copy; 2026 Venkatesh Srigiri. Crafted with <span style={{ color: 'var(--gold)' }}>♥</span> in Hyderabad.</p>
      <button className="footer-top" onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>
        Back to Top ↑
      </button>
    </footer>
  );
}
