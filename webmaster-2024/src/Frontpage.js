import React from 'react';
import './Frontpage.css'; // Assuming you have a CSS file named Frontpage.css

const Frontpage = () => {
  const handleClick = (buttonIndex) => {
    console.log(`Button ${buttonIndex} clicked`);
  };

  return (
    <div className="canvas">
      <button
        className="clip-button"
        id="button1"
        onClick={() => handleClick(1)}
      >
        Button 1
      </button>
      <button
        className="clip-button"
        id="button2"
        onClick={() => handleClick(2)}
      >
        Button 2
      </button>
      <button
        className="clip-button"
        id="button3"
        onClick={() => handleClick(3)}
      >
        Button 3
      </button>
      <button
        className="clip-button"
        id="button4"
        onClick={() => handleClick(4)}
      >
        Button 4
      </button>
      <button
        className="clip-button"
        id="button5"
        onClick={() => handleClick(5)}
      >
        Button 5
      </button>
    </div>
  );
};

export default Frontpage;
