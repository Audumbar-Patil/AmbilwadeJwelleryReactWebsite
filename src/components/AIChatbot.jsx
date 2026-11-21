import React, { useState } from 'react';

const dummyMessages = [
  {
    role: 'assistant',
    text: 'Namaste! Welcome to SSA Jewellers. I\'m your personal jewellery guide. How may I help you today?',
  },
  {
    role: 'user',
    text: 'I\'m looking for a bridal set for my daughter\'s wedding.',
  },
  {
    role: 'assistant',
    text: 'How wonderful! Congratulations on this joyful occasion. Our Bridal Trousseau collection features handcrafted 22K gold sets, Kolhapuri saaj, and diamond-accented mangalsutras — each piece made to become an heirloom. Would you prefer a traditional Maharashtrian style or a more contemporary look?',
  },
  {
    role: 'user',
    text: 'Traditional style, please.',
  },
  {
    role: 'assistant',
    text: 'Perfect choice. I\'d recommend our Rani Haar with matching Nath and Bangles set — a timeless ensemble rooted in Maharashtrian heritage. You may visit us at Station Road, Parbhani or book a private viewing consultation. Shall I guide you further?',
  },
];

function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        className="chatbot-fab"
        onClick={() => setOpen(!open)}
        aria-label="Open Jewellery Guide Chat"
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M12 7v.01M8 11h8" strokeLinecap="round" />
          </svg>
        )}
        {!open && <span className="chatbot-fab-label">Ask our Guide</span>}
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="chatbot-panel">
          {/* Panel Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <span className="chatbot-sparkle">✦</span>
              <div>
                <div className="chatbot-title">SSA Jewellers</div>
                <div className="chatbot-subtitle">Jewellery Guide · AI Powered</div>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {dummyMessages.map((msg, i) => (
              <div key={i} className={`chatbot-msg chatbot-msg--${msg.role}`}>
                {msg.role === 'assistant' && (
                  <span className="chatbot-avatar">✦</span>
                )}
                <div className="chatbot-bubble">{msg.text}</div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="chatbot-input-area">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Ask about our jewellery…"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button className="chatbot-send" aria-label="Send message">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
          <div className="chatbot-disclaimer">Powered by SSA Jewellers AI Guide · For demonstration</div>
        </div>
      )}
    </>
  );
}

export default AIChatbot;
