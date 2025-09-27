import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products, title, subtitle }) => {
  if (!products || products.length === 0) {
    return (
      <div className="product-list-container">
        <div className="product-list-header">
          <h2 className="product-list-title">{title}</h2>
          {subtitle && <p className="product-list-subtitle">{subtitle}</p>}
        </div>
        <div className="no-products">
          <p>No products found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2 className="product-list-title">{title}</h2>
        {subtitle && <p className="product-list-subtitle">{subtitle}</p>}
      </div>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
