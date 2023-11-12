import React, { useState } from 'react';
import './Slideshow.css'; // Import your CSS file

const slides = [
    { background: 'linear-gradient(to right, #ff6e7f, #bfe9ff)' },
    { background: 'linear-gradient(to right, #00b09b, #96c93d)' },
    { background: 'linear-gradient(to top, #fbc2eb, #a6c1ee)' },
    { background: 'linear-gradient(to right, #f83600, #f9d423)' },
    { background: 'linear-gradient(to right, #4e54c8, #8f94fb)' },
    { background: 'linear-gradient(to top, #ff758c, #ff7eb3)' },
    { background: 'linear-gradient(to right, #36d1dc, #5b86e5)' },
    { background: 'linear-gradient(to right, #ee9ca7, #ffdde1)' },
    { background: 'linear-gradient(to right, #6a11cb, #2575fc)' },
    { background: 'linear-gradient(to top, #ff0844, #ffb199)' }
];
  

function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideDirection, setSlideDirection] = useState('forward');

    const goBack = () => {
        setSlideDirection('backward');
        setCurrentSlide(currentSlide - 1);
    };

    const goForward = () => {
        setSlideDirection('forward');
        setCurrentSlide(currentSlide + 1);
    };
  
    return (
      <div className='slideshow-page'>
        <div className="slideshow-container">
        {currentSlide > 0 && <button className="arrow-button go-back" onClick={goBack}>←</button>}
            <div className={`slide ${slideDirection}`} style={slides[currentSlide]}>
                {/* Slide content */}
            </div>
        {currentSlide < slides.length - 1 && <button className="arrow-button go-forward" onClick={goForward}>→</button>}
    </div>
      </div>
    );
  }

export default Slideshow;
