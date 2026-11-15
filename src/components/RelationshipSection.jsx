import React from 'react';
import { Link } from 'react-router-dom';

function RelationshipSection() {
  return (
    <section className="relationship-section" id="relationship">
      <div className="relationship-card reveal">
        <div className="section-eyebrow light">A Relationship Across Generations</div>
        <h2 className="relationship-heading">Perhaps your family already knows us.</h2>

        <div className="ornament-line light">
          <div className="ornament-diamond" />
        </div>

        <div className="relationship-passages">
          <p>Perhaps your grandmother once walked through our doors.</p>
          <p>
            Perhaps your mother came to us when she was choosing something precious for herself
            or someone she loved.
          </p>
          <p>And perhaps today, you are discovering SSA Jewellers for the first time.</p>
        </div>

        <p className="relationship-reflection">
          Every family has its own story. We are honoured when ours becomes a small part of it.
          Since 1893, relationships have been at the heart of our journey. They remind us that
          trust is not a single moment of reassurance. It is something built through years of
          consistency, care, and understanding.
        </p>

        <div className="relationship-gold-banner">
          <p>
            "Some relationships begin with a purchase.
            <br />
            <strong>The most meaningful ones become part of a family’s history.</strong>"
          </p>
        </div>

        <div className="relationship-action">
          <Link to="/contact" className="btn btn-gold">
            Visit Our Parbhani Store
          </Link>
          <Link to="/story" className="btn btn-outline">
            Read Our 1893 Heritage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RelationshipSection;
