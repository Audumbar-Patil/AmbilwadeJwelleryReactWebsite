import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import LegacySection from '../components/LegacySection';
import PoemVideoSection from '../components/PoemVideoSection';
import GenerationsSection from '../components/GenerationsSection';
import ApproachSection from '../components/ApproachSection';
import ExploreGrid from '../components/ExploreGrid';
import ExquisiteSpotlight from '../components/ExquisiteSpotlight';
import RelationshipSection from '../components/RelationshipSection';

function Home() {
  useEffect(() => {
    // Reveal-on-scroll using IntersectionObserver
    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    targets.forEach((el) => io.observe(el));
    return () => targets.forEach((el) => io.unobserve(el));
  }, []);

  return (
    <main className="homepage-main">
      {/* 01. HOMEPAGE — Section 1: Hero */}
      <Hero />

      {/* Hallmark & Trust Ticker */}
      <Ticker />

      {/* 01. HOMEPAGE — Section 2: A Legacy That Lives On */}
      <LegacySection />

      {/* Poem + Video — Our Story */}
      <PoemVideoSection />

      {/* 01. HOMEPAGE — Section 3: Jewellery for Every Generation */}
      <GenerationsSection />

      {/* 01. HOMEPAGE — Section 4: Our Approach to Jewellery */}
      <ApproachSection />

      {/* 01. HOMEPAGE — Section 5: Explore Our Jewellery */}
      <ExploreGrid />

      {/* 01. HOMEPAGE — Section 6: The Exquisite Collection */}
      <ExquisiteSpotlight />

      {/* 01. HOMEPAGE — Section 8: A Relationship Across Generations */}
      <RelationshipSection />
    </main>
  );
}

export default Home;
