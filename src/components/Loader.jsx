import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1900);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`loader${hidden ? ' hidden' : ''}`}>
      <div className="loader-text">VS<span>.</span></div>
      <div className="loader-bar" />
    </div>
  );
}
