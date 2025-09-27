import React from 'react';
import ProductList from '../components/ProductList';
import { getProductsByCategory } from '../data/products';
import './ClothingPage.css';

const ClothingPage = () => {
  const clothingProducts = getProductsByCategory('clothing');

  return (
    <div className="clothing-page">
      <div className="page-header">
        <h1 className="page-title">Clothing</h1>
        <p className="page-subtitle">
          Discover our curated collection of modern, comfortable clothing
        </p>
      </div>
      
      <ProductList 
        products={clothingProducts}
        title="All Clothing"
        subtitle={`${clothingProducts.length} items available`}
      />
    </div>
  );
};

export default ClothingPage;
