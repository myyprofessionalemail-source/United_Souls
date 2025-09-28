import React from 'react';
import ProductList from '../components/ProductList';
import { getProductsByCategory } from '../data/products';

const WatchesPage = () => {
  const watches = getProductsByCategory('watches');
  return (
    <div className="watches-page">
      <div className="page-header">
        <h1 className="page-title">Watches</h1>
        <p className="page-subtitle">
          Stylish analog, digital, and smart watches for every look
        </p>
      </div>
      <ProductList 
        products={watches}
        title="All Watches"
        subtitle={`${watches.length} items available`}
      />
    </div>
  );
};

export default WatchesPage;
