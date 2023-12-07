import React, { useState, useEffect } from 'react';
import './App.css';
import Flashcard from './Slideshow';
import Explorer from './Explorer';

function App() {
  const [slide, setSlide] = useState(0);

  const [zoomLevel, setZoomLevel] = useState(1); // 1 for normal, greater for zoom
  const [transformOrigin, setTransformOrigin] = useState('left'); // 'left' or 'right'

  const handleZoom = (targetVw, scaleLevel, origin) => {
    // Scroll to the specific point vertically
    const targetPx = ((window.innerWidth * targetVw) / 100) - (window.innerHeight / 2); // Convert vw to px
    window.scrollTo({ top: targetPx, behavior: 'smooth' });

    // Scale the page after scrolling
    setTimeout(() => {
      // const transformOriginX = (scaleLevel > 1) ? 'right' : 'left'; // Choose 'left' or 'right' based on your requirement
      setTransformOrigin(origin);
      setZoomLevel(scaleLevel);
    }, 300); // Adjust timeout based on scroll duration
  };

  const handleResetZoom = (origin) => {
    setTransformOrigin(origin);
    setZoomLevel(1);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='app-container' style={{
      transform: `scale(${zoomLevel})`,
      transformOrigin: `${transformOrigin}`
  }}>
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
        <button onClick={() => handleZoom(49, 2, "0vw 55vw")}>Zoom into Section 1</button> {/* Replace 50 with actual position */}
        <button onClick={() => handleResetZoom("0vw 55vw")}>Reset Zoom</button>

          <Flashcard currentSlide={slide} setCurrentSlide={setSlide}/>
        </div>
        <div className="rectangle middle-right">
        <button onClick={() => handleZoom(79, 2, "100vw 82vw")}>Zoom into Section 1</button> {/* Replace 50 with actual position */}
        <button onClick={() => handleResetZoom("100vw 82vw")}>Reset Zoom</button>
          <Explorer />
        </div>
        <div className="rectangle bottom-left">
        <button onClick={() => handleZoom(105, 2, "0vw 105vw")}>Zoom into Section 1</button> {/* Replace 50 with actual position */}
        <button onClick={() => handleResetZoom("0vw 105vw")}>Reset Zoom</button>
          <iframe 
                  src={`${process.env.PUBLIC_URL}/Webmaster sketches 12-4-23.pdf`}
                  title="PDF"
                  className="pdf-viewer"
            ></iframe>
        </div>
        <a className='resources-button CC' href='' target="_blank" rel="noopener noreferrer"></a>
        <a className='resources-button POWL' hreaf='' target="_blank" rel="noopener noreferrer"></a>
        <a className='resources-button IMGS' href='' target="_blank" rel="noopener noreferrer"></a>
        <a className='resources-button LINKS' href='' target="_blank" rel="noopener noreferrer"></a>
        <a className='resources-button CODE' href='https://github.com/Giantryan484/Webmaster-2024' target="_blank" rel="noopener noreferrer"></a>
        <a className='resources-button BKGN' href='' target="_blank" rel="noopener noreferrer"></a>
        <div className="content">
          <h1></h1>
        </div>
      </div>
    </div>
  );
}

export default App;