import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { BRAND_INFO } from '../data/jewelleryData';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navDropdownOpen, setNavDropdownOpen] = useState(false);
  const location = useLocation();
  const { wishlist, setIsWishlistOpen, setIsSearchOpen } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setNavDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.header-menu-container')) {
        setNavDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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
            <img src={`${import.meta.env.BASE_URL}logo-single.png`} alt="SSA Jewellers Logo" className="brand-logo" />
            <span className="brand-title">SACHIN SUDHAKAR AMBILWADE</span>
            <span className="brand-subtitle">SSA JEWELLERS · PARBHANI · EST. 1893</span>
          </Link>

          {/* Right Actions — Plan Visit, All Options Menu Dropdown & Mobile Hamburger */}
          <div className="nav-action-right">
            <Link to="/contact" className="btn-appointment-header">
              Plan Your Visit
            </Link>

            {/* Desktop / Global Dropdown Menu for All Options */}
            <div className="header-menu-container">
              <button
                className={`btn-menu-dropdown-trigger ${navDropdownOpen ? 'active' : ''}`}
                onClick={() => setNavDropdownOpen(!navDropdownOpen)}
                aria-label="Toggle explore navigation dropdown"
                aria-expanded={navDropdownOpen}
              >
                <span>Menu</span>
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  style={{ transform: navDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {navDropdownOpen && (
                <div className="header-all-dropdown-menu">
                  <div className="all-dropdown-header">
                    <span className="all-dropdown-eyebrow">Discover SSA Jewellers</span>
                    <button
                      className="all-dropdown-close"
                      onClick={() => setNavDropdownOpen(false)}
                      aria-label="Close menu"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="all-dropdown-columns">
                    <div className="all-dropdown-col">
                      <span className="all-dropdown-group-title">Heritage & Stories</span>
                      <Link to="/story" className="all-dropdown-link" onClick={() => setNavDropdownOpen(false)}>
                        Our Story (1893)
                      </Link>
                      <Link to="/education" className="all-dropdown-link" onClick={() => setNavDropdownOpen(false)}>
                        Jewellery Education
                      </Link>
                      <Link to="/contact" className="all-dropdown-link" onClick={() => setNavDropdownOpen(false)}>
                        Contact &amp; Flagship
                      </Link>
                    </div>

                    <div className="all-dropdown-col">
                      <span className="all-dropdown-group-title">Precious Metals & Gems</span>
                      <Link to="/category/gold" className="all-dropdown-link" onClick={() => setNavDropdownOpen(false)}>
                        Gold Jewellery
                      </Link>
                      <Link to="/category/diamond" className="all-dropdown-link" onClick={() => setNavDropdownOpen(false)}>
                        Diamond Jewellery
                      </Link>
                      <Link to="/category/bridal" className="all-dropdown-link" onClick={() => setNavDropdownOpen(false)}>
                        Bridal Trousseau
                      </Link>
                      <Link to="/category/exquisite" className="all-dropdown-link emerald-highlight" onClick={() => setNavDropdownOpen(false)}>
                        ✦ The Exquisite Collection
                      </Link>
                    </div>

                    <div className="all-dropdown-col">
                      <span className="all-dropdown-group-title">Wearers & Gifting</span>
                      <Link to="/category/women" className="all-dropdown-link" onClick={() => setNavDropdownOpen(false)}>
                        Women’s Jewellery
                      </Link>
                      <Link to="/category/men" className="all-dropdown-link" onClick={() => setNavDropdownOpen(false)}>
                        Men’s Jewellery
                      </Link>
                      <Link to="/category/children" className="all-dropdown-link" onClick={() => setNavDropdownOpen(false)}>
                        Children’s Jewellery
                      </Link>
                      <Link to="/category/gifting" className="all-dropdown-link" onClick={() => setNavDropdownOpen(false)}>
                        Gifting &amp; Gold Coins
                      </Link>
                    </div>
                  </div>
                  <div className="all-dropdown-footer">
                    <span>Parbhani · Maharashtra · Est. 1893</span>
                    <Link to="/contact" className="all-dropdown-appointment" onClick={() => setNavDropdownOpen(false)}>
                      Book Private Appointment →
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
