import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    name: 'Grooming',
    description: 'Comprehensive grooming services for your pet.',
    price: '$50',
  },
  {
    id: 2,
    name: 'Vet Consultation',
    description: 'Professional veterinary consultation.',
    price: '$30',
  },
  {
    id: 3,
    name: 'Pet Boarding',
    description: 'Safe and comfortable boarding for your pet.',
    price: '$70 per night',
  },
  {
    id: 4,
    name: 'Training',
    description: 'Expert training sessions for your pet.',
    price: '$100',
  },
  {
    id: 5,
    name: 'Dental Care',
    description: 'Complete dental care for your pet.',
    price: '$80',
  },
  {
    id: 6,
    name: 'Vaccination',
    description: 'Essential vaccinations for your pet.',
    price: '$40',
  },
  {
    id: 7,
    name: 'Pet Taxi',
    description: 'Convenient pet transportation services.',
    price: '$60',
  },
  {
    id: 8,
    name: 'Pet Spa',
    description: 'Luxury spa services for your pet.',
    price: '$120',
  },
  {
    id: 9,
    name: 'Pet Photography',
    description: 'Professional photography sessions for your pet.',
    price: '$150',
  },
];

const ServiceList = () => {
  const navigate = useNavigate();

  const handleServiceClick = (id) => {
    navigate(`/service-detail/${id}`);
  };

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow p-5 cursor-pointer hover:bg-gray-100 transition"
            onClick={() => handleServiceClick(service.id)}
          >
            <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
            <p className="mb-2">{service.description}</p>
            <p className="font-bold">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
