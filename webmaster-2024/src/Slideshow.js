import { useState, useEffect } from 'react';
import './Slideshow.css'; // Import your CSS file

const slides = [
    { background: 'linear-gradient(to right, #ff6e7f, #bfe9ff)' },
    { background: 'linear-gradient(to right, #00b09b, #96c93d)' },
    { background: 'linear-gradient(to top, #fbc2eb, #a6c1ee)' },
    { background: 'linear-gradient(to right, #f83600, #f9d423)' },
    { background: 'linear-gradient(to right, #000000, #ffffff)' },
    { background: 'linear-gradient(to top, #ff758c, #ff7eb3)' },
    { background: 'linear-gradient(to right, #36d1dc, #5b86e5)' },
    { background: 'linear-gradient(to right, #ee9ca7, #ffdde1)' },
    { background: 'linear-gradient(to right, #6a11cb, #2575fc)' },
    { background: 'linear-gradient(to top, #ff0844, #ffb199)' }
];
  

function Slideshow({ currentSlide, setCurrentSlide }) {
  const [slideDirection, setSlideDirection] = useState('forward');
  const [animating, setAnimating] = useState(false);
  const [animatedSlide, setAnimatedSlide] = useState(null);

  async function goBack() {
    if (currentSlide > 0) {
      setSlideDirection('backward');
      setAnimatedSlide(currentSlide - 1)
      setAnimating(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
      }, 499);
    }
  };

  async function goForward() {
    if (currentSlide < slides.length - 1) {
      setSlideDirection('forward');
      setAnimatedSlide(currentSlide)
      setAnimating(true);
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    if (animating) {
      const timeout = setTimeout(() => setAnimating(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [animating]);

  return (
    <div className='slideshow-page'>
      <div className="slideshow-container">
        {currentSlide > 0 && <button className="arrow-button go-back" onClick={goBack}>←</button>}
        <div className='slide' style={slides[currentSlide]}></div>
        {animating && <div className={`slide ${slideDirection === 'forward' ? 'sliding-off' : 'sliding-on'}`}
             style={slides[animatedSlide]}></div>
        }
        {currentSlide < slides.length - 1 && <button className="arrow-button go-forward" onClick={goForward}>→</button>}
      </div>
    </div>
  );
}

export default Slideshow;
