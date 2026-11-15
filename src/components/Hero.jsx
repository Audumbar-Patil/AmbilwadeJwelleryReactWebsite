import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../data/jewelleryData';

function Hero() {
  return (
    <section className="hero">
      {/* Background imagery */}
      <div className="hero-bg">
        <img
          src={`${import.meta.env.BASE_URL}hero.png`}
          alt="SSA Jewellers — Heirloom Bridal & Gold Jewellery"
        />
      </div>

      {/* Layered luxury overlay */}
      <div className="hero-overlay" />

      {/* Hero content */}
      <div className="hero-content">
        <span className="hero-eyebrow">Parbhani, Maharashtra · Established 1893</span>

        <h1 className="hero-heading">
          Some things are passed down.<br />
          <em>So is trust.</em>
        </h1>

        <p className="hero-desc">
          Since 1893, SSA Jewellers has been part of the stories families carry forward.
          From a grandmother’s cherished possession to a daughter’s first choice, we believe
          jewellery becomes more meaningful when the trust behind it lasts for generations.
        </p>

        <p className="hero-subphrase">
          Rooted in heritage. Thoughtful in design. Guided by trust.
        </p>

        <div className="hero-cta">
          <Link to="/story" className="btn btn-gold">
            Discover Our Story
          </Link>
          <Link to="/category/gold" className="btn btn-outline">
            Explore Our Jewellery
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-hint">
        <span>Explore Legacy</span>
        <div className="scroll-line" />
      </div>

      <div className="hero-rule" />
    </section>
  );
}

export default Hero;
