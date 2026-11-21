import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'gold',
    title: 'Gold Jewellery',
    eyebrow: 'Generations of Meaning',
    desc: 'Classic and contemporary designs in pure 22K gold.',
    img: `${import.meta.env.BASE_URL}collection-women.png`,
    link: '/category/gold',
  },
  {
    id: 'diamond',
    title: 'Diamond Jewellery',
    eyebrow: 'Enduring Brilliance',
    desc: "IGI certified diamonds for life's most meaningful moments.",
    img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    link: '/category/diamond',
  },
  {
    id: 'bridal',
    title: 'Bridal Jewellery',
    eyebrow: 'A New Chapter',
    desc: 'Heirloom bridal sets honouring tradition and individuality.',
    img: `${import.meta.env.BASE_URL}hero.png`,
    link: '/category/bridal',
  },
  {
    id: 'women',
    title: "Women's Jewellery",
    eyebrow: 'A Thousand Ways',
    desc: 'From everyday essentials to statement neckwear and mangalsutras.',
    img: `${import.meta.env.BASE_URL}collection-women.png`,
    link: '/category/women',
  },
  {
    id: 'men',
    title: "Men's Jewellery",
    eyebrow: 'A Sense of Character',
    desc: 'Chains, kadas, signet rings and ceremonial brooches.',
    img: `${import.meta.env.BASE_URL}collection-men.png`,
    link: '/category/men',
  },
  {
    id: 'children',
    title: "Children's Jewellery",
    eyebrow: 'Precious Memories',
    desc: 'Gentle balis, nazariya bracelets, and childhood milestones.',
    img: `${import.meta.env.BASE_URL}collection-children.png`,
    link: '/category/children',
  },
  {
    id: 'gifting',
    title: 'Gifting & Heirlooms',
    eyebrow: 'Timeless Keepsakes',
    desc: 'Pure 24K gold coins, bars, and auspicious gifts.',
    img: `${import.meta.env.BASE_URL}collection-gifting.png`,
    link: '/category/gifting',
  },
];

function ExploreGrid() {
  return (
    <section className="explore-section" id="explore-jewellery">
      <div className="explore-header reveal">
        <div className="section-eyebrow">Explore Our Jewellery</div>
        <h2 className="section-title">An expression for every occasion.</h2>
        <p className="section-desc">
          From pieces that accompany everyday life to elaborate creations chosen for life's most
          significant moments, discover jewellery across a range of designs, traditions, and expressions.
        </p>
      </div>

      <div className="explore-grid-uniform">
        {categories.map((cat, i) => (
          <Link
            key={cat.id}
            to={cat.link}
            className="explore-card-uniform reveal"
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div className="explore-img-wrap-uniform">
              <img
                src={cat.img}
                alt={cat.title}
                className="explore-card-img-uniform"
                loading="lazy"
              />
              <div className="explore-gradient-overlay" />
            </div>

            <div className="explore-card-content-uniform">
              <span className="explore-eyebrow-uniform">{cat.eyebrow}</span>
              <h3 className="explore-name-uniform">{cat.title}</h3>
              <p className="explore-text-uniform">{cat.desc}</p>
              <div className="explore-action-pill-uniform">
                Explore
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
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
