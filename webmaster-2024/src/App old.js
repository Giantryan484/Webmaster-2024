// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import './App.css';
// import Frontpage from './Frontpage';
// import Header from './Header';
// import SlideShow from './Slideshow';
// import TransitionAnimation from './TransitionAnimation';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header/>
//         <Routes>
//           <Route path="/" element={<Frontpage />} />
//           <Route path="/slideshow" element={<SlideShow />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Frontpage from './Frontpage';
import Header from './Header';
import SlideShow from './Slideshow';
import TransitionAnimation from './TransitionAnimation';
import Resources from './Resources';
import Explorer from './Explorer';
import Presentation from './Presentation';

function AppContent() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [prevPath, setPrevPath] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isAnimating) {
      return;
    }

    if (location.pathname !== currentPath) {
      setIsAnimating(true);
      setPrevPath(currentPath); // Save the previous path

      // Timer to update the component (halfway through the animation)
      setTimeout(() => {
        setCurrentPath(location.pathname);
        setPrevPath(null); // Reset the previous path
      }, 1000); // half duration

      // Timer to end the animation (at the end of the animation)
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000); // full duration
    }
  }, [location, currentPath, isAnimating]);

  const renderComponentForPath = (path) => {
    switch (path) {
      case '/':
        return <Frontpage />;
      case '/slideshow':
        return <SlideShow currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>;
      case '/resources':
        return <Resources />;
      case '/home-explorer':
        return <Explorer />;
      case '/how-to-make-big-change':
        return <Presentation />;
      default:
        return <Frontpage />; // Default case
    }
  };

  return (
    <div className="App">
      <Header />
      {isAnimating && <TransitionAnimation />}
      {!prevPath && renderComponentForPath(currentPath)}
      {isAnimating && prevPath && renderComponentForPath(prevPath)}
    </div>
  );
}



// function App() {
//   return (
//     // <Router>
//     //   <AppContent />
//     // </Router>
//       <div>
//         <div id="tree-container">
//           <div class="activity" id="activity-1"></div>
//           <div class="activity" id="activity-2"></div>
//           <div class="activity" id="activity-3"></div>
//           <div class="resource" id="resource"></div>
//         </div>
//       </div>

//   );
// }


function App() {
  // Define click handlers for the activities
  const handleActivityClick = (activityId) => {
    console.log('Activity clicked:', activityId);
    // Implement the zoom effect here
  };

  return (
    <div className="tree-container">
      {/* Inline SVG example */}
      {/* <TreeBackground /> */}
      <div className="activity" id="activity-1" onClick={() => handleActivityClick('activity-1')}></div>
      <div className="activity" id="activity-2" onClick={() => handleActivityClick('activity-2')}></div>
      <div className="activity" id="activity-3" onClick={() => handleActivityClick('activity-3')}></div>
      <div className="resource" id="resource" onClick={() => handleActivityClick('resource')}></div>
    </div>
  );
}

export default App;
