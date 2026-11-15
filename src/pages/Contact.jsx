import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../data/jewelleryData';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    category: 'Gold Jewellery',
    occasion: '',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappInquiryText = encodeURIComponent(
    `Hello SSA Jewellers, I would like to enquire / plan a store visit:\n\n` +
      `*Name:* ${formData.fullName || 'Guest'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Category of Interest:* ${formData.category}\n` +
      `*Occasion:* ${formData.occasion || 'General Enquiry'}\n` +
      `*Preferred Date:* ${formData.preferredDate || 'Flexible'}\n` +
      `*Message:* ${formData.message || 'I would like to explore your collections.'}`
  );

  return (
    <div className="contact-page-container">
      {/* 12. CONTACT US — Hero */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="bc-sep">/</span>
            <span className="bc-current">Contact Us</span>
          </div>

          <span className="contact-eyebrow">Station Road, Parbhani · Established 1893</span>
          <h1 className="contact-title">
            We would be pleased<br />
            <em>to welcome you.</em>
          </h1>
          <p className="contact-lead">
            Whether you are searching for a particular design, exploring jewellery for an upcoming
            occasion, or simply discovering SSA Jewellers for the first time, we invite you to begin
            with a conversation.
          </p>
          <p className="contact-sub">
            Our team can help you explore available collections, understand your options, and plan
            your visit.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="contact-main-section">
        <div className="contact-layout-grid">
          {/* Left Column: Visit Our Store Information */}
          <div className="contact-info-panel">
            <div className="section-eyebrow">Visit Our Store</div>
            <h2 className="info-panel-heading">{BRAND_INFO.shortName} Flagship</h2>
            <div className="ornament-line" style={{ justifyContent: 'flex-start', margin: '18px 0' }}>
              <div className="ornament-diamond" />
            </div>

            <p className="boutique-intro">
              Located on historic Station Road in Parbhani, our boutique offers a private, serene
              setting to inspect generational heirlooms, discuss custom commissions, and verify
              hallmarking standards.
            </p>

            <div className="contact-details-box">
              <div className="contact-row">
                <span className="c-icon">🏛</span>
                <div>
                  <strong>Address</strong>
                  <p>{BRAND_INFO.addressLine1}</p>
                  <p>{BRAND_INFO.addressLine2}</p>
                </div>
              </div>

              <div className="contact-row">
                <span className="c-icon">📞</span>
                <div>
                  <strong>Direct Telephones</strong>
                  <p><a href={`tel:${BRAND_INFO.phone}`}>{BRAND_INFO.phone} (Mobile &amp; WhatsApp)</a></p>
                  <p><a href={`tel:${BRAND_INFO.landline}`}>{BRAND_INFO.landline} (Landline)</a></p>
                </div>
              </div>

              <div className="contact-row">
                <span className="c-icon">✉</span>
                <div>
                  <strong>Electronic Mail</strong>
                  <p><a href={`mailto:${BRAND_INFO.email}`}>{BRAND_INFO.email}</a></p>
                </div>
              </div>

              <div className="contact-row">
                <span className="c-icon">⏰</span>
                <div>
                  <strong>Boutique Hours</strong>
                  <p>Monday – Saturday: 10:30 AM – 8:30 PM</p>
                  <p>Sunday: By Prior Appointment</p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="contact-direct-actions">
              <a
                href={`https://wa.me/919422178900?text=${encodeURIComponent('Hello SSA Jewellers, I would like to plan a visit to your Parbhani store.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-full"
              >
                Connect on WhatsApp Direct
              </a>
              <a
                href="https://maps.google.com/?q=Station+Road+Parbhani+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-full"
              >
                Get Directions to Store
              </a>
            </div>

            {/* Trust Assurances */}
            <div className="store-perks-box">
              <div className="perk-item">
                <span>✦</span> Private Bridal &amp; Family Viewing Lounge
              </div>
              <div className="perk-item">
                <span>✦</span> Precision Electronic Karat &amp; Weight Verification
              </div>
              <div className="perk-item">
                <span>✦</span> Certified Gemological Guidance
              </div>
            </div>
          </div>

          {/* Right Column: Tell Us What You Are Looking For (Enquiry Form) */}
          <div className="contact-form-panel" id="enquiry-form">
            <div className="section-eyebrow">Plan Your Visit</div>
            <h2 className="form-panel-heading">Tell Us What You Are Looking For</h2>
            <div className="ornament-line" style={{ justifyContent: 'flex-start', margin: '18px 0' }}>
              <div className="ornament-diamond" />
            </div>
            <p className="form-lead">
              Whether you have a particular design in mind or would like guidance exploring your
              options, we welcome your enquiry.
            </p>

            {submitted ? (
              <div className="form-success-message">
                <div className="success-crest">⚜</div>
                <h3>Thank you, {formData.fullName}.</h3>
                <p>
                  Your enquiry has been received by our boutique team on Station Road, Parbhani.
                  We will contact you shortly to confirm your consultation.
                </p>
                <div className="success-actions">
                  <a
                    href={`https://wa.me/919422178900?text=${whatsappInquiryText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                  >
                    Send Instant Copy to WhatsApp
                  </a>
                  <button
                    className="btn btn-outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="luxury-enquiry-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">Email Address (Optional)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. radhika@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="category">Category of Interest *</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="Gold Jewellery">Gold Jewellery (22K / 24K)</option>
                      <option value="Diamond Jewellery">Diamond Jewellery (Certified 4Cs)</option>
                      <option value="Bridal Jewellery">Bridal Jewellery &amp; Trousseau</option>
                      <option value="Women’s Jewellery">Women’s Fine Jewellery</option>
                      <option value="Men’s Jewellery">Men’s Jewellery &amp; Kadas</option>
                      <option value="Children’s Jewellery">Children’s Keepsakes &amp; Balis</option>
                      <option value="The Exquisite Collection">The Exquisite Collection (High Jewellery)</option>
                      <option value="Gifting & Gold Coins">Gifting &amp; 24K Pure Gold Coins</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="occasion">Occasion (Optional)</label>
                    <input
                      type="text"
                      id="occasion"
                      name="occasion"
                      placeholder="e.g. Wedding, Anniversary, Milestone, Festive"
                      value={formData.occasion}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="preferredDate">Preferred Date of Visit (Optional)</label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us about the design, preferences, or questions you have..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn btn-gold form-submit-btn">
                    Send Enquiry
                  </button>
                  <span className="privacy-note">
                    🔒 Your details are kept completely private and confidential.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
