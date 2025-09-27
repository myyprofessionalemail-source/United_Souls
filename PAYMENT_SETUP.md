# Payment Gateway Setup Guide

This guide will help you set up the payment system for your ecommerce store using Stripe.

## 🚀 Features Implemented

- ✅ Complete checkout flow with customer information
- ✅ Stripe payment integration with card processing
- ✅ Order confirmation and success pages
- ✅ Order history and management
- ✅ Shopping cart integration
- ✅ Responsive design for all devices
- ✅ Form validation and error handling

## 📋 Setup Instructions

### 1. Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Sign up for a free account
3. Complete the account verification process

### 2. Get Your API Keys

1. Log into your Stripe Dashboard
2. Go to **Developers** → **API Keys**
3. Copy your **Publishable key** (starts with `pk_test_` for testing)

### 3. Configure Your Store

1. Open `src/config/stripe.js`
2. Replace the placeholder key with your actual Stripe publishable key:

```javascript
export const STRIPE_PUBLISHABLE_KEY = 'pk_test_your_actual_key_here';
```

### 4. Test the Payment System

1. Start your development server: `npm start`
2. Add items to your cart
3. Go to checkout
4. Use Stripe's test card numbers:
   - **Success**: 4242 4242 4242 4242
   - **Decline**: 4000 0000 0000 0002
   - Use any future expiry date and any 3-digit CVC

## 🧪 Test Card Numbers

| Card Number | Description |
|-------------|-------------|
| 4242 4242 4242 4242 | Visa (Success) |
| 4000 0566 5566 5556 | Visa (Debit) |
| 5555 5555 5555 4444 | Mastercard (Success) |
| 2223 0031 2200 3222 | Mastercard (2-series) |
| 3782 822463 10005 | American Express |
| 6011 1111 1111 1117 | Discover |

**Expiry**: Any future date (e.g., 12/25)  
**CVC**: Any 3 digits (e.g., 123)

## 🔧 Production Setup

### 1. Switch to Live Mode

1. In Stripe Dashboard, toggle to **Live mode**
2. Get your live publishable key (starts with `pk_live_`)
3. Update `src/config/stripe.js` with your live key

### 2. Environment Variables (Recommended)

For security, use environment variables:

1. Create a `.env` file in your project root:
```
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key_here
```

2. Update `src/config/stripe.js`:
```javascript
export const STRIPE_PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
```

### 3. Backend Integration

The current implementation simulates payment processing. For production, you'll need:

1. **Backend Server**: Create a server to handle payment intents
2. **Webhook Handling**: Process payment confirmations
3. **Order Management**: Store orders in a database
4. **Email Notifications**: Send order confirmations

## 📱 How It Works

### Checkout Flow

1. **Cart Review**: Customer reviews items in cart
2. **Customer Info**: Collects shipping and billing information
3. **Payment**: Processes payment through Stripe
4. **Confirmation**: Shows order success page
5. **Order History**: Saves order for future reference

### Order Management

- Orders are stored in browser's localStorage
- Each order includes customer info, items, and payment details
- Orders page shows complete order history
- Order status tracking (completed, processing, shipped, cancelled)

## 🎨 Customization

### Styling

- All styles are in `src/pages/CheckoutPage.css` and `src/pages/OrdersPage.css`
- Colors match your store's theme
- Fully responsive design

### Business Logic

- **Tax Rate**: Currently set to 8% (modify in CheckoutPage.js)
- **Shipping**: Free over $100, $9.99 otherwise
- **Order Storage**: Currently uses localStorage (upgrade to database for production)

## 🔒 Security Notes

- Never expose your secret keys in frontend code
- Always use HTTPS in production
- Implement proper server-side validation
- Use Stripe's webhook system for payment confirmations
- Store sensitive data securely on your backend

## 🆘 Troubleshooting

### Common Issues

1. **"Invalid API Key"**: Check your Stripe key is correct
2. **Payment Fails**: Verify you're using test card numbers
3. **Orders Not Saving**: Check browser's localStorage is enabled
4. **Styling Issues**: Ensure CSS files are properly imported

### Support

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com)
- [React Stripe.js Documentation](https://stripe.com/docs/stripe-js/react)

## 🚀 Next Steps

1. Set up your Stripe account and get API keys
2. Test the payment flow with test cards
3. Customize the styling to match your brand
4. Implement backend integration for production
5. Add email notifications and order tracking
6. Set up webhook handling for payment confirmations

Your ecommerce store is now ready to accept payments! 🎉
