import { Link } from 'react-router-dom';

function CtaBand() {
  return (
    <section className="cta-section" id="visit">
      <span className="cta-ornament">
        "Fine jewellery is not an expense. It is an inheritance."
      </span>

      <div className="ornament-line reveal">
        <div className="ornament-diamond" />
      </div>

      <h2 className="reveal">
        Visit the bench in Solapur,<br />or begin a piece from anywhere.
      </h2>

      <div className="cta-actions reveal">
        <Link to="#" className="btn btn-gold">
          Book a Private Viewing
        </Link>
        <Link to="/category/women" className="btn btn-outline">
          Browse Collections
        </Link>
      </div>
    </section>
  );
}

export default CtaBand;
