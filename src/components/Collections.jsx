import { Link } from 'react-router-dom';

const collections = [
  {
    id: 'women',
    tag: 'For Her',
    name: "Women's",
    img: '/collection-women.png',
    wide: false,
  },
  {
    id: 'men',
    tag: 'For Him',
    name: "Men's",
    img: '/collection-men.png',
    wide: false,
  },
  {
    id: 'children',
    tag: 'For the Little Ones',
    name: "Children's",
    img: '/collection-children.png',
    wide: false,
  },
  {
    id: 'gifting',
    tag: 'Pure Gold · Auspicious Gifts',
    name: 'Gifting & Heirloom',
    img: '/collection-gifting.png',
    wide: true,
  },
];

function Collections() {
  return (
    <section className="collections-section" id="collections">
      <div className="collections-header reveal">
        <div className="section-eyebrow">Shop by Category</div>
        <h2 className="section-title">Explore The Collections</h2>
        <p className="section-desc">
          Meticulously handcrafted pieces across four distinct collections,
          each honouring a different chapter of life's golden moments.
        </p>
      </div>

      <div className="collections-grid">
        {collections.map((col, i) => (
          <Link
            key={col.id}
            to={`/category/${col.id}`}
            className={`collection-card reveal ${col.wide ? 'wide' : ''}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <img
              className="collection-card-img"
              src={col.img}
              alt={col.name}
            />
            <div className="collection-card-overlay" />
            <div className="collection-card-body">
              <span className="collection-card-tag">{col.tag}</span>
              <div className="collection-card-name">{col.name}</div>
              <div className="collection-card-cta">
                Shop Now
                <svg viewBox="0 0 24 24">
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

export default Collections;
