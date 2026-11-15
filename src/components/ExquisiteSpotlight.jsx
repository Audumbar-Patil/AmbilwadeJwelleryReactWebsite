import React from 'react';
import { Link } from 'react-router-dom';

function ExquisiteSpotlight() {
  return (
    <section className="exquisite-spotlight-section" id="exquisite-collection">
      <div className="exquisite-container">
        <div className="exquisite-editorial-grid">
          {/* Left Column — High Jewellery Visuals */}
          <div className="exquisite-media-side reveal-left">
            <div className="exquisite-media-frame">
              <img
                src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=80"
                alt="The Exquisite Collection — Emerald High Jewellery"
                className="exquisite-hero-image"
              />
              <div className="exquisite-accent-badge">
                <span className="gem-icon">✦</span>
                <span>The Exquisite Collection</span>
              </div>
            </div>
          </div>

          {/* Right Column — Editorial Copy */}
          <div className="exquisite-copy-side reveal-right">
            <div className="exquisite-eyebrow">
              <span className="emerald-spark">✦</span>
              <span>ATELIER SSA · HAUTE JOAILLERIE</span>
            </div>

            <h2 className="exquisite-heading">
              For those who see something<br />
              <em>beyond the ordinary.</em>
            </h2>

            <div className="ornament-line emerald-line">
              <div className="ornament-diamond emerald-diamond" />
            </div>

            <p className="exquisite-lead">
              Some pieces are chosen because they belong to a tradition.
              <br />
              Others are chosen because they express something deeply personal.
            </p>

            <p className="exquisite-body">
              The Exquisite Collection brings together jewellery distinguished by its design,
              presence, and attention to detail. These are pieces for those who appreciate the
              thought behind a creation as much as its beauty.
            </p>

            <p className="exquisite-body">
              Rooted in a legacy that began in 1893, this is another expression of our continuing
              journey: respecting what has come before while making room for what has yet to be
              imagined.
            </p>

            <div className="exquisite-specs-pill">
              <span>Zambian &amp; Colombian Emeralds</span>
              <span className="dot">•</span>
              <span>Bespoke Micro-Prong Settings</span>
              <span className="dot">•</span>
              <span>Atelier SSA Parbhani</span>
            </div>

            <div className="exquisite-cta-wrap">
              <Link to="/category/exquisite" className="btn btn-emerald">
                Discover the Exquisite Collection
              </Link>
              <Link to="/contact" className="btn-emerald-outline">
                Enquire for Bespoke Commission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExquisiteSpotlight;
