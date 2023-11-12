import React, { useState } from 'react';
import './Explorer.css';

const Explorer = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="background">
      {[1, 2, 3].map((buttonId) => (
        <div key={buttonId} className="button-container">
          <button onClick={() => handleButtonClick(buttonId)}>
            Button {buttonId}
          </button>
          {selectedButton === buttonId && (
            <div className="text-bubble">Placeholder Text for Button {buttonId}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Explorer;