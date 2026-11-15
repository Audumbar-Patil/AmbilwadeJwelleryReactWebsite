import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Education() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedKarat, setSelectedKarat] = useState('22K');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const karatDetails = {
    '24K': {
      title: '24-Karat Pure Gold',
      fineness: '999 Fineness (99.9% Pure Gold)',
      suitability: 'Gold Coins, Minted Bars, Investment, & Auspicious Keepsakes',
      nature: 'Pure 24K gold is soft, malleable, and possesses an intense warm yellow lustre. It is unsuitable for delicate stone-set or intricate hollow jewellery, but represents the highest purity store of wealth.',
      color: '#E5A93C',
    },
    '22K': {
      title: '22-Karat Gold (BIS 916)',
      fineness: '916 Fineness (91.6% Pure Gold + 8.4% Alloy)',
      suitability: 'Traditional Indian Wedding Jewellery, Rani Haars, Bangles, & Mangalsutras',
      nature: 'The golden standard of Indian jewellery heritage. The addition of copper/silver provides the requisite durability to hold intricate hand-carved nakshi work, filigree, and daily wear elegance.',
      color: '#D4AF37',
    },
    '18K': {
      title: '18-Karat Gold (BIS 750)',
      fineness: '750 Fineness (75.0% Pure Gold + 25.0% Alloy)',
      suitability: 'Diamond Solitaire Rings, Tennis Bracelets, Modern Minimalist Jewellery, & Rose/White Gold',
      nature: 'Ideal for diamond and precious stone settings. High tensile strength securely clutches diamond prongs while offering modern chromatic versatility including White Gold, Rose Gold, and Yellow Gold.',
      color: '#BF9855',
    },
  };

  const checklistQuestions = [
    {
      q: 'What is the gold purity of this piece?',
      a: 'Always verify the exact karat stamped on the ornament: 22K (916), 18K (750), or 24K (999). At SSA Jewellers, every piece is laser-engraved with government-certified purity.',
    },
    {
      q: 'What hallmarking or certification applies?',
      a: 'Under Indian law, genuine gold must feature the BIS triangular logo, karat fineness, and a 6-digit laser-engraved HUID (Hallmark Unique Identification) code verifyable on the BIS CARE app.',
    },
    {
      q: 'How are the gold weight and making charges calculated?',
      a: 'We provide clear invoice transparency: Net gold weight is weighed separately from stones. Making charges are itemized honestly without hidden deductions.',
    },
    {
      q: 'Are any stones included, and how are they described?',
      a: 'All natural diamonds, polkis, pearls, or colored gemstones come with their exact carat weights, color/clarity gradings, and authentic independent gemological certification (e.g. IGI).',
    },
    {
      q: 'What documentation will I receive?',
      a: 'You will receive a formal itemized tax invoice stating gold purity, net weight, gross weight, HUID number, and gemstone authenticity certificates.',
    },
    {
      q: 'How should I care for this jewellery?',
      a: 'Store individual pieces in separate cloth-lined boxes away from moisture and perfumes. Avoid abrasive chemicals. We provide complimentary lifetime ultrasonic cleaning and inspection at our Parbhani store.',
    },
    {
      q: 'What after-sales services are available?',
      a: 'We offer size adjustments, professional re-polishing, prong security checks, and transparent exchange/buyback evaluations based on prevailing gold market rates.',
    },
  ];

  return (
    <div className="education-page-container">
      {/* 11. JEWELLERY EDUCATION — Hero */}
      <section className="education-hero">
        <div className="edu-hero-overlay" />
        <div className="edu-hero-content">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="bc-sep">/</span>
            <span className="bc-current">Jewellery Education</span>
          </div>

          <span className="edu-eyebrow">SSA Guidance &amp; Buying Guide</span>
          <h1 className="edu-title">
            The more you understand,<br />
            <em>the more confident you can be.</em>
          </h1>
          <p className="edu-desc">
            Jewellery is a considered purchase. It may carry emotional significance, financial
            importance, or both. Understanding the details helps you appreciate what you are
            choosing and why it may be right for you.
          </p>
          <p className="edu-sub">
            At SSA Jewellers, we believe knowledge should be part of the jewellery-buying
            experience.
          </p>
        </div>
      </section>

      {/* Module 1: Understanding Gold Purity */}
      <section className="edu-section" id="purity">
        <div className="edu-container">
          <div className="edu-header">
            <span className="section-eyebrow">Module 01</span>
            <h2 className="edu-section-title">Understanding Gold Purity &amp; Karats</h2>
            <div className="ornament-line">
              <div className="ornament-diamond" />
            </div>
            <p className="edu-section-intro">
              Gold purity indicates the proportion of pure gold in a metal alloy. Pure gold is
              naturally soft, so jewellery is made by combining gold with noble metals (silver,
              copper, zinc) to achieve strength, longevity, and beauty.
            </p>
          </div>

          {/* Interactive Karat Selector */}
          <div className="karat-interactive-box">
            <div className="karat-selector-buttons">
              {['24K', '22K', '18K'].map((k) => (
                <button
                  key={k}
                  className={`karat-btn ${selectedKarat === k ? 'active' : ''}`}
                  onClick={() => setSelectedKarat(k)}
                >
                  <span className="k-name">{k}</span>
                  <span className="k-sub">{k === '24K' ? '99.9% Pure' : k === '22K' ? '91.6% Pure' : '75.0% Pure'}</span>
                </button>
              ))}
            </div>

            <div className="karat-card-display">
              <div className="karat-badge-row">
                <span className="k-badge-pill" style={{ borderColor: karatDetails[selectedKarat].color, color: karatDetails[selectedKarat].color }}>
                  {karatDetails[selectedKarat].fineness}
                </span>
                <span className="k-cert-badge">Govt. BIS Certified Standard</span>
              </div>
              <h3 className="karat-display-title">{karatDetails[selectedKarat].title}</h3>
              <p className="karat-display-desc">{karatDetails[selectedKarat].nature}</p>
              <div className="karat-ideal-for">
                <strong>Recommended For:</strong> {karatDetails[selectedKarat].suitability}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 2: What Is Gold Hallmarking? */}
      <section className="edu-section dark-edu-section" id="hallmarking">
        <div className="edu-container">
          <div className="edu-header">
            <span className="section-eyebrow light">Module 02 · Consumer Protection</span>
            <h2 className="edu-section-title light">What Is Gold Hallmarking?</h2>
            <div className="ornament-line light">
              <div className="ornament-diamond" />
            </div>
            <p className="edu-section-intro light">
              Hallmarking is the government process used to verify and guarantee the purity of
              precious metals. Every gold piece at SSA Jewellers carries the 3 mandatory Bureau of
              Indian Standards (BIS) hallmarks.
            </p>
          </div>

          <div className="hallmark-3marks-grid">
            <div className="mark-card">
              <div className="mark-icon-wrap">
                <svg viewBox="0 0 40 40" width="36" height="36" fill="currentColor">
                  <polygon points="20,4 36,36 4,36" stroke="#C5A059" strokeWidth="2" fill="none" />
                  <circle cx="20" cy="24" r="5" fill="#C5A059" />
                </svg>
              </div>
              <h4>01. BIS Standard Mark</h4>
              <p>The iconic triangular mark certifying that the jeweller has followed strict BIS assay standards.</p>
            </div>

            <div className="mark-card">
              <div className="mark-icon-wrap">
                <span className="karat-stamp">22K 916</span>
              </div>
              <h4>02. Karat &amp; Fineness</h4>
              <p>Clearly stamped karat symbol: 22K (916 fineness), 18K (750 fineness), or 24K (999 fineness).</p>
            </div>

            <div className="mark-card">
              <div className="mark-icon-wrap">
                <span className="huid-stamp">HUID #6</span>
              </div>
              <h4>03. 6-Digit Alphanumeric HUID</h4>
              <p>Unique laser-engraved identification code providing tamperproof digital tracking on the BIS Care App.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Module 3: How Should You Choose Gold Jewellery? */}
      <section className="edu-section" id="how-to-choose">
        <div className="edu-container">
          <div className="edu-header">
            <span className="section-eyebrow">Module 03 · The Buyer's Compass</span>
            <h2 className="edu-section-title">How Should You Choose Gold Jewellery?</h2>
            <div className="ornament-line">
              <div className="ornament-diamond" />
            </div>
            <p className="edu-section-intro">
              The right choice depends on several interrelated factors. A thoughtful purchase
              begins with understanding these considerations.
            </p>
          </div>

          <div className="considerations-grid">
            <div className="con-box">
              <span className="con-num">01</span>
              <h4>Purpose</h4>
              <p>Is the piece intended for everyday wear, a celebratory bridal event, or long-term heirloom wealth preservation?</p>
            </div>
            <div className="con-box">
              <span className="con-num">02</span>
              <h4>Design &amp; Craft</h4>
              <p>Do you prefer traditional nakshi/temple styles, contemporary minimalist lines, or a balance of both?</p>
            </div>
            <div className="con-box">
              <span className="con-num">03</span>
              <h4>Budget Transparency</h4>
              <p>We work with you to find designs that maximize aesthetic impact and gold value within your comfortable budget.</p>
            </div>
            <div className="con-box">
              <span className="con-num">04</span>
              <h4>Purity Suitability</h4>
              <p>Choosing 22K for traditional gold ornaments or 18K for high-stress stone settings and daily rings.</p>
            </div>
            <div className="con-box">
              <span className="con-num">05</span>
              <h4>Documentation</h4>
              <p>Insist on formal GST billing stating exact net weight, gross weight, karat fineness, and HUID code.</p>
            </div>
            <div className="con-box">
              <span className="con-num">06</span>
              <h4>Maintenance &amp; Care</h4>
              <p>Regular inspection of clasps, prongs, and professional ultrasonic cleaning to preserve generational beauty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Module 4: Understanding Diamonds (The 4Cs) */}
      <section className="edu-section dark-edu-section" id="diamonds">
        <div className="edu-container">
          <div className="edu-header">
            <span className="section-eyebrow light">Module 04 · Natural Diamonds</span>
            <h2 className="edu-section-title light">Understanding the 4Cs of Diamonds</h2>
            <div className="ornament-line light">
              <div className="ornament-diamond" />
            </div>
            <p className="edu-section-intro light">
              A diamond’s appearance, fire, and value are governed by four universally recognized
              pillars known as the 4Cs. No single factor tells the whole story.
            </p>
          </div>

          <div className="diamonds-4cs-grid">
            <div className="diamond-c-card">
              <span className="c-letter">C</span>
              <h3>1. Cut</h3>
              <p>The cut dictates how light enters and reflects back to the eye, determining brilliant fire and scintillation.</p>
            </div>

            <div className="diamond-c-card">
              <span className="c-letter">C</span>
              <h3>2. Colour</h3>
              <p>Graded from D (completely colourless) through Z. SSA specializes in D-F (Colourless) and G-H (Near Colourless) stones.</p>
            </div>

            <div className="diamond-c-card">
              <span className="c-letter">C</span>
              <h3>3. Clarity</h3>
              <p>Assesses microscopic natural internal inclusions. We curate VVS (Very Very Slightly Included) and VS stones of pristine purity.</p>
            </div>

            <div className="diamond-c-card">
              <span className="c-letter">C</span>
              <h3>4. Carat</h3>
              <p>The precise measurement of weight (1 carat = 200mg). Carat weight works hand in hand with cut proportions to maximize visual size.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Module 5: Questions Worth Asking Before You Buy */}
      <section className="edu-section" id="checklist">
        <div className="edu-container">
          <div className="edu-header">
            <span className="section-eyebrow">Module 05 · Checklist</span>
            <h2 className="edu-section-title">Questions Worth Asking Before You Buy</h2>
            <div className="ornament-line">
              <div className="ornament-diamond" />
            </div>
            <p className="edu-section-intro">
              These are sensible questions to ask when making a considered jewellery purchase. At
              SSA Jewellers, we believe customers should feel completely comfortable asking them.
            </p>
          </div>

          <div className="faq-accordion">
            {checklistQuestions.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.q} className={`faq-row ${isOpen ? 'open' : ''}`}>
                  <button className="faq-question-btn" onClick={() => toggleFaq(idx)}>
                    <span className="faq-num">0{idx + 1}</span>
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="edu-final-callout">
            <h3 className="callout-quote">
              "Because an informed decision is a more confident decision."
            </h3>
            <p>Our specialists on Station Road, Parbhani are ready to guide you in person.</p>
            <div className="callout-actions">
              <Link to="/contact" className="btn btn-gold">
                Plan Your Store Visit
              </Link>
              <Link to="/category/gold" className="btn btn-outline">
                Explore Gold Jewellery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
