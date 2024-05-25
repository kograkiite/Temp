import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductDetail = ({ productData }) => {
  // State to manage the quantity of the product
  const [quantity, setQuantity] = useState(1);

  // If productData is not available, return null to prevent rendering
  if (!productData) return null;

  // Function to handle increasing the quantity
  const handleIncrease = () => setQuantity(quantity + 1);

  // Function to handle decreasing the quantity
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    console.log('Added to cart:', productData, 'Quantity:', quantity);
  };

  // Function to handle ordering the product
  const handleOrderNow = () => {
    console.log('Ordered:', productData, 'Quantity:', quantity);
  };

  return (
    // Container for the product detail, using Tailwind CSS for styling
    <div className="flex m-5 py-20 px-32">
      {/* Left section for the product image */}
      <div className="w-1/2 bg-cover bg-center h-96" style={{ backgroundImage: `url(${productData.image})` }}></div>

      {/* Right section for the product information */}
      <div className="w-1/2 p-5 ml-10">
        {/* Product name */}
        <h1 className="text-6xl font-bold mb-4">{productData.name}</h1>

        {/* Product price */}
        <p className="text-2xl text-green-500 mb-4">{`Price: $${productData.price}`}</p>

        {/* Product description */}
        <p className="mb-6">{productData.description}</p>
        
        {/* Quantity control section */}
        <div className="flex items-center mb-6">
          {/* Decrease quantity button */}
          <button onClick={handleDecrease} className="bg-gray-600 text-white border border-gray-400 p-2">-</button>
          
          {/* Display the current quantity */}
          <span className="mx-3 text-lg">{quantity}</span>
          
          {/* Increase quantity button */}
          <button onClick={handleIncrease} className="bg-black text-white border border-gray-400 p-2">+</button>
        </div>
        
        {/* Action buttons section */}
        <div className="flex space-x-4 justify-end">
          {/* Add to Cart button */}
          <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2">Add to Cart</button>
          
          {/* Order Now button */}
          <button onClick={handleOrderNow} className="bg-green-500 hover:bg-green-700 text-white px-4 py-2">Order Now</button>
        </div>
      </div>
    </div>
  );
};

// PropTypes to enforce the type and structure of productData
ProductDetail.propTypes = {
  productData: PropTypes.shape({
    name: PropTypes.string.isRequired,       // Product name should be a string and is required
    price: PropTypes.number.isRequired,      // Product price should be a number and is required
    description: PropTypes.string.isRequired,// Product description should be a string and is required
    image: PropTypes.string.isRequired,      // Product image URL should be a string and is required
  }).isRequired,
};

export default ProductDetail;
