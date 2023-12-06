import React, { useState } from 'react';
import './App.css';
import Flashcard from './Slideshow';
import Slideshow from './Presentation';
import Explorer from './Explorer';

function App() {
  const [slide, setSlide] = useState(0);
  return (
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
    </div>
  );
}

export default App;
