import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Dog Food',
    description: 'Nutritious food for your dog.',
    price: '$20 per bag',
  },
  {
    id: 2,
    name: 'Dog Leash',
    description: 'Durable leash for daily walks.',
    price: '$15',
  },
  {
    id: 3,
    name: 'Dog Bed',
    description: 'Comfortable bed for your dog to sleep in.',
    price: '$50',
  },
  {
    id: 4,
    name: 'Chew Toy',
    description: 'Fun chew toy for your dog.',
    price: '$10',
  },
  {
    id: 5,
    name: 'Dog Collar',
    description: 'Adjustable collar with a bell.',
    price: '$8',
  },
  {
    id: 6,
    name: 'Dog Shampoo',
    description: 'Gentle shampoo for your dog\'s coat.',
    price: '$12',
  },
  {
    id: 7,
    name: 'Dog Sweater',
    description: 'Warm sweater for cold days.',
    price: '$25',
  },
  {
    id: 8,
    name: 'Dog Harness',
    description: 'Comfortable harness for your dog.',
    price: '$30',
  },
  {
    id: 9,
    name: 'Dog Treats',
    description: 'Tasty treats for training and rewards.',
    price: '$10 per pack',
  },
];

const ProductList = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product-detail/${id}`);
  };

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow p-5 cursor-pointer hover:bg-gray-100 transition"
            onClick={() => handleProductClick(product.id)}
          >
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="mb-2">{product.description}</p>
            <p className="font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
