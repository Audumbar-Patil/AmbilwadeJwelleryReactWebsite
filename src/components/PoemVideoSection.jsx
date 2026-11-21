import React from 'react';

const poemLines = [
  'There she goes, carrying a story of her own,',
  'In every heirloom, a little of home.',
  'Of promises kept, of generations gone by,',
  'Of moments that words could never define.',
  'For jewellery is more than gold or silver,',
  'It is the woman she chooses to remember.',
  'And with every generation that walks through our doors,',
  'We learn a little more than we knew before.',
  'For some things are made to be treasured,',
  'And some trusts are built to last forever.',
];

function PoemVideoSection() {
  return (
    <section className="poem-video-section">
      <div className="poem-video-grid">
        {/* Video Side */}
        <div className="poem-video-side">
          <video
            src={`${import.meta.env.BASE_URL}video/poem_vid.mp4`}
            autoPlay
            muted
            loop
            playsInline
            className="poem-video"
          />
        </div>

        {/* Poem Side */}
        <div className="poem-text-side">
          <div className="section-eyebrow">A Legacy in Words</div>
          <h3 className="poem-title">A Legacy of Trust</h3>
          <div className="ornament-line" style={{ justifyContent: 'flex-start', margin: '14px 0 22px' }}>
            <div className="ornament-diamond" />
          </div>
          <div className="poem-lines">
            {poemLines.map((line, i) => (
              <p key={i} className="poem-line">{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PoemVideoSection;
