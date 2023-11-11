import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Frontpage from './Frontpage';
import Header from './Header';
import SlideShow from './Slideshow';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/slideshow" element={<SlideShow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
