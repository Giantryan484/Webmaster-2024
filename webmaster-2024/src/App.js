import React, { useState } from 'react';
import './App.css';
import Flashcard from './Slideshow';
import Slideshow from './Presentation';
import Explorer from './Explorer';

function App() {
  const [slide, setSlide] = useState(0);

  const [zoomedIn, setZoomedIn] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1); // 1 for normal, greater for zoom
  const [transformOrigin, setTransformOrigin] = useState('left'); // 'left' or 'right'

  const handleZoom = (targetVw, scaleLevel, origin, path) => {

    window.history.pushState({}, '', path);
    // Scroll to the specific point vertically
    const targetPx = ((window.innerWidth * targetVw) / 100) - (window.innerHeight / 2); // Convert vw to px
    window.scrollTo({ top: targetPx, behavior: 'smooth' });

    // Scale the page after scrolling
    setTimeout(() => {
      // const transformOriginX = (scaleLevel > 1) ? 'right' : 'left'; // Choose 'left' or 'right' based on your requirement
      if (scaleLevel !== 1) {
        setTransformOrigin(origin);
        setZoomedIn(true)
        document.body.style.overflow = 'hidden';
      }
      setZoomLevel(scaleLevel);
    }, 400); // Adjust timeout based on scroll duration
  };

  const handleResetZoom = () => {
    // setTransformOrigin(origin);
    window.history.pushState({}, '', '/Webmaster-2024');
    setZoomLevel(1);
    setZoomedIn(false);
    document.body.style.overflow = 'auto';
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
                  <button onClick={() => handleZoom(49, 2, "0vw 55vw", "/Webmaster-2024/flashcards")} className="header-button">Flashcards</button>
                  <button onClick={() => handleZoom(79, 2, "100vw 82vw", "/Webmaster-2024/explorer")} className="header-button">Home Explorer</button>
              </div>
              <div className="button-group right">
                  <button onClick={() => handleZoom(105, 2, "0vw 105vw", "/Webmaster-2024/slideshow")} className="header-button">Slideshow</button>
                  <button onClick={() => handleZoom(200, 1, "50vw 50vw", "")}className="header-button">Resources</button>
              </div>
          </header>
        <div className="rectangle top-left">
        {/* <button onClick={() => handleZoom(49, 2, "0vw 55vw")}>Zoom into Section 1</button> Replace 50 with actual position */}
        {/* <button onClick={() => handleResetZoom("0vw 55vw")}>Reset Zoom</button> */}

          <Flashcard currentSlide={slide} setCurrentSlide={setSlide}/>
        </div>
        <div className="rectangle middle-right">
        {/* <button onClick={() => handleZoom(79, 2, "100vw 82vw")}>Zoom into Section 1</button> Replace 50 with actual position */}
        {/* <button onClick={() => handleResetZoom("100vw 82vw")}>Reset Zoom</button> */}
          <Explorer />
        </div>
        <div className="rectangle bottom-left">
        {/* <button onClick={() => handleZoom(105, 2, "0vw 105vw")}>Zoom into Section 1</button> Replace 50 with actual position */}
        {/* <button onClick={() => handleResetZoom("0vw 105vw")}>Reset Zoom</button> */}
          {/* <iframe 
                  src={`${process.env.PUBLIC_URL}/Webmaster sketches 12-4-23.pdf`}
                  title="PDF"
                  className="pdf-viewer"
          ></iframe> */}
          <Slideshow />

        </div>

        {zoomedIn === false && (
          <>
          <button className='big-button top-left-button' onClick={() => handleZoom(49, 2, "0vw 55vw", "/Webmaster-2024/flashcards")}></button>
          <button className='big-button middle-right-button' onClick={() => handleZoom(79, 2, "100vw 82vw", "/Webmaster-2024/explorer")}></button>
          <button className='big-button bottom-left-button' onClick={() => handleZoom(105, 2, "0vw 105vw", "/Webmaster-2024/slideshow")}></button>
          </>
          // have these disappear when zoomed, then have clicking on the background reset zoom
          // remove the origin from reset zoom, have it stay the same as what it was last set (just remove that one setTranform origin)
          
        )}
        <div className='big-reset-button' onClick={() => handleResetZoom()}></div>


        {/* eslint-disable-next-line */}
        <a className='resources-button CC' href='' target="_blank" rel="noopener noreferrer"></a>
        {/* eslint-disable-next-line */}
        <a className='resources-button POWL' href='' target="_blank" rel="noopener noreferrer"></a>
        {/* eslint-disable-next-line */}
        <a className='resources-button IMGS' href='' target="_blank" rel="noopener noreferrer"></a>
        {/* eslint-disable-next-line */}
        <a className='resources-button LINKS' href='' target="_blank" rel="noopener noreferrer"></a>
        {/* eslint-disable-next-line */}
        <a className='resources-button CODE' href='https://github.com/Giantryan484/Webmaster-2024' target="_blank" rel="noopener noreferrer"></a>
        {/* eslint-disable-next-line */}
        <a className='resources-button BKGN' href='' target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>
  );
}

export default App;