import React, { useState, useEffect, useRef} from 'react';
import './App.css';
import Flashcard from './Slideshow';
// import Slideshow from './Presentation';
import Explorer from './Explorer';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function App() {
  const [slide, setSlide] = useState(0);
  

  return (
      <div className='app-container'> {/* style={{transform: `scale(${zoomLevel})`}} */}
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
            
            <Zoom>
              <div className="rectangle top-left">
                <Flashcard currentSlide={slide} setCurrentSlide={setSlide} />     
              </div>
            </Zoom>
            <div className="zoom-container-middle-right">
              <div className="rectangle middle-right">
                <Explorer /> 
                {/* <button onClick={() => handleZoom(39.5)}>Zoom into Section 1</button>*/}
                {/* <button onClick={handleResetZoom}>Go Back</button> */}
              </div>
            </div>
            <div className="zoom-container-bottom-left">
              <div className="rectangle bottom-left">
                {/* <Slideshow /> */}
                <iframe 
                      src={`${process.env.PUBLIC_URL}/Webmaster sketches 12-4-23.pdf`}
                      title="PDF"
                      className="pdf-viewer"
                ></iframe>
              </div>
            </div>
            <div className="content">
                <h1></h1>
            </div>
        </div>
      </div>
  );
}

export default App;
