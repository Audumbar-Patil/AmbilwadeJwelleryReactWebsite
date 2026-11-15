import React from 'react';
import { Link } from 'react-router-dom';

function LegacySection() {
  return (
    <section className="legacy-section" id="legacy">
      <div className="legacy-inner">
        <div className="legacy-visual reveal-left">
          <div className="legacy-img-frame">
            <img
              src={`${import.meta.env.BASE_URL}heritage.png`}
              alt="Archival goldsmith bench and preserved instruments from 1893"
            />
            <div className="legacy-caption-pill">
              <span>Archival Bench &amp; Historical Ledger · Est. 1893</span>
            </div>
          </div>
        </div>

        <div className="legacy-copy reveal-right">
          <div className="section-eyebrow">A Legacy That Lives On</div>
          <h2 className="legacy-title">Since 1893, and still becoming.</h2>

          <div className="ornament-line">
            <div className="ornament-diamond" />
          </div>

          <p className="legacy-p1">Every generation leaves something behind.</p>
          <p>
            Sometimes, it is a piece of jewellery. Sometimes, it is a tradition. And sometimes,
            it is the name of someone a family has trusted for as long as it can remember.
          </p>
          <p>
            SSA Jewellers began its journey in 1893. Through changing times, evolving tastes, and
            generations of customers, the belief at its heart has remained the same:{' '}
            <em>every relationship deserves to be built on honesty.</em>
          </p>
          <p>
            Today, we bring together the knowledge inherited from the past and a contemporary
            understanding of design. We honour the traditions that shaped us while continuing to
            discover new ways of expressing them.
          </p>

          <blockquote className="legacy-quote">
            "Because a legacy is not simply something we inherit.
            <br />
            <strong>It is something we choose to carry forward.</strong>"
          </blockquote>

          <div className="legacy-action">
            <Link to="/story" className="btn btn-gold">
              The Story of SSA
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegacySection;
