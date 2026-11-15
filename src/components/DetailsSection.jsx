import React from 'react';
import { Link } from 'react-router-dom';

function DetailsSection() {
  const cards = [
    {
      icon: '24K · 22K · 18K',
      title: 'Gold Purity & Karats',
      text: 'Understanding how karats determine gold fineness, structural strength, and suitability for traditional versus daily wear.',
      link: '/education#purity',
    },
    {
      icon: 'BIS 916 · HUID',
      title: 'Hallmarking Transparency',
      text: 'Decoding mandatory government purity hallmarks and unique 6-digit laser HUID traceability on every gold ornament.',
      link: '/education#hallmarking',
    },
    {
      icon: 'Cut · Colour · Clarity · Carat',
      title: 'The 4Cs of Diamonds',
      text: 'How individual stone proportions interact with light, and why natural certification matters for lasting value.',
      link: '/education#diamonds',
    },
  ];

  return (
    <section className="details-section" id="education-preview">
      <div className="details-header reveal">
        <div className="section-eyebrow">The Details Behind the Beauty</div>
        <h2 className="section-title">Beauty deserves to be understood.</h2>
        <div className="ornament-line">
          <div className="ornament-diamond" />
        </div>
        <p className="section-desc">
          Jewellery is precious. Understanding what you choose should never be complicated.
          From gold purity and karat differences to the characteristics of diamonds,
          we believe knowledge helps you make decisions with greater confidence.
        </p>
      </div>

      <div className="details-cards-grid reveal">
        {cards.map((card, idx) => (
          <div key={card.title} className="detail-card" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <span className="detail-badge">{card.icon}</span>
            <h3 className="detail-title">{card.title}</h3>
            <p className="detail-text">{card.text}</p>
            <Link to={card.link} className="detail-link">
              Read Guide
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      <div className="details-footer reveal">
        <p className="details-footer-quote">
          "Not simply so that you can choose a piece. So that you can feel certain about your choice."
        </p>
        <Link to="/education" className="btn btn-gold">
          Learn About Jewellery (Complete Education Guide)
        </Link>
      </div>
    </section>
  );
}

export default DetailsSection;
