import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../data/jewelleryData';

function Footer() {
  return (
    <footer className="luxury-footer">
      <div className="footer-top">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <span className="brand-crest-footer">⚜</span>
          <span className="footer-brand-title">{BRAND_INFO.shortName}</span>
          <span className="footer-brand-subtitle">{BRAND_INFO.name}</span>
          <span className="footer-brand-est">Parbhani, Maharashtra · Established 1893</span>
          <p className="footer-brand-desc">
            Since 1893, guided by the belief that every relationship deserves to be built on honesty.
            Bringing together the knowledge inherited from the past and a contemporary understanding of design.
          </p>
          <div className="footer-cert-tags">
            <span className="cert-badge">100% BIS 916 Hallmarked</span>
            <span className="cert-badge">Natural Certified Diamonds</span>
            <span className="cert-badge">Four Generations of Trust</span>
          </div>
        </div>

        {/* Collections */}
        <div className="footer-col">
          <h5>Collections</h5>
          <ul>
            <li><Link to="/category/gold">Gold Jewellery</Link></li>
            <li><Link to="/category/diamond">Diamond Jewellery</Link></li>
            <li><Link to="/category/bridal">Bridal Trousseau</Link></li>
            <li><Link to="/category/women">Women’s Jewellery</Link></li>
            <li><Link to="/category/men">Men’s Jewellery</Link></li>
            <li><Link to="/category/children">Children’s Jewellery</Link></li>
            <li><Link to="/category/exquisite" className="emerald-accent-link">The Exquisite Collection</Link></li>
            <li><Link to="/category/gifting">Gifting &amp; Pure Gold Coins</Link></li>
          </ul>
        </div>

        {/* Knowledge & Heritage */}
        <div className="footer-col">
          <h5>Heritage &amp; Guidance</h5>
          <ul>
            <li><Link to="/story">Our Story (Since 1893)</Link></li>
            <li><Link to="/education">Gold Purity &amp; Karats Guide</Link></li>
            <li><Link to="/education">BIS Hallmarking &amp; HUID</Link></li>
            <li><Link to="/education">Understanding the 4Cs of Diamonds</Link></li>
            <li><Link to="/education">Questions Worth Asking</Link></li>
            <li><Link to="/contact">Plan Your Private Viewing</Link></li>
          </ul>
        </div>

        {/* Boutique Location & Hours */}
        <div className="footer-col">
          <h5>Parbhani Flagship</h5>
          <address className="footer-address">
            <p className="loc-name"><strong>SSA Jewellers</strong></p>
            <p>Station Road, Parbhani</p>
            <p>Maharashtra 431401, India</p>
            <p className="loc-timing"><strong>Store Hours:</strong></p>
            <p>Mon – Sat: 10:30 AM – 8:30 PM</p>
            <p>Sunday: By Prior Appointment</p>
          </address>
          <div className="footer-contact-actions">
            <a
              href="https://wa.me/919422178900"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-btn-wa"
            >
              WhatsApp: +91 94221 78900
            </a>
            <a href="tel:+912452221893" className="footer-tel-link">
              Phone: (02452) 221893
            </a>
          </div>
        </div>
      </div>

      <div className="footer-middle-quote">
        <div className="ornament-line light">
          <div className="ornament-diamond" />
        </div>
        <p className="footer-quote-text">
          "A legacy is not simply something we inherit. It is something we choose to carry forward."
        </p>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sachin Sudhakar Ambilwade Jewellers. All rights reserved.</span>
        <span>Station Road, Parbhani, Maharashtra · Est. 1893</span>
      </div>
    </footer>
  );
}

export default Footer;
