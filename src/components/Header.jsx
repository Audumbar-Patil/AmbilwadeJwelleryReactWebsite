import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { BRAND_INFO } from '../data/jewelleryData';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { wishlist, setIsWishlistOpen, setIsSearchOpen } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="top-luxury-ribbon">
        <div className="ribbon-content">
          <span>Est. 1893 · Station Road, Parbhani</span>
          <span className="ribbon-sep">✦</span>
          <span>100% BIS 916 Hallmarked &amp; IGI Certified</span>
          <span className="ribbon-sep">✦</span>
          <span>Private Viewing Consultations Available</span>
        </div>
      </div>

      <header className={`luxury-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-primary-row">
          {/* Left Actions — Search & Wishlist */}
          <div className="nav-action-left">
            <button
              className="luxury-icon-btn"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search jewelry collections"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" />
              </svg>
              <span className="icon-label-desktop">Search</span>
            </button>

            <button
              className="luxury-icon-btn wishlist-trigger-btn"
              onClick={() => setIsWishlistOpen(true)}
              aria-label="View saved jewelry"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span className="icon-label-desktop">Saved</span>
              {wishlist.length > 0 && <span className="wishlist-pill">{wishlist.length}</span>}
            </button>
          </div>

          {/* Center Brand Identity */}
          <Link to="/" className="luxury-brand-center">
            <span className="brand-crest">⚜</span>
            <span className="brand-title">SACHIN SUDHAKAR AMBILWADE</span>
            <span className="brand-subtitle">SSA JEWELLERS · PARBHANI · EST. 1893</span>
          </Link>

          {/* Right Actions — Plan Visit & Hamburger */}
          <div className="nav-action-right">
            <Link to="/contact" className="btn-appointment-header">
              Plan Your Visit
            </Link>

            <button
              className={`nav-toggle ${menuOpen ? 'open' : ''}`}
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Secondary Editorial Category Navigation */}
        <nav className="header-secondary-row">
          <ul className="luxury-nav-list">
            <li>
              <Link to="/story" className={location.pathname === '/story' ? 'active' : ''}>
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/category/gold" className={location.pathname === '/category/gold' ? 'active' : ''}>
                Gold
              </Link>
            </li>
            <li>
              <Link to="/category/diamond" className={location.pathname === '/category/diamond' ? 'active' : ''}>
                Diamond
              </Link>
            </li>
            <li>
              <Link to="/category/bridal" className={location.pathname === '/category/bridal' ? 'active' : ''}>
                Bridal
              </Link>
            </li>
            <li>
              <Link to="/category/women" className={location.pathname === '/category/women' ? 'active' : ''}>
                Women
              </Link>
            </li>
            <li>
              <Link to="/category/men" className={location.pathname === '/category/men' ? 'active' : ''}>
                Men
              </Link>
            </li>
            <li>
              <Link to="/category/children" className={location.pathname === '/category/children' ? 'active' : ''}>
                Children
              </Link>
            </li>
            <li className="nav-item-exquisite">
              <Link
                to="/category/exquisite"
                className={location.pathname === '/category/exquisite' ? 'active' : ''}
              >
                <span className="emerald-gem-dot" />
                The Exquisite Collection
              </Link>
            </li>
            <li>
              <Link to="/category/gifting" className={location.pathname === '/category/gifting' ? 'active' : ''}>
                Gifting
              </Link>
            </li>
            <li>
              <Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>
                Jewellery Education
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Luxury Drawer */}
      <div className={`luxury-mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-brand">{BRAND_INFO.shortName}</span>
          <button className="mobile-drawer-close" onClick={() => setMenuOpen(false)}>
            ✕
          </button>
        </div>

        <div className="mobile-nav-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Homepage
          </Link>
          <Link to="/story" onClick={() => setMenuOpen(false)}>
            Our Story (1893 Legacy)
          </Link>
          <Link to="/category/gold" onClick={() => setMenuOpen(false)}>
            Gold Jewellery
          </Link>
          <Link to="/category/diamond" onClick={() => setMenuOpen(false)}>
            Diamond Jewellery
          </Link>
          <Link to="/category/bridal" onClick={() => setMenuOpen(false)}>
            Bridal Trousseau
          </Link>
          <Link to="/category/women" onClick={() => setMenuOpen(false)}>
            Women’s Jewellery
          </Link>
          <Link to="/category/men" onClick={() => setMenuOpen(false)}>
            Men’s Jewellery
          </Link>
          <Link to="/category/children" onClick={() => setMenuOpen(false)}>
            Children’s Jewellery
          </Link>
          <Link to="/category/exquisite" className="mobile-emerald-link" onClick={() => setMenuOpen(false)}>
            ✦ The Exquisite Collection
          </Link>
          <Link to="/category/gifting" onClick={() => setMenuOpen(false)}>
            Gifting &amp; Gold Coins
          </Link>
          <Link to="/education" onClick={() => setMenuOpen(false)}>
            Jewellery Education &amp; Karats
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Visit Boutique / Contact
          </Link>
        </div>

        <div className="mobile-drawer-footer">
          <p className="mobile-store-loc">
            <strong>Station Road, Parbhani</strong>
            <br />
            Maharashtra, India · Est. 1893
          </p>
          <a
            href="https://wa.me/919422178900"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold mobile-wa-btn"
          >
            Connect on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
