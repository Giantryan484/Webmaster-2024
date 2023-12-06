import React, { useCallback } from 'react';
import './App.css';

function App() {
  const handleScroll = useCallback((e) => {
    const scrollY = e.target.scrollTop;

    // Adjust these values based on how you want the rectangles to move
    document.getElementById('rectangle1').style.top = (10 + scrollY * 0.1) + '%';
    document.getElementById('rectangle2').style.top = (30 + scrollY * 0.1) + '%';
    document.getElementById('rectangle3').style.top = (50 + scrollY * 0.1) + '%';
  }, []);

  return (
    <div className="scroll-container">
      <div className="svg-container">
        <img src={`${process.env.PUBLIC_URL}/tree.svg`} alt="tree background" />
      </div>
      <div className="rectangle" id="rectangle1"></div>
      <div className="rectangle" id="rectangle2"></div>
      <div className="rectangle" id="rectangle3"></div>
    </div>
  );
}

export default App;
