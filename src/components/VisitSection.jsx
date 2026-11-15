import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../data/jewelleryData';

function VisitSection() {
  return (
    <section className="visit-section" id="visit-us">
      <div className="visit-container">
        <div className="visit-grid">
          {/* Copy Side */}
          <div className="visit-copy reveal-left">
            <div className="section-eyebrow">Visit SSA Jewellers</div>
            <h2 className="visit-title">Some things are best discovered in person.</h2>

            <div className="ornament-line" style={{ justifyContent: 'flex-start', margin: '20px 0' }}>
              <div className="ornament-diamond" />
            </div>

            <p className="visit-text">
              The character of a piece of jewellery is not always captured in a photograph.
              Sometimes, it is in the way it catches the light, the detail you notice up close, or
              the feeling you have when you try it on.
            </p>

            <p className="visit-text">
              We invite you to explore our collections, discover different expressions of jewellery,
              and speak with our team about what you are looking for.
            </p>

            <p className="visit-text">
              Whether you arrive with a clear idea or simply wish to explore, we believe the
              experience should begin with a conversation.
            </p>

            <div className="visit-store-card">
              <span className="store-badge">Flagship Boutique</span>
              <h4 className="store-name">{BRAND_INFO.shortName}</h4>
              <p className="store-address">
                Station Road, Parbhani, Maharashtra – 431401
              </p>
              <div className="store-hours">
                <span><strong>Hours:</strong> Mon – Sat: 10:30 AM – 8:30 PM</span>
                <span>Sunday: By Prior Appointment</span>
              </div>
              <div className="store-direct-contacts">
                <a href={`tel:${BRAND_INFO.phone}`} className="phone-link">
                  📞 {BRAND_INFO.phone}
                </a>
                <a
                  href="https://wa.me/919422178900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-link"
                >
                  💬 WhatsApp Direct Connect
                </a>
              </div>
            </div>

            <div className="visit-cta-row">
              <Link to="/contact" className="btn btn-gold">
                Plan Your Visit
              </Link>
              <Link to="/contact#enquiry-form" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Visual Showcase Side */}
          <div className="visit-visual reveal-right">
            <div className="visit-visual-frame">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
                alt="SSA Jewellers Flagship Boutique on Station Road, Parbhani"
                className="visit-visual-img"
              />
              <div className="visit-badge-overlay">
                <span className="est-year">1893</span>
                <span className="est-txt">Station Road, Parbhani</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitSection;
