import React from 'react';
import ProductList from '../components/ProductList';
import { getProductsByCategory } from '../data/products';
import './FootwearPage.css';

const FootwearPage = () => {
  const footwearProducts = getProductsByCategory('footwear');

  return (
    <div className="footwear-page">
      <div className="page-header">
        <h1 className="page-title">Footwear</h1>
        <p className="page-subtitle">
          Step into style with our collection of comfortable and fashionable shoes
        </p>
      </div>
      
      <ProductList 
        products={footwearProducts}
        title="All Footwear"
        subtitle={`${footwearProducts.length} items available`}
      />
    </div>
  );
};

export default FootwearPage;
