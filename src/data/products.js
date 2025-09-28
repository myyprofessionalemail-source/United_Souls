// Static product data - Easy to customize
export const products = [
  // Clothing Products
  {
    id: 1,
    name: "Drop Shoulder T-Shirt",
    category: "clothing",
    mrp: 799,
    discountPercent: 31,
    price: 799 - Math.round(799 * 31 / 100),
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
    name: "Drop Shoulder T-Shirt",
    category: "clothing",
    mrp: 799,
    discountPercent: 31,
    price: 799 - Math.round(799 * 31 / 100),
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
    id: 3,
    name: "Drop Shoulder T-Shirt",
    category: "clothing",
    mrp: 799,
    discountPercent: 31,
    price: 799 - Math.round(799 * 31 / 100),
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
    id: 4,
    name: "Drop Shoulder T-Shirt",
    category: "clothing",
    mrp: 799,
    discountPercent: 31,
    price: 799 - Math.round(799 * 31 / 100),
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
    id: 5,
    name: "Drop Shoulder T-Shirt",
    category: "clothing",
    mrp: 799,
    discountPercent: 31,
    price: 799 - Math.round(799 * 31 / 100),
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
    id: 6,
    name: "Drop Shoulder T-Shirt",
    category: "clothing",
    mrp: 799,
    discountPercent: 31,
    price: 799 - Math.round(799 * 31 / 100),
    images: [
      "/images/cloth1.1.png",
      "/images/cloth1.2.png",
      "/images/cloth1.3.png"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium cotton t-shirt with a comfortable fit and modern design.",
    features: ["100% Cotton", "Machine Washable", "Pre-shrunk", "Comfortable Fit"]
  },

  // Footwear Products
  {
    id: 7,
    name: "Classic Sneakers",
    category: "footwear",
    mrp: 2000,         // MRP (striked off)
    discountPercent: 40, // Discount percentage
    price: 2000 - Math.round(2000 * 40 / 100), // Discounted price (auto-calculated)
    images: [
      "/images/crocs1.jpg",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Comfortable and stylish sneakers perfect for everyday wear.",
    features: ["Breathable Upper", "Cushioned Sole", "Durable Construction", "Classic Design"]
  },
  {
    id: 8,
    name: "Leather Boots",
    category: "footwear",
    mrp: 3500,         // MRP (striked off)
    discountPercent: 40, // Discount percentage
    price: 3500 - Math.round(3500 * 40 / 100), // Discounted price (auto-calculated)
    images: [
      "/images/crocs2.jpg",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Premium leather boots with excellent craftsmanship and durability.",
    features: ["Genuine Leather", "Slip Resistant", "Comfortable Insole", "Durable Construction"]
  },
  {
    id: 9,
    name: "Running Shoes",
    category: "footwear",
    mrp: 2000,         // MRP (striked off)
    discountPercent: 40, // Discount percentage
    price: 2000 - Math.round(2000 * 40 / 100), // Discounted price (auto-calculated)
    images: [
      "/images/crocs3.jpg",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "High-performance running shoes with advanced cushioning technology.",
    features: ["Lightweight Design", "Advanced Cushioning", "Breathable Material", "Performance Fit"]
  },
  {
    id: 10,
    name: "Canvas Shoes",
    category: "footwear",
    mrp: 2500,         // MRP (striked off)
    discountPercent: 50, // Discount percentage
    price: 2500 - Math.round(2500 * 50 / 100), // Discounted price (auto-calculated)
    images: [
      "/images/crocs4.jpg",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Casual canvas shoes perfect for relaxed and comfortable wear.",
    features: ["Canvas Upper", "Rubber Sole", "Casual Style", "Comfortable Fit"]
  },
  {
    id: 11,
    name: "Crocs Crocband",
    category: "footwear",
    mrp: 2000,         // MRP (striked off)
    discountPercent: 40, // Discount percentage
    price: 2000 - Math.round(2000 * 40 / 100), // Discounted price (auto-calculated)
    images: [
      "/images/crocs5.jpg",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Elegant dress shoes perfect for formal occasions and business wear.",
    features: ["Genuine Leather", "Classic Design", "Comfortable Fit", "Professional Look"]
  },
  {
    id: 12,
    name: "Sandals",
    category: "footwear",
    mrp: 4000,         // MRP (striked off)
    discountPercent: 45, // Discount percentage
    price: 4000 - Math.round(4000 * 45 / 100), // Discounted price (auto-calculated)
    images: [
      "/images/crocs6.jpg",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Comfortable sandals perfect for summer and beach activities.",
    features: ["Breathable Design", "Comfortable Straps", "Lightweight", "Summer Ready"]
  },
  {
    id: 13,
    name: "BIRKENSTOCK NATURAL LEATHER",
    category: "footwear",
    mrp: 3000,         // MRP (striked off)
    discountPercent: 50, // Discount percentage
    price: 3000 - Math.round(3000 * 50 / 100), // Discounted price (auto-calculated)
    images: [
      "/images/birkenstock1.jpg",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Smooth leather, Anatomically shaped cork-latex footbed; exquisite.",
    features: ["Ethylene Vinyl Acetate", "Adjustable Strap", "Flat", "Buckle"]
  },
  {
    id: 14,
    name: "BIRKENSTOCK CONCRETE GRAY",
    category: "footwear",
    mrp: 4000,         // MRP (striked off)
    discountPercent: 60, // Discount percentage
    price: 4000 - Math.round(4000 * 60 / 100), // Discounted price (auto-calculated)
    images: [
      "/images/birkenstock2.jpg",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Natural leather, Original BIRKENSTOCK footbed: anatomically formed.",
    features: ["EVA", "Suede", "Adjustable metal pin buckles"]
  },
  {
    id: 15,
    name: "BIRKENSTOCK BLACK",
    category: "footwear",
    mrp: 3000,         // MRP (striked off)
    discountPercent: 50, // Discount percentage
    price: 3000 - Math.round(3000 * 50 / 100), // Discounted price (auto-calculated)
    images: [
      "/images/birkenstock3.jpg",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Soft EVA lining for comfort, Anatomically correct, soft EVA footbed.",
    features: ["Flexible", "lightweight", "shock-absorbing", "EVA sole with bone pattern"]
  },
  {
    id: 16,
    name: "BIRKENSTOCK WHITE T-SHAPE",
    category: "footwear",
    mrp: 4000,         // MRP (striked off)
    discountPercent: 60, // Discount percentage
    price: 4000 - Math.round(4000 * 60 / 100), // Discounted price (auto-calculated)
    images: [
      "/images/birkenstock4.jpg",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Anatomically shaped cork-latex footbed.",
    features: ["Leather", "Textile", "Synthetic", "Flip flops"]
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

// Helper to get the discount percent for a product
export const getDiscountPercent = (product) => {
  if (product.discountPercent) return product.discountPercent;
  if (product.mrp && product.price && product.mrp > product.price) {
    return Math.round(((product.mrp - product.price) / product.mrp) * 100);
  }
  return 0;
};

// Helper to get the discounted price for a product
export const getDiscountedPrice = (product) => {
  if (product.discountPercent && product.mrp) {
    return product.mrp - Math.round(product.mrp * product.discountPercent / 100);
  }
  return product.price;
};
