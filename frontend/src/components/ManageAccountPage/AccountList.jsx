import { useEffect, useState } from 'react';
import { Table, Input, Select, Button, message } from 'antd';
import axios from 'axios';
const { Option } = Select;

const AccountList = () => {
    const [editingId, setEditingId] = useState(null);
    const [editedUser, setEditedUser] = useState(null);
    const [roles] = useState(['Customer', 'Sale Staff', 'Caretaker Staff', 'Store Manager', 'Administrator']);
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/accounts/all', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setAccounts(response.data.accounts);
            } catch (error) {
                console.error('Error fetching accounts:', error);
            }
        };

        fetchAccounts();
    }, []);

    const handleCancel = () => {
        setEditingId(null);
        setEditedUser(null);
    };

    const handleEditUser = (id) => {
        const userToEdit = accounts.find(user => user.id === id);
        setEditingId(id);
        setEditedUser(userToEdit);
    };

    const handleSaveUser = async () => {
        // Validation to ensure no fields are empty
        if (!editedUser.fullname || !editedUser.email || !editedUser.phone || !editedUser.address || !editedUser.role) {
            alert('All fields are required');
            return;
        }

        try {
            const response = await axios.put(`http://localhost:3001/api/accounts/${editedUser.id}`, editedUser, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            // Assuming your API returns the updated user data, update the local state with it
            const updatedUser = response.data.user;
            const updatedUsers = accounts.map(user => {
                if (user.id === updatedUser.id) {
                    return updatedUser;
                }
                return user;
            });
            setAccounts(updatedUsers);
            setEditingId(null);
            setEditedUser(null);
        } catch (error) {
            console.error('Error updating user:', error);
            message.error('Failed to update user. Please try again.');
        }
    };

    const handleInputChange = (field, value) => {
        setEditedUser({ ...editedUser, [field]: value });
    };

    const columns = [
        {
            title: 'Họ và Tên',
            dataIndex: 'fullname',
            key: 'fullname',
            render: (text, record) => (
                editingId === record.id ? (
                    <Input
                        value={editedUser.fullname}
                        onChange={(e) => handleInputChange('fullname', e.target.value)}
                    />
                ) : (
                    text
                )
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (text, record) => (
                editingId === record.id ? (
                    <Input
                        value={editedUser.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                ) : (
                    text
                )
            ),
        },
        {
            title: 'Số Điện Thoại',
            dataIndex: 'phone',
            key: 'phone',
            render: (text, record) => (
                editingId === record.id ? (
                    <Input
                        value={editedUser.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                ) : (
                    text
                )
            ),
        },
        {
            title: 'Địa Chỉ',
            dataIndex: 'address',
            key: 'address',
            render: (text, record) => (
                editingId === record.id ? (
                    <Input
                        value={editedUser.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                ) : (
                    text
                )
            ),
        },
        {
            title: 'Vai Trò',
            dataIndex: 'role',
            key: 'role',
            render: (text, record) => (
                editingId === record.id ? (
                    <Select
                        value={editedUser.role}
                        onChange={(value) => handleInputChange('role', value)}
                        style={{ width: '100%' }} // Apply custom width style
                    >
                        <Option value="">Select Role</Option>
                        {roles.map((role, index) => (
                            <Option key={index} value={role}>{role}</Option>
                        ))}
                    </Select>
                ) : (
                    text
                )
            ),
        },
        {
            title: 'Hành Động',
            key: 'action',
            render: (text, record) => (
                editingId === record.id ? (
                    <>
                        <div className="flex space-x-2">
                            <Button type="primary" onClick={handleSaveUser}>Lưu</Button>
                            <Button onClick={handleCancel}>Hủy</Button>
                        </div>
                    </>
                ) : (
                    <Button type="primary" onClick={() => handleEditUser(record.id)}>Cập nhật</Button>
                )
            ),
        },
    ];

    return (
        <div className="account-list p-4 md:p-10 overflow-x-auto">
            <h2 className="text-5xl text-center text-red-500 font-semibold mb-4">Danh sách người dùng</h2>
            <div className="max-w-full overflow-x-auto">
                <Table dataSource={accounts} columns={columns} rowKey="id" />
            </div>
        </div>
    );
}

export default AccountList;
