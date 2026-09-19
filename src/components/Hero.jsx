import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      {/* Background image */}
      <div className="hero-bg">
        <img src="/hero.png" alt="Ambilwade Jewellers — Gold Bridal Collection" />
      </div>

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Main content */}
      <div className="hero-content">
        <span className="hero-eyebrow">Solapur · Established 1893</span>

        <h1>
          Heirlooms are not bought.<br />
          They are <em>begun.</em>
        </h1>

        <p className="hero-desc">
          Four generations of goldsmiths in Ambilwade, crafting pieces meant
          to outlive the hands that first wear them.
        </p>

        <div className="hero-cta">
          <Link to="/category/women" className="btn btn-gold">
            Explore Women's
          </Link>
          <Link to="/category/men" className="btn btn-outline">
            Explore Men's
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>

      <div className="hero-rule" />
    </section>
  );
}

export default Hero;
