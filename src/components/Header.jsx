import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        {/* Left — Nav */}
        <nav>
          <ul className="nav-links">
            <li><Link to="/category/women">Women</Link></li>
            <li><Link to="/category/men">Men</Link></li>
            <li><Link to="/category/children">Children</Link></li>
            <li><Link to="/category/gifting">Gifting</Link></li>
          </ul>
        </nav>

        {/* Centre — Brand */}
        <Link to="/" className="nav-brand">
          <span className="brand-name">Ambilwade</span>
          <span className="brand-tagline">Jewellers · Est. 1893</span>
        </Link>

        {/* Right — Icons */}
        <div className="nav-actions">
          {/* Search */}
          <svg className="nav-icon" viewBox="0 0 24 24" aria-label="Search">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="22" y2="22" />
          </svg>
          {/* Account */}
          <svg className="nav-icon" viewBox="0 0 24 24" aria-label="Account">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>

          {/* Hamburger */}
          <button
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <Link to="/category/women" onClick={close}>Women</Link>
        <Link to="/category/men" onClick={close}>Men</Link>
        <Link to="/category/children" onClick={close}>Children</Link>
        <Link to="/category/gifting" onClick={close}>Gifting &amp; Heirloom</Link>
      </div>
    </>
  );
}

export default Header;
