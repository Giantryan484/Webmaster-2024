import React, { useState } from 'react';
import './Explorer.css';

const Explorer = () => {
  const [selectedImage, setSelectedImage] = useState(2);
  const images = [
    `${process.env.PUBLIC_URL}/House3.png`,
    `${process.env.PUBLIC_URL}/House2.png`,
    `${process.env.PUBLIC_URL}/House1.png`
  ];

  return (
    <div className="image-switcher-container">
      <div className="image-container">
        <img src={images[selectedImage]} alt={`Display ${selectedImage}`} />
      </div>
      <div className="radio-buttons-container">
        {[0, 1, 2].map(index => (
          <label key={index} className={`radio-button ${selectedImage === index ? 'selected' : ''}`}>
            <input
              type="radio"
              name="image-selector"
              value={index}
              checked={selectedImage === index}
              onChange={() => setSelectedImage(index)}
            />
            {`${(3 - index)}`}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Explorer;