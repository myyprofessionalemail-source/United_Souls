import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { getFeaturedProducts } from '../data/products';
import './HomePage.css';

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="homepage">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1 className="hero-title">Discover Modern Fashion</h1>
          <p className="hero-subtitle">
            Curated collection of clothing and footwear designed for the modern lifestyle
          </p>
          <div className="hero-actions">
            <Link to="/clothing" className="hero-btn primary">
              Shop Clothing
            </Link>
            <Link to="/footwear" className="hero-btn secondary">
              Shop Footwear
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop" 
            alt="Modern Fashion"
            className="hero-img"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <ProductList 
          products={featuredProducts}
          title="Featured Products"
          subtitle="Discover our most popular items"
        />
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="categories-container">
          <h2 className="categories-title">Shop by Category</h2>
          <div className="categories-grid">
            <Link to="/clothing" className="category-card">
              <div className="category-image">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" 
                  alt="Clothing"
                />
              </div>
              <div className="category-content">
                <h3 className="category-name">Clothing</h3>
                <p className="category-description">
                  Modern, comfortable clothing for Gym Wear
                </p>
                <span className="category-link">Shop Now →</span>
              </div>
            </Link>

            <Link to="/footwear" className="category-card">
              <div className="category-image">
                <img 
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop" 
                  alt="Footwear"
                />
              </div>
              <div className="category-content">
                <h3 className="category-name">Footwear</h3>
                <p className="category-description">
                  Stylish and comfortable footwear for every step
                </p>
                <span className="category-link">Shop Now →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="features-title">Why Choose United Souls?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>
              <h3 className="feature-title">Free Shipping</h3>
              <p className="feature-description">
                Free shipping on orders over ₹999
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="feature-title">Quality Guarantee</h3>
              <p className="feature-description">
                Premium materials and craftsmanship
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
              </div>
              <h3 className="feature-title">No Return/Exchange</h3>
              <p className="feature-description">
                No COD applicable
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
