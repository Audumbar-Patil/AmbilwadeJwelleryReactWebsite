import React, { useState, useMemo } from 'react';
import { WOMEN_HEADING_SECTIONS, WOMEN_JEWELLERY_PRODUCTS } from '../data/womenJewelleryData';
import ProductCard from './ProductCard';
import { useWishlist } from '../context/WishlistContext';

function WomenJewellerySection({ onQuickView }) {
  const { setQuickViewProduct } = useWishlist();
  const handleQuickView = onQuickView || setQuickViewProduct;

  const [activeSectionId, setActiveSectionId] = useState('all');
  const [activeSubcat, setActiveSubcat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedPurity, setSelectedPurity] = useState('All');

  // Handle section switch
  const handleSectionChange = (sectionId) => {
    setActiveSectionId(sectionId);
    setActiveSubcat('All');
  };

  // Available subcategories based on active section
  const availableSubcategories = useMemo(() => {
    if (activeSectionId === 'all') {
      const allSubs = [];
      WOMEN_HEADING_SECTIONS.forEach((sec) => {
        sec.subcategories.forEach((sub) => {
          if (!allSubs.find((s) => s.name === sub.name)) {
            allSubs.push(sub);
          }
        });
      });
      return allSubs;
    }
    const currentSec = WOMEN_HEADING_SECTIONS.find((s) => s.id === activeSectionId);
    return currentSec ? currentSec.subcategories : [];
  }, [activeSectionId]);

  // Filter products by section, subcategory, search, and purity
  const filteredProducts = useMemo(() => {
    let items = WOMEN_JEWELLERY_PRODUCTS;

    // Filter by Section
    if (activeSectionId !== 'all') {
      items = items.filter((p) => p.headingSectionId === activeSectionId);
    }

    // Filter by Subcategory
    if (activeSubcat !== 'All') {
      items = items.filter(
        (p) => p.subcategory.toLowerCase() === activeSubcat.toLowerCase()
      );
    }

    // Filter by Purity
    if (selectedPurity !== 'All') {
      items = items.filter((p) => p.purity === selectedPurity);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q) ||
          p.headingSection.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sort
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
    } else if (sortBy === 'name-asc') {
      items = [...items].sort((a, b) => a.name.localeCompare(b.name));
    }

    return items;
  }, [activeSectionId, activeSubcat, selectedPurity, searchQuery, sortBy]);

  // Helper count for subcategories
  const getSubcategoryCount = (subName) => {
    return WOMEN_JEWELLERY_PRODUCTS.filter(
      (p) => p.subcategory.toLowerCase() === subName.toLowerCase()
    ).length;
  };

  // Helper count for sections
  const getSectionCount = (sectionId) => {
    if (sectionId === 'all') return WOMEN_JEWELLERY_PRODUCTS.length;
    return WOMEN_JEWELLERY_PRODUCTS.filter((p) => p.headingSectionId === sectionId).length;
  };

  // Group filtered products by Heading Section and Subcategory for structured display
  const structuredSections = useMemo(() => {
    const sectionsToInclude =
      activeSectionId === 'all'
        ? WOMEN_HEADING_SECTIONS
        : WOMEN_HEADING_SECTIONS.filter((s) => s.id === activeSectionId);

    return sectionsToInclude
      .map((section) => {
        const sectionProducts = filteredProducts.filter(
          (p) => p.headingSectionId === section.id
        );

        const subcatGroups = section.subcategories
          .map((sub) => {
            const items = sectionProducts.filter(
              (p) => p.subcategory.toLowerCase() === sub.name.toLowerCase()
            );
            return {
              ...sub,
              products: items,
            };
          })
          .filter((group) => group.products.length > 0);

        return {
          ...section,
          totalProducts: sectionProducts.length,
          subcatGroups,
        };
      })
      .filter((s) => s.totalProducts > 0);
  }, [filteredProducts, activeSectionId]);

  return (
    <div className="women-collection-wrapper">
      {/* ── Section Quick Navigation Bar ── */}
      <section className="women-section-nav-sticky">
        <div className="women-section-nav-container">
          <div className="women-main-tabs">
            <button
              className={`women-tab-btn ${activeSectionId === 'all' ? 'active' : ''}`}
              onClick={() => handleSectionChange('all')}
            >
              <span className="tab-label">All Collections</span>
              <span className="tab-badge">{getSectionCount('all')}</span>
            </button>
            {WOMEN_HEADING_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                className={`women-tab-btn ${activeSectionId === sec.id ? 'active' : ''}`}
                onClick={() => handleSectionChange(sec.id)}
              >
                <span className="tab-label">{sec.title}</span>
                <span className="tab-badge">{getSectionCount(sec.id)}</span>
              </button>
            ))}
          </div>

          {/* Quick Search & Sort Bar */}
          <div className="women-filter-controls-row">
            <div className="women-search-input-wrap">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" />
              </svg>
              <input
                type="text"
                placeholder="Search by jewellery name, motif..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="women-search-input"
              />
              {searchQuery && (
                <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                  ×
                </button>
              )}
            </div>

            <div className="women-sort-wrap">
              <label htmlFor="women-sort">Sort:</label>
              <select
                id="women-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="luxury-select"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Subcategories Horizontal Scroll Track */}
        <div className="women-subcat-track-wrap">
          <div className="women-subcat-track">
            <button
              className={`subcat-pill ${activeSubcat === 'All' ? 'active' : ''}`}
              onClick={() => setActiveSubcat('All')}
            >
              All {activeSectionId !== 'all' ? 'in Section' : 'Types'}
            </button>
            {availableSubcategories.map((sub) => {
              const count = getSubcategoryCount(sub.name);
              return (
                <button
                  key={sub.id}
                  className={`subcat-pill ${activeSubcat === sub.name ? 'active' : ''}`}
                  onClick={() => setActiveSubcat(sub.name)}
                >
                  {sub.name} <span className="sub-pill-count">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Products Display (Heading Sections & Subcategories) ── */}
      <section className="women-products-display-section">
        <div className="cat-grid-container">
          {/* Active summary counts banner */}
          <div className="products-count-header">
            <span>
              Showing <strong>{filteredProducts.length}</strong> certified creations
              {activeSectionId !== 'all' && ` in ${WOMEN_HEADING_SECTIONS.find(s => s.id === activeSectionId)?.title}`}
              {activeSubcat !== 'All' && ` · ${activeSubcat}`}
            </span>
            <span className="guarantee-note">✦ BIS 916 Hallmarked · 100% Certified Authentic</span>
          </div>

          {structuredSections.length > 0 ? (
            <div className="women-sections-flow">
              {structuredSections.map((section) => (
                <div key={section.id} id={section.id} className="women-heading-section-block">
                  {/* Section Main Editorial Heading */}
                  <div className="women-heading-banner">
                    <span className="section-eyebrow">{section.eyebrow}</span>
                    <h2 className="women-heading-title">{section.title}</h2>
                    <p className="women-heading-tagline">{section.tagline}</p>
                    <div className="ornament-line">
                      <div className="ornament-diamond" />
                    </div>
                    <p className="women-heading-desc">{section.description}</p>
                  </div>

                  {/* Subcategories under this Heading Section */}
                  <div className="women-subgroups-list">
                    {section.subcatGroups.map((group) => (
                      <div key={group.id} className="women-subgroup-card">
                        <div className="women-subgroup-header">
                          <div className="women-subgroup-title-row">
                            <h3 className="women-subgroup-title">{group.name}</h3>
                            <span className="women-subgroup-count-badge">
                              {group.products.length} {group.products.length === 1 ? 'Design' : 'Designs'}
                            </span>
                          </div>
                          <p className="women-subgroup-desc">{group.desc}</p>
                        </div>

                        {/* Product Cards Grid for this Subcategory */}
                        <div className="luxury-products-grid">
                          {group.products.map((product) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              onQuickView={handleQuickView}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="cat-no-products">
              <p>No jewellery pieces match your current filter or search query "{searchQuery}".</p>
              <button
                className="btn btn-gold"
                onClick={() => {
                  setActiveSectionId('all');
                  setActiveSubcat('All');
                  setSearchQuery('');
                  setSelectedPurity('All');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Editorial Storytelling from jewellers.md for Women Section ── */}
      <section className="cat-editorial-advisory">
        <div className="editorial-box">
          <span className="section-eyebrow">A Thousand Ways to Wear Your Story</span>
          <h2>Women’s Jewellery at SSA Jewellers</h2>
          <div className="ornament-line">
            <div className="ornament-diamond" />
          </div>
          <p>
            Some pieces belong to a tradition. Others become part of a personal style that is
            entirely your own. Women’s jewellery has always held room for both: honoring cultural
            identity, complementing everyday life, marking an important occasion, or expressing an
            individuality that needs no explanation.
          </p>
          <p>
            At Sachin Sudhakar Ambilwade Jewellers, every creation carries 133 years of certified
            trust. From intricately carved Maharashtrian Brahmani Naths and sacred Vati Mangalsutras
            to handcrafted Rani Haars, temple jhumkas, and articulated haathphools, discover jewellery
            across traditional and contemporary expressions.
          </p>
          <blockquote className="editorial-quote">
            "Because jewellery is not simply worn for an occasion — it becomes part of the person who wears it."
          </blockquote>
          <div className="editorial-actions">
            <a
              href="https://wa.me/919422178900?text=Hello%20SSA%20Jewellers,%20I%20am%20exploring%20your%20Women's%20Jewellery%20collection%20and%20would%20like%20to%20inquire%20about%20a%20private%20viewing."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Inquire via WhatsApp
            </a>
            <a href="#/contact" className="btn btn-outline">
              Plan Your Flagship Visit in Parbhani
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WomenJewellerySection;
