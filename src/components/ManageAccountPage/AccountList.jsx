import { useState } from 'react';

const AccountList = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '123456789',
            address: '123 Main Street, City, Country',
            role: 'Administrator'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '987654321',
            address: '456 Elm Street, City, Country',
            role: 'Customer'
        },
    ]);

    const roles = ['Customer', 'Sale Staff', 'Caretaker Staff', 'Store Manager', 'Administrator'];

    const [editingId, setEditingId] = useState(null);
    const [editedUser, setEditedUser] = useState(null);

    const handleEditUser = (id) => {
        const userToEdit = users.find(user => user.id === id);
        setEditingId(id);
        setEditedUser(userToEdit);
    };

    const handleSaveUser = () => {
        const updatedUsers = users.map(user => {
            if (user.id === editedUser.id) {
                return editedUser;
            }
            return user;
        });
        setUsers(updatedUsers);
        setEditingId(null);
        setEditedUser(null);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditedUser(null);
    };

    const handleDeleteUser = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
            setUsers(users.filter(user => user.id !== id));
        }
    };

    const handleInputChange = (field, value) => {
        setEditedUser({ ...editedUser, [field]: value });
    };

    return (
        <div className="account-list p-40 overflow-x-auto">
            <h2 className="text-5xl text-center text-red-500 font-semibold mb-4">Danh sách người dùng</h2>
            <div className="max-w-full overflow-x-auto">
                <table className="border-collapse border border-gray-300 w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Họ và Tên</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Số Điện Thoại</th>
                            <th className="border px-4 py-2">Địa Chỉ</th>
                            <th className="border px-4 py-2">Vai Trò</th>
                            <th className="border px-4 py-2">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="border px-4 py-2">
                                    {editingId === user.id ? (
                                        <input
                                            type="text"
                                            value={editedUser.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            className="p-2 bg-gray-200 rounded-md w-full"
                                        />
                                    ) : (
                                        user.name
                                    )}
                                </td>
                                <td className="border px-4 py-2">
                                    {editingId === user.id ? (
                                        <input
                                            type="text"
                                            value={editedUser.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="p-2 bg-gray-200 rounded-md w-full"
                                        />
                                    ) : (
                                        user.email
                                    )}
                                </td>
                                <td className="border px-4 py-2">
                                    {editingId === user.id ? (
                                        <input
                                            type="text"
                                            value={editedUser.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                            className="p-2 bg-gray-200 rounded-md w-full"
                                        />
                                    ) : (
                                        user.phone
                                    )}
                                </td>
                                <td className="border px-4 py-2">
                                    {editingId === user.id ? (
                                        <input
                                            type="text"
                                            value={editedUser.address}
                                            onChange={(e) => handleInputChange('address', e.target.value)}
                                            className="p-2 bg-gray-200 rounded-md w-full"
                                        />
                                    ) : (
                                        user.address
                                    )}
                                </td>
                                <td className="border px-4 py-2">
                                    {editingId === user.id ? (
                                        <select
                                            value={editedUser.role}
                                            onChange={(e) => handleInputChange('role', e.target.value)}
                                            className="p-2 bg-gray-200 rounded-md w-full"
                                        >
                                            {roles.map((role, index) => (
                                                <option key={index} value={role}>{role}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        user.role
                                    )}
                                </td>
                                <td className="border px-4 py-2">
                                    {editingId === user.id ? (
                                        <div className='flex'>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSaveUser}>Lưu</button>
                                            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancelEdit}>Hủy</button>
                                        </div>
                                    ) : (
                                        <div className='flex'>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleEditUser(user.id)}>Sửa</button>
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteUser(user.id)}>Xóa</button>
                                        </div>
                                    )}
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AccountList;
