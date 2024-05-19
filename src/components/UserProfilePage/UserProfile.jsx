import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Main St, Anytown, USA',
  });

  useEffect(() => {
  }, []);

  const handleUpdateInfo = () => {
    console.log('Update info clicked');
  };

  const handleChangePassword = () => {
    console.log('Change password clicked');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-semibold mb-6">Thông tin người dùng</h2>
        <div className="flex justify-between mb-4">
          <div className="w-1/2 pr-2">
            <label className="block mb-2 font-bold">Tên:</label>
            <p className="p-2 bg-gray-200 rounded-md">{user.firstName}</p>
          </div>
          <div className="w-1/2 pl-2">
            <label className="block mb-2 font-bold">Họ:</label>
            <p className="p-2 bg-gray-200 rounded-md">{user.lastName}</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Email:</label>
          <p className="p-2 bg-gray-200 rounded-md">{user.email}</p>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Số điện thoại:</label>
          <p className="p-2 bg-gray-200 rounded-md">{user.phoneNumber}</p>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Địa chỉ:</label>
          <p className="p-2 bg-gray-200 rounded-md">{user.address}</p>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleUpdateInfo}
            className="w-1/2 bg-green-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-green-700 transition duration-300"
          >
            Cập nhật thông tin
          </button>
          <button
            onClick={handleChangePassword}
            className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded-md ml-2 hover:bg-blue-700 transition duration-300"
          >
            Đổi mật khẩu
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
