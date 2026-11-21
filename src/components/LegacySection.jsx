import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LegacySection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="legacy-section" id="legacy">
      <div className="legacy-inner">
        <div className="legacy-visual reveal-left">
          <div className="legacy-img-frame">
            <img src={`${import.meta.env.BASE_URL}heritage.png`} alt="Archival goldsmith bench from 1893" />
            <div className="legacy-caption-pill"><span>Archival Bench · Est. 1893</span></div>
          </div>
        </div>
        <div className="legacy-copy reveal-right">
          <div className="section-eyebrow">A Legacy That Lives On</div>
          <h2 className="legacy-title">Since 1893. Still becoming.</h2>
          <div className="ornament-line"><div className="ornament-diamond" /></div>
          <p className="legacy-p1">Four generations. Changing tastes. One constant: relationships built on honesty.</p>
          <p>We bring the knowledge of our past to jewellery designed for the way people live today.</p>

          {/* Expandable section */}
          {expanded && (
            <p>A legacy isn't just what we inherit. It's what we choose to carry forward.</p>
          )}

          <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Read Less' : 'Read More'}
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points={expanded ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
            </svg>
          </button>

          <div className="legacy-action">
            <Link to="/story" className="btn btn-gold">The Story of SSA</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegacySection;
