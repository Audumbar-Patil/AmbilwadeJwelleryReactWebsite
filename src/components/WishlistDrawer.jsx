import React from 'react';
import { useWishlist } from '../context/WishlistContext';

function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, removeFromWishlist, setQuickViewProduct } = useWishlist();

  if (!isWishlistOpen) return null;

  const close = () => setIsWishlistOpen(false);

  const wishlistText = encodeURIComponent(
    `Hello SSA Jewellers, I have curated a selection of favourite pieces on your website that I would like to inquire about or view at your Parbhani store:\n\n` +
      wishlist.map((item, idx) => `${idx + 1}. ${item.name} (${item.metal}, Price: ${item.price})`).join('\n') +
      `\n\nPlease let me know when I can schedule a private viewing.`
  );

  return (
    <div className="wishlist-overlay" onClick={close}>
      <div className="wishlist-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="wishlist-header">
          <div>
            <h3 className="wishlist-title">Your Curated Heirlooms</h3>
            <span className="wishlist-count">{wishlist.length} Saved Piece{wishlist.length === 1 ? '' : 's'}</span>
          </div>
          <button className="wishlist-close-btn" onClick={close} aria-label="Close Wishlist">
            ✕
          </button>
        </div>

        <div className="wishlist-body">
          {wishlist.length === 0 ? (
            <div className="wishlist-empty">
              <div className="empty-ornament">⚜</div>
              <h4>Your wishlist is empty</h4>
              <p>Explore our timeless gold, diamond, and bridal collections to save pieces for your private viewing.</p>
            </div>
          ) : (
            <div className="wishlist-items-list">
              {wishlist.map((item) => (
                <div key={item.id} className="wishlist-item-row">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="wishlist-item-img"
                    onClick={() => {
                      close();
                      setQuickViewProduct(item);
                    }}
                    onError={(e) => {
                      e.currentTarget.src = `${import.meta.env.BASE_URL}collection-women.png`;
                    }}
                  />
                  <div className="wishlist-item-details">
                    <h5
                      className="wishlist-item-title"
                      onClick={() => {
                        close();
                        setQuickViewProduct(item);
                      }}
                    >
                      {item.name}
                    </h5>
                    <span className="wishlist-item-metal">{item.metal}</span>
                    <span className="wishlist-item-price">{item.price}</span>
                  </div>
                  <button
                    className="wishlist-remove-btn"
                    onClick={() => removeFromWishlist(item.id)}
                    title="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {wishlist.length > 0 && (
          <div className="wishlist-footer">
            <a
              href={`https://wa.me/919422178900?text=${wishlistText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold wishlist-cta-btn"
            >
              Inquire Selected ({wishlist.length}) on WhatsApp
            </a>
            <p className="wishlist-note">Our jewellery specialists on Station Road, Parbhani will prepare these designs for your inspection.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WishlistDrawer;
