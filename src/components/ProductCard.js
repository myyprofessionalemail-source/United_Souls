import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { getProductImage } from '../data/products';
import { getDiscountPercent } from '../data/products';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [showSizeSelector, setShowSizeSelector] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize || !selectedQuantity || selectedQuantity < 1) {
      setShowSizeSelector(true);
      return;
    }
    addToCart(product, selectedSize, selectedQuantity);
    setShowSizeSelector(false);
    setSelectedSize('');
    setSelectedQuantity(1);
  };

  const handleSizeSelect = (size) => {
  setSelectedSize(size);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img 
            src={getProductImage(product)} 
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
          {getDiscountPercent(product) > 0 && (
            <span className="discount-badge">
              {getDiscountPercent(product)}% OFF
            </span>
          )}
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-pricing">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="product-mrp-label" style={{ fontSize: '0.85rem', color: '#888' }}>MRP:</span>
              {product.mrp && product.mrp > product.price ? (
                <span className="product-mrp" style={{ textDecoration: 'line-through', fontSize: '1rem', color: '#888', marginRight: '12px' }}>₹{product.mrp}</span>
              ) : null}
              <span className="product-price-label" style={{ fontSize: '0.85rem', color: '#d54040' }}>Discount Price:</span>
              <span className="product-price" style={{ fontSize: '1.1rem', color: '#d54040', fontWeight: 'bold' }}>₹{product.price}</span>
            </div>
          </div>
          <div className="product-sizes">
            <span className="sizes-label">Available Sizes:</span>
            {product.sizes && product.sizes.length > 0 ? (
              <span className="sizes-list"> {product.sizes.join(', ')} </span>
            ) : (
              <span className="sizes-list"> N/A </span>
            )}
          </div>
        </div>
      </Link>
      <div className="product-actions">
        {showSizeSelector ? (
          <div className="size-selector">
            <p className="size-label">Select Size:</p>
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
            <div className="quantity-selector" style={{ margin: '1rem 0' }}>
              <label style={{ marginRight: '0.5rem' }}>Quantity:</label>
              <button
                type="button"
                style={{ padding: '0.25rem 0.75rem', marginRight: '0.5rem', fontSize: '1rem' }}
                onClick={() => setSelectedQuantity(q => Math.max(1, q - 1))}
              >
                -
              </button>
              <span style={{ minWidth: '32px', display: 'inline-block', textAlign: 'center', fontWeight: 'bold' }}>{selectedQuantity}</span>
              <button
                type="button"
                style={{ padding: '0.25rem 0.75rem', marginLeft: '0.5rem', fontSize: '1rem' }}
                onClick={() => setSelectedQuantity(q => q + 1)}
              >
                +
              </button>
            </div>
            <button
              className="add-to-cart-btn"
              onClick={() => {
                if (selectedSize && selectedQuantity > 0) {
                  addToCart(product, selectedSize, selectedQuantity);
                  setShowSizeSelector(false);
                  setSelectedSize('');
                  setSelectedQuantity(1);
                }
              }}
              style={{ marginRight: '0.5rem' }}
            >
              Add to Cart
            </button>
            <button
              className="cancel-size-btn"
              onClick={() => setShowSizeSelector(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            {selectedSize ? `Add to Cart (${selectedSize})` : 'Add to Cart'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
