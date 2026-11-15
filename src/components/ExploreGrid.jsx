import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'gold',
    title: 'Gold Jewellery',
    eyebrow: 'Generations of Meaning',
    desc: 'A metal that has held a place in Indian homes, celebrations, and traditions for generations. Classic and contemporary designs.',
    img: `${import.meta.env.BASE_URL}collection-women.png`,
    link: '/category/gold',
    colSpan: 'normal',
  },
  {
    id: 'diamond',
    title: 'Diamond Jewellery',
    eyebrow: 'Enduring Brilliance',
    desc: 'For those drawn to the character, brilliance, and enduring appeal of diamonds for meaningful milestones and celebrations.',
    img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    link: '/category/diamond',
    colSpan: 'normal',
  },
  {
    id: 'bridal',
    title: 'Bridal Jewellery',
    eyebrow: 'A New Chapter',
    desc: 'Jewellery chosen for a day that brings together families, traditions, and stories. Honoring cultural heritage and individuality.',
    img: `${import.meta.env.BASE_URL}hero.png`,
    link: '/category/bridal',
    colSpan: 'wide',
  },
  {
    id: 'women',
    title: 'Women’s Jewellery',
    eyebrow: 'A Thousand Ways',
    desc: 'From everyday essentials to statement neckwear, mangalsutras, naths, and articulated hand harnesses.',
    img: `${import.meta.env.BASE_URL}collection-women.png`,
    link: '/category/women',
    colSpan: 'normal',
  },
  {
    id: 'men',
    title: 'Men’s Jewellery',
    eyebrow: 'A Sense of Character',
    desc: 'Thoughtfully selected pieces including solid chains, signet rings, kadas, and ceremonial brooches.',
    img: `${import.meta.env.BASE_URL}collection-men.png`,
    link: '/category/men',
    colSpan: 'normal',
  },
  {
    id: 'children',
    title: 'Children’s Jewellery',
    eyebrow: 'Precious Memories',
    desc: 'Little pieces chosen with affection — gentle balis, protective nazariya bracelets, and childhood milestones.',
    img: `${import.meta.env.BASE_URL}collection-children.png`,
    link: '/category/children',
    colSpan: 'normal',
  },
  {
    id: 'gifting',
    title: 'Gifting & Heirlooms',
    eyebrow: 'Timeless Keepsakes',
    desc: 'Pure 24K gold coins, investment bars, and auspicious gifts that become part of a family’s story.',
    img: `${import.meta.env.BASE_URL}collection-gifting.png`,
    link: '/category/gifting',
    colSpan: 'normal',
  },
];

function ExploreGrid() {
  return (
    <section className="explore-section" id="explore-jewellery">
      <div className="explore-header reveal">
        <div className="section-eyebrow">Explore Our Jewellery</div>
        <h2 className="section-title">An expression for every occasion.</h2>
        <p className="section-desc">
          From pieces that accompany everyday life to elaborate creations chosen for life’s most
          significant moments, discover jewellery across a range of designs, traditions, and expressions.
        </p>
      </div>

      <div className="explore-grid">
        {categories.map((cat, i) => (
          <Link
            key={cat.id}
            to={cat.link}
            className={`explore-card reveal ${cat.colSpan === 'wide' ? 'card-wide' : ''}`}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="explore-img-wrap">
              <img
                src={cat.img}
                alt={cat.title}
                className="explore-card-img"
                loading="lazy"
              />
              <div className="explore-card-overlay" />
            </div>

            <div className="explore-card-content">
              <span className="explore-eyebrow">{cat.eyebrow}</span>
              <h3 className="explore-name">{cat.title}</h3>
              <p className="explore-text">{cat.desc}</p>
              <div className="explore-action-pill">
                Explore Collection
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ExploreGrid;
