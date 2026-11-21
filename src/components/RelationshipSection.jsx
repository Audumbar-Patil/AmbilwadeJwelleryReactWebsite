import React from 'react';
import { Link } from 'react-router-dom';

function RelationshipSection() {
  return (
    <section className="relationship-section" id="relationship">
      <div className="relationship-card reveal">
        <div className="section-eyebrow light">A Familiar Name. A New Beginning.</div>
        <h2 className="relationship-heading">Perhaps your family already knows us.</h2>

        <div className="ornament-line light">
          <div className="ornament-diamond" />
        </div>

        <div className="relationship-passages">
          <p>Your grandmother may have visited us. Your parents may have chosen something special here. Today, your story may begin with us.</p>
        </div>

        <div className="relationship-gold-banner">
          <p>
            "Some relationships begin with a purchase.
            <br />
            <strong>The finest ones last for generations.</strong>"
          </p>
        </div>

        <div className="relationship-action">
          <Link to="/contact" className="btn btn-gold">
            Visit Our Store
          </Link>
          <Link to="/story" className="btn btn-outline">
            Our Heritage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RelationshipSection;
