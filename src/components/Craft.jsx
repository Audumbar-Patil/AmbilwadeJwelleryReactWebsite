function Craft() {
  return (
    <section className="craft-section" id="craft">
      <div className="craft-inner">
        <div className="stat reveal">
          <span className="stat-number">132</span>
          <span className="stat-label">Years of the same bench</span>
        </div>
        <div className="stat reveal" style={{ transitionDelay: '0.15s' }}>
          <span className="stat-number">4</span>
          <span className="stat-label">Generations of goldsmiths</span>
        </div>
        <div className="stat reveal" style={{ transitionDelay: '0.3s' }}>
          <span className="stat-number">1</span>
          <span className="stat-label">Ledger, still handwritten</span>
        </div>
      </div>
    </section>
  );
}

export default Craft;
