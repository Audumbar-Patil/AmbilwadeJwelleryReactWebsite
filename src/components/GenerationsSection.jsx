import React from 'react';
import { Link } from 'react-router-dom';

const generationsData = [
  {
    id: 'grandmother',
    number: '01',
    title: 'The Grandmother',
    badge: 'Timeless Heritage & Purity',
    description: 'Drawn to the quiet majesty of heirloom pieces — pure 22-karat gold, handcrafted Kolhapuri Saaj, and timeless temple motifs.',
    image: `${import.meta.env.BASE_URL}images/grandmother.jpeg`,
    link: '/category/gold',
  },
  {
    id: 'mother',
    number: '02',
    title: 'The Daughter',
    badge: 'Heritage & Modernity',
    description: 'Seeking versatile grace — Polki chokers, refined Vati mangalsutras, and diamond-accented earrings for celebration and contemporary life.',
    image: `${import.meta.env.BASE_URL}images/granddaughter.jpeg`,
    link: '/category/women',
  },
  {
    id: 'granddaughter',
    number: '03',
    title: 'The Granddaughter',
    badge: 'Distinctive Expression',
    description: 'Finding resonance in solitaire diamonds and minimalist high jewelry that celebrates individuality with quiet confidence.',
    image: `${import.meta.env.BASE_URL}images/granddaughter.jpeg`,
    link: '/category/diamond',
  },
];

function GenerationsSection() {
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

      {/* 3 Side-by-Side Cards */}
      <div className="gen-cards-row">
        {generationsData.map((gen) => (
          <Link key={gen.id} to={gen.link} className="gen-portrait-card reveal">
            <div className="gen-portrait-img-wrap">
              <img src={gen.image} alt={gen.title} className="gen-portrait-img" loading="lazy" />
              <div className="gen-number-badge">{gen.number}</div>
            </div>
            <div className="gen-portrait-body">
              <div className="gen-portrait-eyebrow">{gen.badge}</div>
              <h3 className="gen-portrait-title">{gen.title}</h3>
              <p className="gen-portrait-desc">{gen.description}</p>
              <span className="gen-portrait-cta">
                Explore
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="gen-view-all-wrap reveal">
        <Link to="/category/gold" className="btn-arrow">
          View All Generations Collections
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default GenerationsSection;
