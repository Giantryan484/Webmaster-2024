import React, { useState } from 'react';
import './App.css';
import Flashcard from './Slideshow';
import Slideshow from './Presentation';
import Explorer from './Explorer';

function App() {
  const [slide, setSlide] = useState(0);

  const [zoomLevel, setZoomLevel] = useState(1); // 1 for normal, greater for zoom
  const [scrollPosition, setScrollPosition] = useState(0); // Scroll position in vw

  const handleZoom = (sectionPosition) => {
    setZoomLevel(2); // Example zoom level, adjust as needed
    setScrollPosition(sectionPosition);
    // Additional logic to scroll to the specific position
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setScrollPosition(0);
    // Logic to reset scroll position
  };

  return (
    <div className='app-container' style={{transform: `scale(${zoomLevel})`}}>
      <div className="svg-background-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/tree.svg)` }}>
        <header className="header-bar">
              <div className="button-group left">
                  <button className="header-button">Flashcards</button>
                  <button className="header-button">Home Explorer</button>
              </div>
              <div className="button-group right">
                  <button className="header-button">Slideshow</button>
                  <button className="header-button">Resources</button>
              </div>
          </header>
          <div className="rectangle top-left">
            <Flashcard currentSlide={slide} setCurrentSlide={setSlide}/>
          </div>
          <div className="rectangle middle-right">
            <Explorer />
          </div>
          <div className="rectangle bottom-left">
            {/* <Slideshow /> */}
            <iframe 
                  src={`${process.env.PUBLIC_URL}/Webmaster sketches 12-4-23.pdf`}
                  title="PDF"
                  className="pdf-viewer"
            ></iframe>
          </div>
          <div className="content">
              <h1></h1>
          </div>
          <button onClick={() => handleZoom(50)}>Zoom into Section 1</button> {/* Replace 50 with actual position */}
          <button onClick={handleResetZoom}>Go Back</button>
      </div>
    </div>
  );
}

export default App;
