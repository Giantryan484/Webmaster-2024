import React from 'react';
import './App.css';
import Flashcard from './FlashcardTemp';
import Slideshow from './SlideshowTemp';
import Explorer from './HomeExplorerTemp';

function App() {
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
          <Flashcard />
        </div>
        <div className="rectangle middle-right">
          <Explorer />
        </div>
        <div className="rectangle bottom-left">
          <Slideshow />
        </div>
        <div className="content">
            <h1></h1>
        </div>
    </div>
  );
}

export default App;
