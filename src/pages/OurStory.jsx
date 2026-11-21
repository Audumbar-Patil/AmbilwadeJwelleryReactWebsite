import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../data/jewelleryData';
import PoemVideoSection from '../components/PoemVideoSection';

function OurStory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      year: '1893',
      title: 'The Foundation in Parbhani',
      desc: 'Our great-great-grandfather established a traditional goldsmithing business in Parbhani, founded upon honesty in dealings and revered craft.',
    },
    {
      year: '1930s',
      title: 'Preserved Weighing Balances & Ledgers',
      desc: 'Precision manual brass weighing scales and handwritten customer records were established — historical objects we continue to preserve with reverence.',
    },
    {
      year: '1970s',
      title: 'Passing Down Generational Mastery',
      desc: 'The second and third generations advanced gold purity standards, introducing intricate Maharashtrian temple ornaments and bridal heirlooms.',
    },
    {
      year: '2000s',
      title: 'Contemporary Design & BIS Hallmarking',
      desc: 'Modern certified natural diamond jewellery and refined 18K/22K designs were introduced, harmonizing heritage craft with modern life.',
    },
    {
      year: 'Today',
      title: 'Atelier SSA & The Exquisite Collection',
      desc: 'Under Sachin Sudhakar Ambilwade, SSA Jewellers continues on Station Road, Parbhani, welcoming 4th generation families with timeless trust.',
    },
  ];

  return (
    <div className="story-page-wrapper">
      {/* 02. OUR STORY — Hero */}
      <section className="story-hero">
        <div className="story-hero-bg">
          <img
            src={`${import.meta.env.BASE_URL}heritage.png`}
            alt="Historical goldsmith bench, SSA Jewellers 1893"
          />
        </div>
        <div className="story-hero-overlay" />
        <div className="story-hero-content">
          <span className="story-eyebrow">SSA Jewellers · Established 1893 · Parbhani</span>
          <h1 className="story-main-title">
            A legacy is not measured only in years.<br />
            <em>It is measured in what endures.</em>
          </h1>
          <p className="story-hero-lead">
            Established in 1893, SSA Jewellers has grown through generations, guided by the
            belief that the most valuable relationships are built on trust.
          </p>
          <p className="story-hero-sub">
            Our story is one of continuity and change: a heritage that remains deeply rooted in its
            values while continuing to evolve with the people and times around it.
          </p>
        </div>
      </section>

      {/* Chapter 1: Where Our Story Begins */}
      <section className="story-chapter">
        <div className="chapter-grid">
          <div className="chapter-copy">
            <span className="chapter-tag">Chapter 01 · The Beginning</span>
            <h2 className="chapter-heading">Where Our Story Begins</h2>
            <div className="ornament-line" style={{ justifyContent: 'flex-start', margin: '18px 0' }}>
              <div className="ornament-diamond" />
            </div>
            <p>Every enduring institution begins somewhere.</p>
            <p>
              For SSA Jewellers, that beginning was in <strong>1893</strong>, when our
              great-great-grandfather established a traditional jewellery business in Parbhani.
            </p>
            <p>
              What followed was more than the continuation of a family enterprise. It was the
              gradual building of relationships, knowledge, and a reputation carried forward from
              one generation to the next.
            </p>
            <p>
              Over the years, the business evolved. Tastes changed, designs developed, and new
              possibilities emerged. Yet the principles that mattered most remained:
            </p>
            <ul className="story-values-list">
              <li>
                <strong>Honesty in our dealings:</strong> Clear purity, fair weights, and complete transparency.
              </li>
              <li>
                <strong>Care in our guidance:</strong> Assisting each family to make decisions that feel right.
              </li>
              <li>
                <strong>Respect for the value entrusted to us:</strong> Honoring the hard work and love behind every purchase.
              </li>
            </ul>
          </div>

          <div className="chapter-visual">
            <div className="chapter-image-box">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
                alt="Heirloom jewellery craftsmanship"
              />
              <span className="chapter-caption">Traditional Gold Nakshi Artistry · Station Road, Parbhani</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: More Than Objects From the Past */}
      <section className="story-chapter dark-tint">
        <div className="chapter-grid reverse">
          <div className="chapter-visual">
            <div className="chapter-image-box">
              <img
                src={`${import.meta.env.BASE_URL}heritage.png`}
                alt="Traditional weighing scales preserved at SSA Jewellers"
              />
              <span className="chapter-caption">Archival Brass Scales &amp; Workbench Preserved Since 1893</span>
            </div>
          </div>

          <div className="chapter-copy">
            <span className="chapter-tag">Chapter 02 · Archival Memory</span>
            <h2 className="chapter-heading">More Than Objects From the Past</h2>
            <div className="ornament-line" style={{ justifyContent: 'flex-start', margin: '18px 0' }}>
              <div className="ornament-diamond" />
            </div>
            <p>Some pieces of history are preserved in photographs and written records.</p>
            <p><strong>Others remain tangible.</strong></p>
            <p>
              Traditional weighing scales and machinery from earlier years are among the historical
              objects preserved by SSA Jewellers. They offer a connection to the people,
              practices, and working traditions that shaped the business.
            </p>
            <p>
              Their significance lies not simply in their age, but in what they represent: a reminder
              of how the business began and the generations of knowledge that have brought it to the
              present.
            </p>
            <p>
              We look upon these objects with respect, not as reminders of a world we wish to return
              to, but as links to a heritage we continue to carry forward.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Milestones Timeline */}
      <section className="milestones-section">
        <div className="milestones-header">
          <div className="section-eyebrow">Our Milestones</div>
          <h2 className="section-title">A Journey Spanning Over 130 Years</h2>
          <p className="section-desc">
            Tracing our continuous journey of craftsmanship and trust from 1893 to the modern day.
          </p>
        </div>

        <div className="milestones-timeline">
          {milestones.map((item, idx) => (
            <div key={item.year} className="milestone-node">
              <div className="milestone-year-pill">{item.year}</div>
              <div className="milestone-content">
                <h4 className="milestone-title">{item.title}</h4>
                <p className="milestone-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter 3: A Heritage That Continues to Evolve */}
      <section className="story-chapter">
        <div className="chapter-grid">
          <div className="chapter-copy">
            <span className="chapter-tag">Chapter 03 · Evolution</span>
            <h2 className="chapter-heading">A Heritage That Continues to Evolve</h2>
            <div className="ornament-line" style={{ justifyContent: 'flex-start', margin: '18px 0' }}>
              <div className="ornament-diamond" />
            </div>
            <p>To honour a legacy is not to leave it unchanged.</p>
            <p>
              Every generation encounters a different world. Its tastes, aspirations, and
              understanding of beauty evolve. A jewellery house that endures must be able to
              recognise those changes without losing sight of its own values.
            </p>
            <p>
              At SSA Jewellers, our approach brings together traditional sensibilities and
              contemporary design.
            </p>
            <p>
              We value the familiarity of heritage jewellery, the richness of Indian adornment, and
              the individuality expressed through modern pieces. We believe these perspectives can
              exist together, each bringing something meaningful to the other.
            </p>
            <blockquote className="chapter-pullquote">
              "Our aim is not to choose between tradition and modernity.
              <br />
              <strong>It is to understand how they can enrich one another.</strong>"
            </blockquote>
          </div>

          <div className="chapter-visual">
            <div className="chapter-image-box">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
                alt="Contemporary and heritage fusion jewellery"
              />
              <span className="chapter-caption">Harmonizing Heritage Craft with Contemporary Precision</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4 & 5: Trust Across Generations & Continuing Story */}
      <section className="story-chapter dark-tint">        <div className="story-final-block">
          <div className="section-eyebrow light">Generational Trust</div>
          <h2 className="story-final-heading light">
            Trust, Passed From One Generation to the Next
          </h2>
          <div className="ornament-line light">
            <div className="ornament-diamond" />
          </div>

          <div className="story-final-paragraphs">
            <p>
              Trust is often spoken about as a quality a business possesses. We believe it is
              something a business must continually earn.
            </p>
            <p>
              For us, this means helping customers understand what they are buying, explaining the
              details that matter, and respecting the budget and preferences with which they come
              to us. It means recognising that a jewellery purchase can carry financial significance,
              emotional importance, or both.
            </p>
            <p>
              And it means understanding that the relationship does not end when a customer leaves
              the store.
            </p>
            <p className="story-highlight-quote">
              When a family returns because someone they love trusted us before them, we recognise
              the responsibility that comes with that decision. It is a responsibility we intend to
              honour.
            </p>
            <p>
              SSA Jewellers began its journey in 1893. Today, that history informs the way we think
              about design, service, and the future of the business. The world around us will
              continue to change. New generations will bring new perspectives.
            </p>
            <p className="story-legacy-affirmation">
              And we hope that, many years from now, someone will walk through our doors because a
              person they love once told them they could trust us.
            </p>
            <h3 className="story-legacy-callout">That is the legacy we want to leave behind.</h3>
          </div>

          <div className="story-final-actions">
            <Link to="/category/gold" className="btn btn-gold">
              Explore Our Jewellery
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Plan Your Visit to Station Road, Parbhani
            </Link>
          </div>
        </div>
      </section>

      {/* Poem + Video Section */}
      <PoemVideoSection />
    </div>
  );
}

export default OurStory;
