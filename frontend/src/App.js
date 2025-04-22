import React, { useState, useEffect } from 'react';
import './App.css';
import icon from './assets/Jinwoo.png';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [replyTone, setReplyTone] = useState('Professional');
  const [emailText, setEmailText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    // Set initial theme based on system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const handleGenerateSummary = async () => {
    if (!emailText.trim()) {
      setSummary('Please enter an email to summarize.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailText,
          tone: replyTone
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate summary');
      }

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      setSummary('Error generating summary. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(summary);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <div className="header">
          <div className="logo-container">
            <img src={icon} alt="icon" className="icon" />
            <h1>Email Summarizer</h1>
          </div>
          <button onClick={toggleTheme} className="toggle-btn">
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <div className="input-section">
          <select
            className="tone-dropdown"
            value={replyTone}
            onChange={(e) => setReplyTone(e.target.value)}
          >
            <option value="Professional">Professional</option>
            <option value="Regular">Regular</option>
            <option value="Friendly">Friendly</option>
          </select>

          <div className="email-input-container">
            <textarea
              className="email-input"
              placeholder="Paste your email here..."
              value={emailText}
              onChange={(e) => {
                setEmailText(e.target.value);
                setCharCount(e.target.value.length);
              }}
            />
            <div className="char-count">{charCount} characters</div>
          </div>

          <button 
            className={`generate-btn ${isLoading ? 'loading' : ''}`}
            onClick={handleGenerateSummary}
            disabled={isLoading || !emailText.trim()}
          >
            {isLoading ? 'Generating...' : 'Generate Summary ✨'}
          </button>
        </div>

        {summary && (
          <div className="summary-box">
            <div className="summary-header">
              <h3>Summary</h3>
              <button 
                className="copy-btn"
                onClick={handleCopySummary}
                title="Copy to clipboard"
              >
                {showCopied ? '✓ Copied!' : '📋 Copy'}
              </button>
            </div>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
