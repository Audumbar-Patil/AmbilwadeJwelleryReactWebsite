import React from 'react';
import { Link } from 'react-router-dom';

function ApproachSection() {
  const pillars = [
    {
      number: '01',
      title: 'Purity & Hallmarking',
      desc: 'Transparent verification of 24K, 22K (BIS 916), and 18K karats with full HUID traceability on every ornament.',
    },
    {
      number: '02',
      title: 'Guidance, Not Persuasion',
      desc: 'We take the time to explain metal weight, making calculations, stone grades, and care recommendations with patience.',
    },
    {
      number: '03',
      title: 'Respect for Your Preferences',
      desc: 'Whether honoring family heritage or seeking a contemporary design within your budget, we guide your decision with honesty.',
    },
  ];

  return (
    <section className="approach-section" id="approach">
      <div className="approach-inner">
        <div className="approach-header reveal">
          <div className="section-eyebrow light">Our Approach to Jewellery</div>
          <h2 className="section-title light">The right choice is an informed one.</h2>
          <div className="ornament-line light">
            <div className="ornament-diamond" />
          </div>
          <p className="section-desc light">
            Precious jewellery deserves more than a beautiful presentation. It deserves
            understanding. What is the purity of the gold? What should you know about the stones?
            Which design suits your needs, your preferences, and your budget?
          </p>
        </div>

        <div className="approach-grid reveal">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="approach-card">
              <span className="pillar-num">{pillar.number}</span>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="approach-quote-box reveal">
          <p>
            "Because the value of a purchase lies not only in what you take home,
            <br />
            but also in the confidence with which you choose it."
          </p>
          <div className="approach-cta">
            <Link to="/education" className="btn btn-gold">
              Our Commitment to You (Education Guide)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApproachSection;
