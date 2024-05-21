import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Cat Food',
    description: 'Nutritious food for your cat.',
    price: '$18 per bag',
  },
  {
    id: 2,
    name: 'Cat Toy',
    description: 'Interactive toy for playful cats.',
    price: '$12',
  },
  {
    id: 3,
    name: 'Cat Bed',
    description: 'Cozy bed for your cat to sleep in.',
    price: '$45',
  },
  {
    id: 4,
    name: 'Scratching Post',
    description: 'Durable scratching post for cats.',
    price: '$25',
  },
  {
    id: 5,
    name: 'Cat Collar',
    description: 'Adjustable collar with a bell.',
    price: '$7',
  },
  {
    id: 6,
    name: 'Cat Litter',
    description: 'Absorbent litter for cats.',
    price: '$15 per bag',
  },
  {
    id: 7,
    name: 'Cat Shampoo',
    description: 'Gentle shampoo for your cat\'s coat.',
    price: '$11',
  },
  {
    id: 8,
    name: 'Cat Sweater',
    description: 'Warm sweater for cold days.',
    price: '$20',
  },
  {
    id: 9,
    name: 'Cat Treats',
    description: 'Tasty treats for training and rewards.',
    price: '$9 per pack',
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
