const items = [
  'Handcrafted in Solapur',
  '22K & 24K Gold',
  'Est. 1893',
  'Four Generations',
  'Bespoke Commissions',
  'BIS Hallmarked',
  'Heirloom Quality',
  'Private Viewings Available',
];

function Ticker() {
  // Duplicate for seamless loop
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
