# StyleHub - Modern E-commerce Store

A modern, minimalist e-commerce website built with React.js. Features a clean interface for selling clothing and footwear with a fully functional cart system.

## Features

- 🏠 **Homepage** with sleek banner and featured products
- 👕 **Product Categories** for clothing and footwear
- 🛍️ **Product Detail Pages** with comprehensive information
- 🛒 **Shopping Cart** with add/remove functionality
- 📱 **Responsive Design** for mobile and desktop
- ⚡ **Fast Performance** with optimized React components

## Project Structure

```
ecommerce-store/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CartContext.js      # Cart state management
│   │   ├── Navbar.js           # Navigation component
│   │   ├── Footer.js           # Footer component
│   │   ├── ProductCard.js      # Individual product card
│   │   ├── ProductList.js      # Product grid component
│   │   ├── Navbar.css
│   │   ├── Footer.css
│   │   ├── ProductCard.css
│   │   └── ProductList.css
│   ├── pages/
│   │   ├── HomePage.js         # Homepage with banner
│   │   ├── ClothingPage.js     # Clothing products page
│   │   ├── FootwearPage.js     # Footwear products page
│   │   ├── ProductDetailPage.js # Individual product page
│   │   ├── CartPage.js         # Shopping cart page
│   │   ├── HomePage.css
│   │   ├── ClothingPage.css
│   │   ├── FootwearPage.css
│   │   ├── ProductDetailPage.css
│   │   └── CartPage.css
│   ├── data/
│   │   └── products.js         # Product data (easily customizable)
│   ├── styles/
│   │   ├── index.css           # Global styles
│   │   └── App.css             # App component styles
│   ├── App.js                  # Main app component
│   └── index.js                # Entry point
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd ecommerce-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

## Customizing Products

To add, edit, or remove products, simply modify the `src/data/products.js` file:

### Adding a New Product

```javascript
{
  id: 13, // Unique ID
  name: "Your Product Name",
  category: "clothing", // or "footwear"
  price: 99.99,
  image: "https://your-image-url.com/image.jpg",
  sizes: ["S", "M", "L", "XL"], // or ["7", "8", "9", "10", "11", "12"] for footwear
  description: "Your product description",
  features: ["Feature 1", "Feature 2", "Feature 3"]
}
```

### Product Properties

- **id**: Unique identifier (number)
- **name**: Product name (string)
- **category**: Either "clothing" or "footwear" (string)
- **price**: Product price (number)
- **image**: Image URL (string) - Use high-quality images (500x600px recommended)
- **sizes**: Array of available sizes
  - Clothing: ["S", "M", "L", "XL"]
  - Footwear: ["7", "8", "9", "10", "11", "12"]
- **description**: Product description (string)
- **features**: Array of product features (array of strings)

### Image Recommendations

- **Format**: JPG or PNG
- **Dimensions**: 500x600px (5:6 aspect ratio)
- **Quality**: High resolution for best display
- **Sources**: Use services like Unsplash, Pexels, or your own images

### Example Product Update

```javascript
// In src/data/products.js
export const products = [
  // ... existing products
  {
    id: 13,
    name: "Premium Leather Jacket",
    category: "clothing",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    description: "Handcrafted leather jacket with premium materials and timeless design.",
    features: ["100% Genuine Leather", "Handcrafted", "Classic Design", "Durable Construction"]
  }
];
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Features Overview

### Homepage
- Hero banner with call-to-action buttons
- Featured products section
- Category showcase
- Company features section

### Product Pages
- Grid layout with product cards
- Size selection
- Add to cart functionality
- Responsive design

### Product Detail Page
- Large product image
- Detailed product information
- Size and quantity selection
- Add to cart with validation

### Shopping Cart
- View all cart items
- Update quantities
- Remove items
- Order summary with shipping
- Free shipping threshold ($50+)

### Design Features
- Apple-inspired minimalist design
- Smooth animations and transitions
- Responsive grid layouts
- Modern typography (Inter font)
- Consistent color scheme
- Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please open an issue in the repository.

---

Built with ❤️ using React.js
