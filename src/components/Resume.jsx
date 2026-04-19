import { useState } from 'react';

const tabs = [
  { label: 'Java FullStack', file: '/Venkatesh Srigiri_Java_Resume.pdf', fullLabel: 'Java FullStack Resume' },
  { label: 'Machine Learning', file: '/Venkatesh_Srigiri_ML_Resume.pdf', fullLabel: 'Machine Learning Resume' },
];

export default function Resume() {
  const [active, setActive] = useState(0);

  return (
    <section className="resume-section" id="resume">
      <div className="section-label reveal"><div className="line" /><span>Resume</span></div>
      <h2 className="section-title-main reveal reveal-delay-1">My Credentials</h2>
      <p className="section-sub reveal reveal-delay-2">Select a specialized resume tailored to different roles.</p>

      <div className="resume-tabs reveal reveal-delay-2">
        {tabs.map((t, i) => (
          <button key={t.label} className={`rtab${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="resume-preview reveal">
        <iframe src={tabs[active].file} title="Resume" />
        <div className="resume-footer">
          <span>{tabs[active].fullLabel}</span>
          <a href={tabs[active].file} download className="download-btn">
            <i className="fa-solid fa-download" /> Download
          </a>
        </div>
      </div>
    </section>
  );
}