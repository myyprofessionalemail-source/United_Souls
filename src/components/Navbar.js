import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsMenuOpen(false)}>
          <img src="images/brand_icon.png" alt="Logo" style={{ height: '32px', verticalAlign: 'middle', marginRight: '8px' }} />
          <span className="logo-text">United Souls</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/clothing" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Clothing
          </Link>
          <Link to="/footwear" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Footwear
          </Link>
          <Link to="/watches" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Watches
          </Link>
          <Link to="/orders" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Orders
          </Link>
        </div>

        <div className="navbar-cart">
          <Link to="/cart" className="cart-link">
            <svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h6M17 18a2 2 0 100 4 2 2 0 000-4zM9 18a2 2 0 100 4 2 2 0 000-4z"/>
            </svg>
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
