import React from 'react';
import './Presentation.css';

const Presentation = () => {
  const images = [
    `${process.env.PUBLIC_URL}/page_1.png`,
    `${process.env.PUBLIC_URL}/page_2.png`,
    `${process.env.PUBLIC_URL}/page_3.png`,
    `${process.env.PUBLIC_URL}/page_4.png`,
    `${process.env.PUBLIC_URL}/page_5.png`,
    `${process.env.PUBLIC_URL}/page_6.png`,
    `${process.env.PUBLIC_URL}/page_7.png`,
    `${process.env.PUBLIC_URL}/page_8.png`,
    `${process.env.PUBLIC_URL}/page_9.png`,
    `${process.env.PUBLIC_URL}/page_10.png`,
  ];

  return (
    <div className="pdf-viewer-container">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Page ${index + 1}`} />
      ))}
    </div>
  );
};

export default Presentation;