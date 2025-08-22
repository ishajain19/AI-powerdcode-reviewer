import { useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  const navigate = useNavigate();

  const navigateToApp = () => {
    navigate('/app');
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>AI-Powered Code Review</h1>
        <p className="tagline">Get expert-level code reviews instantly with our AI-powered analysis tool</p>
        <button onClick={navigateToApp} className="cta-button">
          Start Reviewing Your Code
        </button>
      </header>

      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Deep Analysis</h3>
          <p>Comprehensive code review covering quality, performance, and security</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Instant Feedback</h3>
          <p>Get detailed suggestions in seconds, not days</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Security Focused</h3>
          <p>Identifies potential vulnerabilities in your code</p>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <p>Write or paste your code</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p>Click "Review" button</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p>Get expert-level analysis instantly</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} AI Code Reviewer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;