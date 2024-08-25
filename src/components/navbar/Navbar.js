// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DonateModal from '../../modals/DonateModal';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // State for modal

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Add event listener to close the mobile menu when clicking outside
    const handleOutsideClick = (e) => {
      if (isMobileMenuOpen && !e.target.closest('.navbar')) {
        closeMobileMenu();
      }
    };

    // Attach the event listener
    document.addEventListener('click', handleOutsideClick);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar">
      <Link to="/" className="brand" onClick={closeMobileMenu}>
        <img src="/logo.png" alt="" />
      </Link>

      <div className={`menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <Link to="/" onClick={closeMobileMenu}>
          Home
        </Link>
        <Link to="/services" onClick={closeMobileMenu}>
          Services
        </Link>
        <Link to="/ourwork" onClick={closeMobileMenu}>
          Our Work
        </Link>
        <Link to="/about" onClick={closeMobileMenu}>
          About
        </Link>
        <Link to="/socialinternship" onClick={closeMobileMenu}>
          Social Internship
        </Link>
        <Link to="/contact" onClick={closeMobileMenu}>
          Contact
        </Link>
        <button className="book-meeting1" onClick={openModal}>Donate</button>
      </div>

      <button className="book-meeting" onClick={openModal}>Donate</button>

      <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <DonateModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
