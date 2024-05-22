import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PetList = () => {
    const navigate = useNavigate();

    // Dummy pet data for demonstration
    const [pets, setPets] = useState([
        { id: 1, name: 'Max', species: 'Dog', gender: 'Male' },
        { id: 2, name: 'Whiskers', species: 'Cat', gender: 'Female' },
        { id: 3, name: 'Buddy', species: 'Dog', gender: 'Male' }
    ]);

    useEffect(() => {
        // Fetch pet data or any other initialization logic
    }, []);

    const handleUpdatePet = (id) => {
        // Logic for updating pet
    }

    const handleDeletePet = (id) => {
        // Logic for deleting pet
    }

    const handleAddPet = () => {
        // Logic for adding a new pet
    }

    const handleClickUserProfile = () => {
        navigate('/user-profile');
    }

    const handleClickPetList = () => {
        navigate('/pet-list');
    }

    const handleClickTransactionHistory = () => {
        navigate('/transaction-history');
    }

    const handleClickLogOut = () => {
        navigate('/');
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:h-15 bg-gray-200 w-full md:w-1/3 p-4 flex flex-col justify-center px-10 items-center md:items-start">
                <h2 className="text-4xl font-semibold mb-4">Tài khoản</h2>
                <ul className='list-disc pl-4'>
                    <li className="mb-2 text-gray-500 cursor-pointer hover:text-blue-500 duration-500" onClick={handleClickUserProfile}>Thông tin người dùng</li>
                    <li className="mb-2 text-gray-500 cursor-pointer hover:text-blue-500 duration-500" onClick={handleClickPetList}>Danh sách thú cưng</li>
                    <li className="mb-2 text-gray-500 cursor-pointer hover:text-blue-500 duration-500" onClick={handleClickTransactionHistory}>Lịch sử giao dịch</li>
                    <li className="mb-2 text-gray-500 cursor-pointer hover:text-blue-500 duration-500" onClick={handleClickLogOut}>Đăng xuất</li>
                </ul>
            </div>
            <div className="md:w-full p-4 py-40 px-6">
                <h2 className="text-5xl text-center font-semibold mb-4">Danh sách thú cưng</h2>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">STT</th>
                            <th className="border px-4 py-2">Tên</th>
                            <th className="border px-4 py-2">Chủng loại</th>
                            <th className="border px-4 py-2">Giới tính</th>
                            <th className="border px-4 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {pets.map((pet, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{pet.name}</td>
                                <td className="border px-4 py-2">{pet.species}</td>
                                <td className="border px-4 py-2">{pet.gender}</td>
                                <td className="border px-4 py-2">
                                    <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleUpdatePet(pet.id)}>Cập nhật</button>
                                </td>
                                <td className="border px-4 py-2">
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeletePet(pet.id)}>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-end mt-4">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddPet}>Thêm thú cưng</button>
                </div>
            </div>
        </div>
    );
}

export default PetList;
