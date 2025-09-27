import React, { useState, useEffect } from 'react';
import { useCart } from '../components/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { STRIPE_PUBLISHABLE_KEY } from '../config/stripe';
import './CheckoutPage.css';

// Load Stripe with the configured key
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ onOrderComplete }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { items, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US'
  });

  const calculateTotal = () => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
  return calculateTotal() * 0.08; // 8% tax
  };

  const calculateShipping = () => {
  return calculateTotal() > 999 ? 0 : 9.99; // Free shipping over 999
  };

  const calculateFinalTotal = () => {
  return calculateTotal() + calculateTax() + calculateShipping();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Create payment method
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          name: `${customerInfo.firstName} ${customerInfo.lastName}`,
          email: customerInfo.email,
          address: {
            line1: customerInfo.address,
            city: customerInfo.city,
            state: customerInfo.state,
            postal_code: customerInfo.zipCode,
            country: customerInfo.country,
          },
        },
      });

      if (stripeError) {
        setError(stripeError.message);
        setIsProcessing(false);
        return;
      }

      // Simulate payment processing (in a real app, you'd send this to your backend)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create order object
      const order = {
        id: Date.now().toString(),
        customerInfo,
        items: cart,
        subtotal: calculateTotal(),
        tax: calculateTax(),
        shipping: calculateShipping(),
        total: calculateFinalTotal(),
        paymentMethodId: paymentMethod.id,
        status: 'completed',
        date: new Date().toISOString()
      };

      // Save order to localStorage (in a real app, send to backend)
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      existingOrders.push(order);
      localStorage.setItem('orders', JSON.stringify(existingOrders));

      // Clear cart and redirect to success page
      clearCart();
      onOrderComplete(order);

    } catch (err) {
      setError('Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some items to your cart to proceed with checkout.</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="checkout-form-section">
          <h2>Checkout</h2>
          
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-section">
              <h3>Customer Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={customerInfo.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={customerInfo.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Shipping Address</h3>
              <div className="form-group">
                <label htmlFor="address">Street Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={customerInfo.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={customerInfo.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">ZIP Code *</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={customerInfo.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Payment Information</h3>
              <div className="card-element-container">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button
              type="submit"
              disabled={!stripe || isProcessing}
              className="place-order-btn"
            >
              {isProcessing ? 'Processing...' : `Place Order - $${calculateFinalTotal().toFixed(2)}`}
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="order-items">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="order-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Size: {item.size}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-totals">
            <div className="total-line">
              <span>Subtotal:</span>
              <span>₹{calculateTotal().toFixed(2)}</span>
            </div>
            <div className="total-line">
              <span>Shipping:</span>
              <span>{calculateTotal() > 999 ? 'Free' : `₹${calculateShipping().toFixed(2)}`}</span>
            </div>
            <div className="total-line final-total">
              <span>Total:</span>
              <span>₹{(calculateTotal() + (calculateTotal() > 999 ? 0 : calculateShipping())).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  const [orderComplete, setOrderComplete] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  const handleOrderComplete = (order) => {
    setCompletedOrder(order);
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      <div className="order-success">
        <div className="success-content">
          <div className="success-icon">✓</div>
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your purchase. Your order has been confirmed.</p>
          <div className="order-details">
            <p><strong>Order ID:</strong> #{completedOrder.id}</p>
            <p><strong>Total:</strong> ${completedOrder.total.toFixed(2)}</p>
            <p><strong>Email:</strong> {completedOrder.customerInfo.email}</p>
          </div>
          <div className="success-actions">
            <a href="/" className="continue-shopping-btn">Continue Shopping</a>
            <a href="/orders" className="view-orders-btn">View Orders</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <Elements stripe={stripePromise}>
        <CheckoutForm onOrderComplete={handleOrderComplete} />
      </Elements>
    </div>
  );
};

export default CheckoutPage;
