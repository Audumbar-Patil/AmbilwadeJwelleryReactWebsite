function Heritage() {
  return (
    <section className="heritage-section" id="heritage">
      <div className="heritage-inner">
        {/* Left — Image */}
        <div className="heritage-visual reveal-left">
          <img src={`${import.meta.env.BASE_URL}heritage.png`} alt="The original Ambilwade goldsmith bench, Solapur 1893" />
          <div className="heritage-visual-overlay" />
        </div>

        {/* Right — Copy */}
        <div className="heritage-copy reveal-right">
          <div className="section-eyebrow">Our Ledger</div>
          <h2>Every piece is logged by hand,<br />the way it was in 1893.</h2>
          <p>
            Sachin Sudhakar Ambilwade Jewellers began as a single goldsmith's
            bench in Solapur. The bench is still there — now beside it sits a
            ledger of every commission, repair, and repair-of-a-repair,
            carried across four generations.
          </p>
          <span className="heritage-year">1893 — Solapur, Maharashtra</span>
        </div>
      </div>
    </section>
  );
}

export default Heritage;
