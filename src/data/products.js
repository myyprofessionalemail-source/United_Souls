// Static product data - Easy to customize
export const products = [
  // Clothing Products
  {
    id: 1,
    name: "Classic White T-Shirt",
    category: "clothing",
    price: 549.0,
    images: [
      "/images/cloth1.1.png",
      "/images/cloth1.2.png",
      "/images/cloth1.3.png"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium cotton t-shirt with a comfortable fit and modern design.",
    features: ["100% Cotton", "Machine Washable", "Pre-shrunk", "Comfortable Fit"]
  },
  {
    id: 2,
    name: "Denim Jacket",
    category: "clothing",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Classic denim jacket with a timeless design and durable construction.",
    features: ["100% Cotton Denim", "Classic Fit", "Button Closure", "Durable Construction"]
  },
  {
    id: 3,
    name: "Black Hoodie",
    category: "clothing",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a4?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1601925260360-b5d8a3edd0dc?w=500&h=600&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Comfortable hoodie perfect for casual wear and outdoor activities.",
    features: ["Fleece Lined", "Kangaroo Pocket", "Drawstring Hood", "Comfortable Fit"]
  },
  {
    id: 4,
    name: "Summer Dress",
    category: "clothing",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566479179817-c0d9edb5c5c0?w=500&h=600&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Elegant summer dress with a flowing silhouette and breathable fabric.",
    features: ["Lightweight Fabric", "A-line Silhouette", "Machine Washable", "Breathable"]
  },
  {
    id: 5,
    name: "Chino Pants",
    category: "clothing",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1506629905607-2b0a0b4b4a4a?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Versatile chino pants perfect for both casual and semi-formal occasions.",
    features: ["Cotton Blend", "Classic Fit", "Machine Washable", "Versatile Style"]
  },
  {
    id: 6,
    name: "Wool Sweater",
    category: "clothing",
    price: 99.99,
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1601925260360-b5d8a3edd0dc?w=500&h=600&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium wool sweater for cold weather with a sophisticated look.",
    features: ["100% Wool", "Warm & Cozy", "Classic Design", "High Quality"]
  },

  // Footwear Products
  {
    id: 7,
    name: "Classic Sneakers",
    category: "footwear",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Comfortable and stylish sneakers perfect for everyday wear.",
    features: ["Breathable Upper", "Cushioned Sole", "Durable Construction", "Classic Design"]
  },
  {
    id: 8,
    name: "Leather Boots",
    category: "footwear",
    price: 199.99,
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc4bb7a6c4a?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=500&h=600&fit=crop"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Premium leather boots with excellent craftsmanship and durability.",
    features: ["Genuine Leather", "Slip Resistant", "Comfortable Insole", "Durable Construction"]
  },
  {
    id: 9,
    name: "Running Shoes",
    category: "footwear",
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "High-performance running shoes with advanced cushioning technology.",
    features: ["Lightweight Design", "Advanced Cushioning", "Breathable Material", "Performance Fit"]
  },
  {
    id: 10,
    name: "Canvas Shoes",
    category: "footwear",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Casual canvas shoes perfect for relaxed and comfortable wear.",
    features: ["Canvas Upper", "Rubber Sole", "Casual Style", "Comfortable Fit"]
  },
  {
    id: 11,
    name: "Dress Shoes",
    category: "footwear",
    price: 179.99,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc4bb7a6c4a?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=500&h=600&fit=crop"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Elegant dress shoes perfect for formal occasions and business wear.",
    features: ["Genuine Leather", "Classic Design", "Comfortable Fit", "Professional Look"]
  },
  {
    id: 12,
    name: "Sandals",
    category: "footwear",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=600&fit=crop"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Comfortable sandals perfect for summer and beach activities.",
    features: ["Breathable Design", "Comfortable Straps", "Lightweight", "Summer Ready"]
  }
];

// Helper functions for product management
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getFeaturedProducts = () => {
  return products.slice(0, 6); // First 6 products as featured
};

// Helper function to get the first image for backward compatibility
export const getProductImage = (product) => {
  return product.images ? product.images[0] : product.image;
};
