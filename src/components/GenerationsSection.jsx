import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const generationsData = [
  {
    id: 'grandmother',
    title: 'The Grandmother',
    badge: 'Timeless Heritage & Purity',
    quote: 'The elegance of a familiar tradition.',
    description:
      'Drawn to the quiet majesty of heirloom pieces — pure 22-karat gold Patli bangles, handcrafted Kolhapuri Saaj, and timeless temple motifs carved with reverence.',
    recommended: 'Heirloom Rani Haars & Solid Kadas',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    link: '/category/gold',
  },
  {
    id: 'mother',
    title: 'The Daughter',
    badge: 'A Balance of Heritage & Modernity',
    quote: 'Honoring tradition while writing her own narrative.',
    description:
      'Seeking versatile grace — sophisticated Polki chokers, refined Vati mangalsutras, and lightweight diamond-accented earrings suited to both family celebrations and contemporary life.',
    recommended: 'Polki Chokers & Diamond Mangalsutras',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    link: '/category/women',
  },
  {
    id: 'granddaughter',
    title: 'The Granddaughter',
    badge: 'Distinctive, Unexpected Expression',
    quote: 'Drawn to something entirely personal.',
    description:
      'Finding resonance in architectural geometry, solitaire diamonds, and minimalist high jewelry that celebrates individuality with quiet confidence and certified brilliance.',
    recommended: 'Solitaire Pavé & Art Deco Statements',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    link: '/category/diamond',
  },
];

function GenerationsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = generationsData[activeTab];

  return (
    <section className="generations-section" id="generations">
      <div className="generations-header reveal">
        <div className="section-eyebrow">Jewellery for Every Generation</div>
        <h2 className="section-title">
          Different generations. Different expressions.<br />
          <em>One enduring bond.</em>
        </h2>
        <p className="section-desc">
          A grandmother may look for the elegance of a familiar tradition. Her daughter may seek
          a balance between heritage and modernity. Her granddaughter may find herself drawn to
          something entirely unexpected. At SSA Jewellers, we believe there is beauty in all three.
        </p>
      </div>

      {/* Tabs */}
      <div className="gen-tabs-bar reveal">
        {generationsData.map((gen, idx) => (
          <button
            key={gen.id}
            className={`gen-tab-btn ${activeTab === idx ? 'active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            <span className="gen-tab-number">0{idx + 1}</span>
            <span className="gen-tab-name">{gen.title}</span>
          </button>
        ))}
      </div>

      {/* Active Tab Spotlight */}
      <div className="gen-content-card reveal">
        <div className="gen-card-grid">
          <div className="gen-card-media">
            <img
              src={current.image}
              alt={current.title}
              className="gen-card-img"
            />
            <div className="gen-badge-overlay">{current.badge}</div>
          </div>

          <div className="gen-card-text">
            <span className="gen-step-tag">Generation 0{activeTab + 1} Perspective</span>
            <h3 className="gen-card-heading">"{current.quote}"</h3>
            <p className="gen-card-desc">{current.description}</p>

            <div className="gen-preferred-box">
              <span className="pref-label">Curated Styling:</span>
              <span className="pref-val">{current.recommended}</span>
            </div>

            <div className="gen-cta-row">
              <Link to={current.link} className="btn btn-gold">
                Explore {current.title} Selection
              </Link>
              <Link to="/category/gold" className="btn-arrow">
                View All Generations Collections
                <svg viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GenerationsSection;
