import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Frontpage.css';

const Frontpage = () => {
  // State to hold the calculated percentage offsets based on the window size
  const [offsets, setOffsets] = useState({
    horizontal: 0,
    vertical: 0,
  });

//   const [diagonalOffsets, setDiagonalOffsets] = useState({
//     line1: { offsetX: 0, offsetY: 0 },
//     line2: { offsetX: 0, offsetY: 0 },
//   });

  useEffect(() => {
    // Function to calculate the percentage offsets based on the window size
    const calculateOffsets = () => {
      const space = 10; // The desired space in pixels
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const horizontalOffset = (space / windowWidth) * 100;
      const verticalOffset = (space / windowHeight) * 100;

    //   const line1 = calculateDiagonalOffset(15, 30, 50, 100, space);
    //   const line2 = calculateDiagonalOffset(30, 15, 100, 50, space);

    //   setDiagonalOffsets({
    //     line1,
    //     line2,
    //   });

      setOffsets({
        horizontal: horizontalOffset,
        vertical: verticalOffset,
      });
    };

    // Function to calculate the offsets for diagonal lines
    // const calculateDiagonalOffset = (x1, y1, x2, y2, offsetPx) => {
    //     // Calculate the slope of the line
    //     const dy = y2 - y1;
    //     const dx = x2 - x1;
    //     const slope = dy / dx;
      
    //     // Calculate the angle of the line with respect to the horizontal
    //     const angle = Math.atan(slope);
      
    //     // Calculate the horizontal distance needed for the offset
    //     // Using the formula: h^2 = dx^2 + (dx * slope)^2
    //     // Which simplifies to: h = dx * sqrt(1 + slope^2)
    //     // And we solve for dx: dx = h / sqrt(1 + slope^2)
    //     const horizontalOffset = offsetPx / Math.sqrt(1 + slope * slope);
      
    //     // Convert the horizontal offset from pixels to percentage of the window width
    //     const offsetX = (horizontalOffset / window.innerWidth) * 100;
    //     // No vertical offset directly calculated, it's a consequence of the horizontal offset and the line's slope
    //     const offsetY = offsetX * slope;
      
    //     return { offsetX, offsetY };
    // };

    // Calculate offsets on mount and whenever the window resizes
    calculateOffsets();

    window.addEventListener('resize', calculateOffsets);

    // Cleanup listener when the component unmounts
    return () => window.removeEventListener('resize', calculateOffsets);
  }, []);

  const handleClick = (buttonIndex) => {
    console.log(`Button ${buttonIndex} clicked`);
  };

  return (
    <div className="page-content">
        <div className="frontpage-canvas">
            <Link
                to='/'
                className="clip-button"
                id="button1"
                onClick={() => handleClick(1)}
                style={{
                clipPath: `polygon(${30 - offsets.horizontal}% ${30 - offsets.vertical}%, 
                                    0 ${30 - offsets.vertical}%, 
                                    0 0, 
                                    ${30 - offsets.horizontal}% 0)`,
                }}
            >
                <div 
                    className='button-text'
                    style={{
                        position: 'absolute',
                        bottom: `${70 + offsets.vertical * 2}%`,
                        left: `${offsets.horizontal}%`,
                    }}>
                    LOGO
                </div>
            </Link>

            <Link
                to='/slideshow'
                className="clip-button"
                id="button2"
                onClick={() => handleClick(2)}
                style={{
                clipPath: `polygon(0 ${30 + offsets.vertical}%, 
                                    ${15 - offsets.horizontal * 1.5}% ${30 + offsets.vertical}%, 
                                    ${50 - offsets.horizontal * 1.5}% 100%, 
                                    0% 100%)`,
                }}
            >
                <div 
                    className='button-text'
                    style={{
                        position: 'absolute',
                        bottom: `${offsets.vertical}%`,
                        left: `${offsets.horizontal}%`,
                    }}>
                    SLIDESHOW
                </div>
            </Link>

            <Link
                to='/how-to-make-big-change'
                className="clip-button"
                id="button3"
                onClick={() => handleClick(3)}
                style={{
                clipPath: `polygon(100% 0, 
                                    ${30 + offsets.horizontal}% 0, 
                                    ${30 + offsets.horizontal}% ${15 - offsets.vertical}%, 
                                    100% ${50 - offsets.vertical}%)`,
                }}
            >
                <div 
                    className='button-text'
                    style={{
                        position: 'absolute',
                        left: `${30 + offsets.horizontal * 2}%`,
                        top: `${offsets.vertical}%`,
                    }}>
                    HOW TO MAKE BIG CHANGE WITH LITTLE EFFORT
                </div>
            </Link>

            <Link
                to='/resources'
                className="clip-button"
                id="button4"
                onClick={() => handleClick(4)}
                style={{
                clipPath: `polygon(${40 + offsets.horizontal * (window.innerWidth)/900}% ${80 + offsets.vertical}%, 
                                    ${50 + offsets.horizontal * (window.innerWidth)/1300}% 100%, 
                                    100% 100%, 
                                    100% ${80 + offsets.vertical}%)`,
                }}
            >
                <div 
                    className='button-text'
                    style={{
                        position: 'absolute',
                        bottom: `${offsets.vertical}%`,
                        left: `${50 + offsets.horizontal * (1 + (window.innerWidth)/1300)}%`,
                    }}>
                    RESOURCES
                </div>
            </Link>

            <Link
                to='/home-explorer'
                className="clip-button"
                id="button5"
                onClick={() => handleClick(5)}
                style={{
                clipPath: `polygon(${30 + offsets.horizontal}% ${30 + offsets.vertical}%, 
                                    ${15 + offsets.horizontal * (window.innerWidth)/1500}% ${30 + offsets.vertical}%, 
                                    ${40 + offsets.horizontal * 0.1}% ${80 - offsets.vertical}%, 
                                    100% ${80 - offsets.vertical}%, 
                                    100% ${50 + offsets.vertical}%, 
                                    ${30 + offsets.horizontal}% ${15 + offsets.vertical}%)`,
                }}
            >
                <div 
                    className='button-text'
                    style={{
                        position: 'absolute',
                        bottom: `${20 + offsets.vertical * 2}%`,
                        left: `${40 + offsets.horizontal * 1.1}%`,
                    }}>
                    HOME EXPLORER
                </div>
            </Link>
        </div>
    </div>
  );
};

export default Frontpage;
