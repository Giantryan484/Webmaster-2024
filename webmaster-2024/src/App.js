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

function AppContent() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [prevPath, setPrevPath] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
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
  }, [location, currentPath]);

  const renderComponentForPath = (path) => {
    switch (path) {
      case '/':
        return <Frontpage />;
      case '/slideshow':
        return <SlideShow />;
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



function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
