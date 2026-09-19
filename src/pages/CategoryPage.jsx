import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const categoryData = {
  women: {
    title: "Women's Collection",
    subtitle: "For Her",
    description:
      "Exquisite pieces crafted for the modern woman, blending traditional heritage with contemporary design.",
    items: [
      { id: 'w1', name: 'Bridal Maangtika',     price: '₹45,000',   metal: '22K Gold' },
      { id: 'w2', name: 'Temple Matha Patti',   price: '₹1,20,000', metal: '22K Gold' },
      { id: 'w3', name: 'Kundan Nose Pin',       price: '₹15,000',   metal: '18K Gold' },
      { id: 'w4', name: 'Heritage Choker',       price: '₹3,50,000', metal: '22K Gold' },
      { id: 'w5', name: 'Classic Rani Haar',     price: '₹4,80,000', metal: '22K Gold' },
      { id: 'w6', name: 'Traditional Mangalsutra', price: '₹85,000', metal: '22K Gold' },
      { id: 'w7', name: 'Polki Hasli',           price: '₹2,10,000', metal: '18K Gold' },
      { id: 'w8', name: 'Intricate Haathphool',  price: '₹95,000',   metal: '22K Gold' },
    ],
  },
  men: {
    title: "Men's Collection",
    subtitle: "For Him",
    description:
      "Bold and distinguished ornaments designed for grooms and everyday elegance.",
    items: [
      { id: 'm1', name: 'Royal Broach',          price: '₹65,000',   metal: '22K Gold' },
      { id: 'm2', name: 'Classic Chain',          price: '₹1,10,000', metal: '22K Gold' },
      { id: 'm3', name: 'Signet Band',            price: '₹40,000',   metal: '18K Rose Gold' },
      { id: 'm4', name: 'Heavy Groom Necklace',   price: '₹4,20,000', metal: '22K Gold' },
      { id: 'm5', name: 'Diamond Studs',          price: '₹55,000',   metal: '18K White Gold' },
      { id: 'm6', name: 'Traditional Kada',       price: '₹1,80,000', metal: '22K Gold' },
    ],
  },
  children: {
    title: "Children's Collection",
    subtitle: "For the Little Ones",
    description:
      "Delicate and charming pieces for the little ones, crafted with care and love.",
    items: [
      { id: 'c1', name: 'Tiny Earrings',         price: '₹12,000',   metal: '22K Gold' },
      { id: 'c2', name: 'Chain with Pendant',    price: '₹25,000',   metal: '22K Gold' },
      { id: 'c3', name: 'Nazariya Bracelet',     price: '₹15,000',   metal: '18K Gold & Beads' },
      { id: 'c4', name: 'Baby Rings',            price: '₹8,000',    metal: '22K Gold' },
      { id: 'c5', name: 'Waist Chain',           price: '₹45,000',   metal: '22K Gold' },
    ],
  },
  gifting: {
    title: 'Gifting & Heirloom',
    subtitle: 'Pure Gold · Auspicious Gifts',
    description:
      "Pure gold assets and timeless gifts for auspicious occasions.",
    items: [
      { id: 'g1', name: '10g Gold Coin',  price: 'Market Price', metal: '24K Gold' },
      { id: 'g2', name: '50g Gold Bar',   price: 'Market Price', metal: '24K Gold' },
      { id: 'g3', name: '24K Pure Ring',  price: '₹75,000',      metal: '24K Gold' },
      { id: 'g4', name: '24K Chain',      price: '₹1,50,000',    metal: '24K Gold' },
    ],
  },
};

/* ── Inline jewellery SVG icon ─────────────────────────── */
function JewelIcon() {
  return (
    <svg className="product-img-icon" viewBox="0 0 80 80" fill="none">
      <polygon
        points="40,10 65,30 55,65 25,65 15,30"
        stroke="#966353"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      <polygon
        points="40,22 55,33 49,55 31,55 25,33"
        stroke="#BF7E6A"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
      <circle cx="40" cy="40" r="5" stroke="#734C3F" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function CategoryPage() {
  const { categoryId } = useParams();

  const category = categoryData[categoryId?.toLowerCase()] || {
    title: 'Collection Not Found',
    subtitle: '',
    description: 'The collection you are looking for does not exist.',
    items: [],
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Reveal cards on scroll
    const cards = document.querySelectorAll('.product-card');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    cards.forEach((c, i) => {
      c.style.opacity = '0';
      c.style.transform = 'translateY(24px)';
      c.style.transition = `opacity 0.7s ease ${i * 0.06}s, transform 0.7s ease ${i * 0.06}s`;
      io.observe(c);
    });
    return () => cards.forEach((c) => io.unobserve(c));
  }, [categoryId]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-void)' }}>
      {/* Category hero header */}
      <div className="category-hero">
        <div>
          <div className="section-eyebrow">{category.subtitle}</div>
          <h1 className="serif">{category.title}</h1>
          <p>{category.description}</p>
        </div>
      </div>

      {/* Product grid */}
      <div className="product-section">
        {category.items.length > 0 ? (
          <div className="product-grid">
            {category.items.map((item) => (
              <Link to="#" key={item.id} className="product-card">
                <div className="product-image-wrap">
                  <JewelIcon />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{item.name}</h3>
                  <p className="product-metal">{item.metal}</p>
                  <div className="product-footer">
                    <span className="product-price">{item.price}</span>
                    <div className="product-cta-mini">
                      <svg viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <Link to="/" className="btn btn-gold">
              Return to Collections
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
