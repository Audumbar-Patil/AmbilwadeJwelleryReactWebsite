import React, { useState, useMemo } from 'react';
import { useWishlist } from '../context/WishlistContext';
import { JEWELLERY_PRODUCTS } from '../data/jewelleryData';
import { Link } from 'react-router-dom';

function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct } = useWishlist();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return JEWELLERY_PRODUCTS.filter((item) => {
      return (
        item.name.toLowerCase().includes(q) ||
        item.subcategory.toLowerCase().includes(q) ||
        item.metal.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      );
    });
  }, [query]);

  if (!isSearchOpen) return null;

  const close = () => {
    setIsSearchOpen(false);
    setQuery('');
  };

  const handleSelect = (item) => {
    close();
    setQuickViewProduct(item);
  };

  return (
    <div className="search-overlay" onClick={close}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-header">
          <div className="search-input-wrap">
            <svg viewBox="0 0 24 24" className="search-bar-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
            <input
              type="text"
              autoFocus
              placeholder="Search gold necklaces, solitaire rings, bridal sets, coins, kadas..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            {query && (
              <button className="search-clear-btn" onClick={() => setQuery('')}>
                Clear
              </button>
            )}
          </div>
          <button className="search-close-btn" onClick={close} aria-label="Close search">
            Close ✕
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        {!query && (
          <div className="search-suggestions">
            <span className="suggestion-label">Suggested Searches:</span>
            {['Rani Haar', 'Diamond Solitaire', 'Bridal Set', 'Mangalsutra', 'Kadas', '24K Gold Coin', 'Emerald Suite'].map(
              (term) => (
                <button
                  key={term}
                  className="suggestion-pill"
                  onClick={() => setQuery(term)}
                >
                  {term}
                </button>
              )
            )}
          </div>
        )}

        {/* Results */}
        <div className="search-results-area">
          {query.trim() && (
            <div className="search-results-count">
              Found {filtered.length} jewellery creation{filtered.length === 1 ? '' : 's'} for "{query}"
            </div>
          )}

          <div className="search-results-grid">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="search-item-card"
                onClick={() => handleSelect(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="search-item-thumb"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}collection-women.png`;
                  }}
                />
                <div className="search-item-info">
                  <span className="search-item-subcat">{item.subcategory} · {item.purity}</span>
                  <h4 className="search-item-title">{item.name}</h4>
                  <p className="search-item-metal">{item.metal}</p>
                  <span className="search-item-price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          {query.trim() && filtered.length === 0 && (
            <div className="search-no-results">
              <p>No exact pieces found matching "{query}".</p>
              <span>Explore our curated collections or speak directly with our team on Station Road, Parbhani.</span>
              <div className="no-res-links">
                <Link to="/category/gold" onClick={close} className="btn btn-outline">
                  Browse Gold Jewellery
                </Link>
                <Link to="/category/bridal" onClick={close} className="btn btn-gold">
                  Explore Bridal
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
