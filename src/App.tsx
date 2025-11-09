import { useState } from 'react'
import './App.css'

function App() {
  const [videoUrl, setVideoUrl] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('auto')

  const platforms = [
    { id: 'auto', name: 'Auto Detect', emoji: '🔍' },
    { id: 'youtube', name: 'YouTube', emoji: '▶️' },
    { id: 'instagram', name: 'Instagram', emoji: '📷' },
    { id: 'tiktok', name: 'TikTok', emoji: '🎵' },
    { id: 'facebook', name: 'Facebook', emoji: '👥' },
    { id: 'twitter', name: 'Twitter/X', emoji: '🐦' },
  ]

  const handleDownload = () => {
    if (!videoUrl.trim()) {
      alert('Please enter a video URL')
      return
    }
    // Note: This is a frontend demo. Actual downloading requires backend API integration
    alert('Download functionality requires backend API integration. This is a UI demo.')
  }

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Social Media</span>
            <br />
            Video Downloader
          </h1>
          <p className="hero-subtitle">
            Download videos from YouTube, Instagram, TikTok, Facebook, Twitter and more!
          </p>
        </div>
      </header>

      {/* Main Download Section */}
      <main className="main-content">
        <div className="download-card">
          <div className="platform-selector">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                className={`platform-btn ${selectedPlatform === platform.id ? 'active' : ''}`}
                onClick={() => setSelectedPlatform(platform.id)}
                title={platform.name}
              >
                <span className="platform-emoji">{platform.emoji}</span>
                <span className="platform-name">{platform.name}</span>
              </button>
            ))}
          </div>

          <div className="input-group">
            <input
              type="text"
              className="url-input"
              placeholder="Paste video URL here..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
            <button className="download-btn" onClick={handleDownload}>
              Download
            </button>
          </div>

          <p className="help-text">
            Paste the link of any video from supported platforms and click download
          </p>
        </div>

        {/* Telegram Section */}
        <div className="telegram-section">
          <div className="telegram-card">
            <div className="telegram-icon">📱</div>
            <h3>Join Our Telegram Channel</h3>
            <p>Get updates, tips, and exclusive content!</p>
            <a
              href="https://t.me/YOUR_CHANNEL_NAME"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-btn"
            >
              Join Telegram Channel
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="features">
          <h2 className="features-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Download videos in seconds with our optimized servers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🆓</div>
              <h3>100% Free</h3>
              <p>No hidden fees, no subscriptions. Completely free forever</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Safe & Secure</h3>
              <p>Your privacy matters. We don't store your data</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>All Devices</h3>
              <p>Works perfectly on mobile, tablet, and desktop</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>HD Quality</h3>
              <p>Download videos in the highest quality available</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>All Platforms</h3>
              <p>Support for YouTube, Instagram, TikTok, Facebook & more</p>
            </div>
          </div>
        </div>

        {/* Supported Platforms */}
        <div className="supported-platforms">
          <h2>Supported Platforms</h2>
          <div className="platforms-list">
            <span className="platform-badge">▶️ YouTube</span>
            <span className="platform-badge">📷 Instagram</span>
            <span className="platform-badge">🎵 TikTok</span>
            <span className="platform-badge">👥 Facebook</span>
            <span className="platform-badge">🐦 Twitter/X</span>
            <span className="platform-badge">📹 Vimeo</span>
            <span className="platform-badge">📺 Dailymotion</span>
            <span className="platform-badge">🎮 Twitch</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Social Media Video Downloader. All rights reserved.</p>
        <p className="footer-note">
          Note: Please respect copyright laws and only download videos you have permission to use.
        </p>
      </footer>
    </div>
  )
}

export default App
