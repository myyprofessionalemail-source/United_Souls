import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <h1 className="cart-title">Your Cart</h1>
          <div className="empty-cart">
            <div className="empty-cart-content">
              <svg className="empty-cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h6M17 18a2 2 0 100 4 2 2 0 000-4zM9 18a2 2 0 100 4 2 2 0 000-4z"/>
              </svg>
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added any items to your cart yet.</p>
              <Link to="/" className="continue-shopping-btn">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1 className="cart-title">Your Cart ({getTotalItems()} items)</h1>
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map((item, index) => (
              <div key={`${item.id}-${item.size}-${index}`} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-size">Size: {item.size}</p>
                  <p className="cart-item-price">₹{item.price}</p>
                </div>

                <div className="cart-item-quantity">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  <p className="item-total">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <div className="cart-item-actions">
                  <button 
                    className="remove-item-btn"
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-content">
              <h3 className="summary-title">Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal ({getTotalItems()} items):</span>
                <span>₹{getTotalPrice().toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping:</span>
                <span>{getTotalPrice() > 999 ? 'Free' : '₹9.99'}</span>
              </div>
              
              <div className="summary-row total">
                <span>Total:</span>
                <span>₹{(getTotalPrice() + (getTotalPrice() > 999 ? 0 : 9.99)).toFixed(2)}</span>
              </div>

              <div className="checkout-actions">
                <button className="checkout-btn" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
                <Link to="/" className="continue-shopping-btn">
                  Continue Shopping
                </Link>
              </div>

              {getTotalPrice() <= 999 && (
                <div className="shipping-notice">
                  <p>Add ₹{(1000 - getTotalPrice()).toFixed(2)} more for free shipping!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
