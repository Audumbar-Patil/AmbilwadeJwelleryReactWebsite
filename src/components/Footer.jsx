import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        {/* Brand col */}
        <div className="footer-brand">
          <span className="brand-name">Ambilwade</span>
          <span className="brand-tagline">Jewellers · Est. 1893</span>
          <p>
            Fine jewellery from Solapur, Maharashtra, since 1893. Crafted
            to be worn, repaired, and passed on through generations.
          </p>
          <div className="social-row">
            {/* Instagram */}
            <a href="#" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="#" className="social-link" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Collections */}
        <div className="footer-col">
          <h5>Collections</h5>
          <ul>
            <li><Link to="/category/women">Women's Collection</Link></li>
            <li><Link to="/category/men">Men's Collection</Link></li>
            <li><Link to="/category/children">Children's Collection</Link></li>
            <li><Link to="/category/gifting">Gifting &amp; Heirloom</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><Link to="#">Bespoke Commissions</Link></li>
            <li><Link to="#">Repairs &amp; Re-polishing</Link></li>
            <li><Link to="#">Private Viewings</Link></li>
            <li><Link to="#">Hallmarking</Link></li>
          </ul>
        </div>

        {/* Visit */}
        <div className="footer-col">
          <h5>Visit Us</h5>
          <ul>
            <li>Ambilwade, Solapur</li>
            <li>Maharashtra, India</li>
            <li><Link to="#">Get Directions</Link></li>
            <li><Link to="#">+91 98765 43210</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sachin Sudhakar Ambilwade Jewellers. All rights reserved.</span>
        <span>Est. 1893 · Solapur, Maharashtra</span>
      </div>
    </footer>
  );
}

export default Footer;
