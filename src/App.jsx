import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Gallery from './Pages/Gallery/Gallery';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div>
        {/* The Navbar stays at the top of every page */}
        <Navbar />

        {/* This div grows to push the footer down on short pages */}
        <main>
          <Routes>
           
            <Route path="/" element={<Home/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact />} />

        
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;