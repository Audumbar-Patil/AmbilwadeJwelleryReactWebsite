import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { BRAND_INFO } from '../data/jewelleryData';

function ProductQuickView() {
  const { quickViewProduct, setQuickViewProduct, toggleWishlist, isInWishlist } = useWishlist();

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const wishlisted = isInWishlist(product.id);

  const close = () => setQuickViewProduct(null);

  const whatsappMessage = encodeURIComponent(
    `Hello SSA Jewellers, I am interested in inquiring about the "${product.name}" (${product.metal}, Price: ${product.price}) from your website. Could you please share more details and availability for a viewing?`
  );

  return (
    <div className="quickview-overlay" onClick={close}>
      <div className="quickview-modal" onClick={(e) => e.stopPropagation()}>
        <button className="quickview-close-btn" onClick={close} aria-label="Close modal">
          ×
        </button>

        <div className="quickview-grid">
          {/* Image presentation */}
          <div className="quickview-media">
            <img
              src={product.image}
              alt={product.name}
              className="quickview-img"
              onError={(e) => {
                e.currentTarget.src = `${import.meta.env.BASE_URL}collection-women.png`;
              }}
            />
            <div className="quickview-badge-bar">
              <span className="purity-tag">{product.purity} Gold & Gems</span>
              <span className="cert-tag">✓ 100% Certified Authentic</span>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="quickview-content">
            <div className="quickview-eyebrow">
              <span>{BRAND_INFO.shortName} Atelier · Est. 1893</span>
              <span className="dot-divider">•</span>
              <span>{product.subcategory}</span>
            </div>

            <h2 className="quickview-title">{product.name}</h2>
            <div className="quickview-price-row">
              <span className="quickview-price">{product.price}</span>
              <span className="quickview-tax">Inclusive of all taxes & making charges</span>
            </div>

            <p className="quickview-desc">{product.description}</p>

            {/* Technical Specifications */}
            <div className="quickview-specs-table">
              <div className="spec-row">
                <span className="spec-name">Metal Purity</span>
                <span className="spec-val">{product.metal}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Gross / Net Weight</span>
                <span className="spec-val">{product.weight}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Hallmarking</span>
                <span className="spec-val">{product.hallmark}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Boutique Origin</span>
                <span className="spec-val">Station Road, Parbhani, Maharashtra</span>
              </div>
            </div>

            {/* Actions */}
            <div className="quickview-actions">
              <a
                href={`https://wa.me/919422178900?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold quickview-wa-btn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                Inquire on WhatsApp
              </a>

              <button
                className={`btn btn-outline quickview-wish-btn ${wishlisted ? 'saved' : ''}`}
                onClick={() => toggleWishlist(product)}
              >
                {wishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

            <div className="quickview-guarantee">
              <div className="guarantee-item">
                <span className="g-icon">⚜</span>
                <span>BIS Hallmarked Purity Guarantee</span>
              </div>
              <div className="guarantee-item">
                <span className="g-icon">⚖</span>
                <span>Accurate Electronic Weighing Since 1893</span>
              </div>
              <div className="guarantee-item">
                <span className="g-icon">🏛</span>
                <span>Private Viewing at Parbhani Flagship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductQuickView;
