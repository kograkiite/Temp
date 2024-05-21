import React from 'react';
import { useNavigate } from 'react-router-dom';

const hotels = [
  {
    id: 1,
    name: 'Luxury Suite',
    description: 'A spacious suite with all the comforts of home.',
    price: '$100 per night',
  },
  {
    id: 2,
    name: 'Standard Room',
    description: 'A comfortable room for your pet.',
    price: '$70 per night',
  },
  {
    id: 3,
    name: 'Economy Room',
    description: 'A budget-friendly option for your pet.',
    price: '$50 per night',
  },
  {
    id: 4,
    name: 'Outdoor Kennel',
    description: 'An outdoor space for pets who love the fresh air.',
    price: '$40 per night',
  },
  {
    id: 5,
    name: 'Indoor Kennel',
    description: 'An indoor space for pets who prefer staying inside.',
    price: '$45 per night',
  },
  {
    id: 6,
    name: 'Family Suite',
    description: 'A large suite for families with multiple pets.',
    price: '$150 per night',
  },
  {
    id: 7,
    name: 'Play Area Access',
    description: 'Daily access to our play area.',
    price: '$20 per day',
  },
  {
    id: 8,
    name: 'Private Garden Room',
    description: 'A room with a private garden for your pet to enjoy.',
    price: '$120 per night',
  },
  {
    id: 9,
    name: 'Penthouse Suite',
    description: 'A top-floor suite with a great view.',
    price: '$200 per night',
  },
];

const HotelList = () => {
  const navigate = useNavigate();

  const handleHotelClick = (id) => {
    navigate(`/hotel-detail/${id}`);
  };

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow p-5 cursor-pointer hover:bg-gray-100 transition"
            onClick={() => handleHotelClick(hotel.id)}
          >
            <h2 className="text-2xl font-bold mb-2">{hotel.name}</h2>
            <p className="mb-2">{hotel.description}</p>
            <p className="font-bold">{hotel.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
