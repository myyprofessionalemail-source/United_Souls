import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../components/CartContext';
import ImageCarousel from '../components/ImageCarousel';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="product-not-found">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/" className="back-to-home-btn">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }
    
    alert(`${quantity} ${product.name} (${selectedSize}) added to cart!`);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-detail-content">
          <div className="product-images">
            <ImageCarousel 
              images={product.images || [product.image]} 
              productName={product.name}
            />
          </div>

          <div className="product-details">
            <div className="product-header">
              <h1 className="product-title">{product.name}</h1>
              <p className="product-price">${product.price}</p>
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-features">
              <h3>Features:</h3>
              <ul className="features-list">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="product-options">
              <div className="size-selection">
                <h3>Size: <span className="required-indicator">*</span></h3>
                <div className="size-options">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => handleSizeSelect(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="size-help-text">Please select a size to add this item to your cart</p>
                )}
              </div>

              <div className="quantity-selection">
                <h3>Quantity:</h3>
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="quantity-value">{quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="product-actions">
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                {!selectedSize ? 'Select a Size' : 'Add to Cart'}
              </button>
              <Link to="/cart" className="view-cart-btn">
                View Cart
              </Link>
            </div>

            <div className="product-info">
              <div className="info-item">
                <h4>Category:</h4>
                <p>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
              </div>
              <div className="info-item">
                <h4>Available Sizes:</h4>
                <p>{product.sizes.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="back-navigation">
          <Link to={`/${product.category}`} className="back-link">
            ← Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
