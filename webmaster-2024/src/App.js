import React, { useState, useEffect, useRef} from 'react';
import './App.css';
import Flashcard from './Slideshow';
// import Slideshow from './Presentation';
import Explorer from './Explorer';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';


const ZoomableSection = ({ children, options }) => {
  return (
    <TransformWrapper {...options}>
      <TransformComponent>
        {children}
      </TransformComponent>
    </TransformWrapper>
  );
};

function App() {
  const [slide, setSlide] = useState(0);

  // const [zoomLevel, setZoomLevel] = useState(1); // Normal zoom level
  // const [targetScrollPercentage, setTargetScrollPercentage] = useState(0); // Target scroll percentage

  // const handleZoom = (percentage) => {
  //   setZoomLevel(2); // Example zoom level
  //   setTargetScrollPercentage(percentage);
  // };

  // const handleResetZoom = () => {
  //   setZoomLevel(1);
  //   setTargetScrollPercentage(0);
  // };

  // useEffect(() => {
  //   if (zoomLevel !== 1) {
  //     const scrollHeight = document.documentElement.scrollHeight;
  //     const targetScroll = (scrollHeight * targetScrollPercentage) / 100;
  //     window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  //   }
  // }, [zoomLevel, targetScrollPercentage]);

  const transformRef = useRef(null);
  const refToYourBox = useRef(null);

  const zoomToBox = (boxRef) => {
    if (transformRef.current && boxRef.current) {
      const { x, y, width, height } = boxRef.current.getBoundingClientRect();
      const scale = Math.min(window.innerWidth / width, window.innerHeight / height);
      const offsetX = -x * scale + (window.innerWidth - width * scale) / 2;
      const offsetY = -y * scale + (window.innerHeight - height * scale) / 2;

      transformRef.current.setTransform(offsetX, offsetY, scale);
    }
  };

  const resetZoom = () => {
    if (transformRef.current) {
      transformRef.current.resetTransform();
    }
  };

  return (
    <ZoomableSection options={{ ref: transformRef }}>
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
            <div className="box" ref={refToYourBox} onClick={() => zoomToBox(refToYourBox)}>
              <div className="rectangle top-left">
                <Flashcard currentSlide={slide} setCurrentSlide={setSlide} />     
              </div>
            </div>
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
    </ZoomableSection>
  );
}

export default App;
