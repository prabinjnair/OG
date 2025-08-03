import './App.css';
import { FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop className="bg-video">
        <source src="/video.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay" />

      {/* 🟧 Logo moved to top-left corner */}
      <div className="logo-fixed">
        <img src="/logo.PNG" alt="Logo" />
      </div>

      {/* 🔴 Centered Content */}
      <div className="content">
        <h1>VOL 1</h1>
        <p>THE OGs ARE HERE</p>

        <div className="links">
          <a href="https://your-link.com/4play" target="_blank" rel="noopener noreferrer">
            4 PLAY
          </a>
          <a href="https://your-link.com/sinister" target="_blank" rel="noopener noreferrer">
            SINISTER
          </a>
          <a href="https://instagram.com/prabiiin" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
