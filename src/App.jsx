import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';

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
            <Route path="/menu" element={<div >Menu Page Content</div>} />
            <Route path="/gallery" element={<div>Gallery Page Content</div>} />
            <Route path="/about" element={<div >About Us Content</div>} />
            <Route path="/contact" element={<div>Contact Content</div>} />
            <Route path="/order" element={<div>Order Page</div>} />

        
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;