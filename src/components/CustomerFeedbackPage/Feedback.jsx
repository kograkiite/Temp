import React from 'react';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
    const navigate = useNavigate();

    const feedbackData = {
        customerName: 'John Doe',
        email: 'john.doe@example.com',
        content: 'Dịch vụ tuyệt vời! Tôi rất hài lòng với trải nghiệm của mình.',
        date: '2024-05-25'
    };

    const handleGoBack = () => {
        navigate('/booking-list');
    };

    return (
        <div className="flex justify-center items-center p-20 bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-semibold mb-4 text-center">Phản Hồi Khách Hàng</h2>
                <div className="mb-4">
                    <strong>Tên Khách Hàng:</strong> {feedbackData.customerName}
                </div>
                <div className="mb-4">
                    <strong>Email:</strong> {feedbackData.email}
                </div>
                <div className="mb-4">
                    <strong>Nội Dung Phản Hồi:</strong>
                    <p className='text-green-600'>{feedbackData.content}</p>
                </div>
                <div className="mb-4">
                    <strong>Ngày Phản Hồi:</strong> {feedbackData.date}
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                    onClick={handleGoBack}
                >
                    Trở Về
                </button>
            </div>
        </div>
    );
}

export default Feedback;
