import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES_CONFIG, JEWELLERY_PRODUCTS } from '../data/jewelleryData';
import ProductCard from '../components/ProductCard';
import ProductQuickView from '../components/ProductQuickView';
import { useWishlist } from '../context/WishlistContext';

function CategoryPage() {
  const { categoryId } = useParams();
  const catKey = (categoryId || 'gold').toLowerCase();
  const config = CATEGORIES_CONFIG[catKey] || CATEGORIES_CONFIG.gold;
  const { setQuickViewProduct } = useWishlist();

  const [activeSubcat, setActiveSubcat] = useState('All');
  const [selectedPurity, setSelectedPurity] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveSubcat('All');
    setSelectedPurity('All');
  }, [catKey]);

  // Filter products by category, subcategory, and purity
  const filteredProducts = useMemo(() => {
    let items = JEWELLERY_PRODUCTS.filter((item) => {
      // Primary category match
      if (item.category === catKey) return true;
      // Cross-category relevance (e.g., bridal has items that also match women/gold)
      if (catKey === 'bridal' && item.tags?.includes('Bridal')) return true;
      if (catKey === 'women' && (item.category === 'gold' || item.category === 'diamond') && !item.tags?.includes('Men') && !item.tags?.includes('Baby')) return true;
      return false;
    });

    if (activeSubcat !== 'All') {
      items = items.filter(
        (item) => item.subcategory.toLowerCase() === activeSubcat.toLowerCase()
      );
    }

    if (selectedPurity !== 'All') {
      items = items.filter((item) => item.purity === selectedPurity);
    }

    if (sortBy === 'price-low') {
      items = [...items].sort((a, b) => {
        const numA = parseInt(a.price.replace(/[^0-9]/g, ''), 10) || 0;
        const numB = parseInt(b.price.replace(/[^0-9]/g, ''), 10) || 0;
        return numA - numB;
      });
    } else if (sortBy === 'price-high') {
      items = [...items].sort((a, b) => {
        const numA = parseInt(a.price.replace(/[^0-9]/g, ''), 10) || 0;
        const numB = parseInt(b.price.replace(/[^0-9]/g, ''), 10) || 0;
        return numB - numA;
      });
    }

    return items;
  }, [catKey, activeSubcat, selectedPurity, sortBy]);

  const isExquisite = catKey === 'exquisite';

  return (
    <div className={`category-page-container ${isExquisite ? 'exquisite-theme-page' : ''}`}>
      {/* Category Hero */}
      <section className="cat-hero">
        <div className="cat-hero-bg">
          <img src={config.heroBg} alt={config.title} />
        </div>
        <div className="cat-hero-overlay" />
        <div className="cat-hero-content">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="bc-sep">/</span>
            <span className="bc-current">{config.title}</span>
          </div>

          <span className="cat-eyebrow">{config.subtitle}</span>
          <h1 className="cat-title">{config.headline}</h1>
          <p className="cat-intro">{config.intro}</p>
        </div>
      </section>

      {/* Filter & Controls Bar */}
      <section className="cat-filter-section">
        <div className="cat-filter-container">
          {/* Subcategories Horizontal Scroll */}
          <div className="subcat-scroll-track">
            {config.subcategories.map((sub) => (
              <button
                key={sub}
                className={`subcat-pill ${activeSubcat === sub ? 'active' : ''}`}
                onClick={() => setActiveSubcat(sub)}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Secondary Controls (Purity & Sorting) */}
          <div className="cat-filter-controls">
            <div className="filter-group">
              <label htmlFor="purity-select">Purity:</label>
              <select
                id="purity-select"
                value={selectedPurity}
                onChange={(e) => setSelectedPurity(e.target.value)}
                className="luxury-select"
              >
                <option value="All">All Purities</option>
                <option value="22K">22K Gold (BIS 916)</option>
                <option value="24K">24K Pure Gold (999)</option>
                <option value="18K">18K Gold (BIS 750)</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="sort-select">Sort By:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="luxury-select"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="cat-products-section">
        <div className="cat-grid-container">
          <div className="products-count-header">
            <span>Showing {filteredProducts.length} jewellery creation{filteredProducts.length === 1 ? '' : 's'}</span>
            <span className="guarantee-note">✦ BIS Hallmarked &amp; 100% Certified Authentic</span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="luxury-products-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          ) : (
            <div className="cat-no-products">
              <p>No pieces currently match your selected filter.</p>
              <button
                className="btn btn-gold"
                onClick={() => {
                  setActiveSubcat('All');
                  setSelectedPurity('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Editorial Storytelling Section from jewellers.md for specific categories */}
      {catKey === 'gold' && (
        <section className="cat-editorial-advisory">
          <div className="editorial-box">
            <span className="section-eyebrow">Choosing Gold With Confidence</span>
            <h2>Understanding differences in purity, karat, and design</h2>
            <div className="ornament-line">
              <div className="ornament-diamond" />
            </div>
            <p>
              Gold jewellery can differ in purity, colour, design, and construction. Understanding
              these differences helps you select a piece suited to your needs, preferences, and
              budget.
            </p>
            <p>
              At SSA Jewellers, we believe customers should have the information they need to make
              an informed choice. Our team can help explain available karat options, relevant
              certification, and the details of the pieces you are considering.
            </p>
            <blockquote className="editorial-quote">
              "Because choosing gold should come with understanding, not uncertainty."
            </blockquote>
            <div className="editorial-actions">
              <Link to="/education" className="btn btn-gold">
                Read the Complete Gold Purity Guide
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Visit Our Parbhani Store
              </Link>
            </div>
          </div>
        </section>
      )}

      {catKey === 'diamond' && (
        <section className="cat-editorial-advisory">
          <div className="editorial-box">
            <span className="section-eyebrow">Understanding Your Diamonds</span>
            <h2>Cut · Colour · Clarity · Carat Weight</h2>
            <div className="ornament-line">
              <div className="ornament-diamond" />
            </div>
            <p>
              A diamond’s appearance and value are influenced by several factors, including cut,
              colour, clarity, and carat weight. Understanding these characteristics can help you
              compare options and choose a piece that aligns with your preferences and budget.
            </p>
            <p>
              Our approach is to help customers understand the relevant details and documentation
              associated with their chosen jewellery, so they can make their decisions with
              confidence.
            </p>
            <div className="editorial-actions">
              <Link to="/education#diamonds" className="btn btn-gold">
                Explore Diamond 4Cs Interactive Guide
              </Link>
            </div>
          </div>
        </section>
      )}

      {catKey === 'bridal' && (
        <section className="cat-editorial-advisory">
          <div className="editorial-box">
            <span className="section-eyebrow">A Choice That Belongs to You</span>
            <h2>Bespoke Bridal Trousseau Curation</h2>
            <div className="ornament-line">
              <div className="ornament-diamond" />
            </div>
            <p>
              Every bride has her own understanding of beauty. Some are drawn to elaborate
              traditional designs; others prefer contemporary interpretations or a harmonious
              combination of both.
            </p>
            <p>
              Our role is to help you explore the possibilities, understand the options, and find
              jewellery that feels right for you.
            </p>
            <blockquote className="editorial-quote">
              "Because the most meaningful bridal jewellery is not simply chosen for the occasion.
              <br />
              <strong>It is chosen for the person who will wear it.</strong>"
            </blockquote>
            <div className="editorial-actions">
              <Link to="/contact" className="btn btn-gold">
                Book a Private Bridal Viewing
              </Link>
            </div>
          </div>
        </section>
      )}

      {catKey === 'exquisite' && (
        <section className="cat-editorial-advisory exquisite-editorial">
          <div className="editorial-box">
            <span className="section-eyebrow light">Heritage, Reconsidered</span>
            <h2 className="light">High Jewellery for Those Who Look Beyond the Expected</h2>
            <div className="ornament-line light">
              <div className="ornament-diamond" />
            </div>
            <p className="light">
              Tradition offers an extraordinary vocabulary of forms, techniques, and ideas. The
              opportunity lies in interpreting that vocabulary in ways that feel relevant to the
              present without losing its character.
            </p>
            <p className="light">
              The Exquisite Collection represents this perspective: an appreciation for the past,
              expressed through a continuing exploration of design.
            </p>
            <div className="editorial-actions">
              <Link to="/contact" className="btn btn-emerald">
                Enquire for Private Viewing at Parbhani Flagship
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Global Quick View Modal */}
      <ProductQuickView />
    </div>
  );
}

export default CategoryPage;
