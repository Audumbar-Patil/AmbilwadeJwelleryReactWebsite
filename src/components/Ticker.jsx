import React from 'react';

const items = [
  'Station Road, Parbhani',
  '100% BIS 916 Hallmarked Gold',
  'Est. 1893 · 133 Years of Trust',
  'Certified Natural Diamonds',
  'The Exquisite Collection',
  'Four Generations of Goldsmiths',
  'HUID Traceability Guaranteed',
  'Bespoke Bridal Consultations',
  'Pure 24K Gold Coins & Bars',
  'Private Viewing Lounge',
];

function Ticker() {
  const all = [...items, ...items];

  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-inner">
        {all.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
