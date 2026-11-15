import React from 'react';
import { useWishlist } from '../context/WishlistContext';

function ProductCard({ product, onQuickView }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="luxury-product-card">
      <div className="luxury-card-media">
        <img
          src={product.image}
          alt={product.name}
          className="luxury-card-img"
          loading="lazy"
          onError={(e) => {
            // fallback placeholder if remote image fails
            e.currentTarget.src = `${import.meta.env.BASE_URL}collection-women.png`;
          }}
        />

        {/* Hallmark / purity badge */}
        <span className="luxury-hallmark-badge">{product.purity}</span>

        {/* Wishlist toggle */}
        <button
          className={`luxury-wishlist-btn ${wishlisted ? 'active' : ''}`}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
        >
          <svg viewBox="0 0 24 24" fill={wishlisted ? '#BF7E6A' : 'none'} stroke={wishlisted ? '#BF7E6A' : '#5E3E34'}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Quick View Button overlay */}
        <div className="luxury-card-hover-action">
          <button
            className="luxury-quickview-btn"
            onClick={() => onQuickView && onQuickView(product)}
          >
            Quick View · Details
          </button>
        </div>
      </div>

      <div className="luxury-card-body" onClick={() => onQuickView && onQuickView(product)}>
        <span className="luxury-card-category">{product.subcategory}</span>
        <h3 className="luxury-card-title">{product.name}</h3>
        <p className="luxury-card-metal">{product.metal} · {product.weight}</p>
        <div className="luxury-card-footer">
          <span className="luxury-card-price">{product.price}</span>
          <span className="luxury-card-hallmark-label">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
              <path d="M8 0L9.8 5.5H15.6L10.9 8.9L12.7 14.4L8 11L3.3 14.4L5.1 8.9L0.4 5.5H6.2L8 0Z" />
            </svg>
            BIS Certified
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
