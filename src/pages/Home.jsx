import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Collections from '../components/Collections';
import Heritage from '../components/Heritage';
import Craft from '../components/Craft';
import CtaBand from '../components/CtaBand';

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
      { threshold: 0.12 }
    );

    targets.forEach((el) => io.observe(el));
    return () => targets.forEach((el) => io.unobserve(el));
  }, []);

  return (
    <main>
      <Hero />
      <Ticker />
      <Collections />
      <Craft />
      <Heritage />
      <CtaBand />
    </main>
  );
}

export default Home;
