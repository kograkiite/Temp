import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const UpdateUserProfile = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-3/4 py-6 bg-gray-100">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-semibold mb-6">Chỉnh sửa thông tin người dùng</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-4">
            <div className="w-1/2 pr-2">
              <label className="block mb-2 font-light" htmlFor="firstName">Tên:</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="p-2 bg-gray-200 rounded-md w-full"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block mb-2 font-light" htmlFor="lastName">Họ:</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="p-2 bg-gray-200 rounded-md w-full"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-light" htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              className="p-2 bg-gray-200 rounded-md w-full"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-light" htmlFor="phoneNumber">Số điện thoại:</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              className="p-2 bg-gray-200 rounded-md w-full"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-light" htmlFor="address">Địa chỉ:</label>
            <input
              id="address"
              name="address"
              type="text"
              className="p-2 bg-gray-200 rounded-md w-full"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="text-right mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Lưu thay đổi
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 ml-2"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
