import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar-container">
      <div className="navbar-wrapper">
        
        {/* Logo */}
        <Link to="/" className="outline-none">
          <img src="/logo.png" alt="Yum Delivery" className="nav-logo-img" />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a
              href="https://wa.me/2348032280081"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="order-btn"
            >
              Order Now
            </Motion.button>
          </a>

          {/* Mobile Burger Icon */}
          <button className="mobile-toggle-btn" onClick={toggleMenu}>
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-menu"
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="mobile-toggle-btn" onClick={toggleMenu}>
                <HiX />
              </button>
            </div>
            
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="https://wa.me/2348032280081"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: '20px', display: 'block' }}
            >
              <button className="order-btn" style={{ width: '100%', padding: '16px' }}>
                Order Now
              </button>
            </a>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;