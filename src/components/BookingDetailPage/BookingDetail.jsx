import React from 'react';
import { useHistory } from 'react-router-dom';

const BookingDetail = ({ booking }) => {
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack(); 
    };

    return (
        <div className="booking-detail p-10">
            <h2 className="text-3xl font-semibold mb-4">Chi Tiết Đặt Lịch</h2>
            <div className="mb-4">
                <strong>Mã:</strong> {booking.code}
            </div>
            <div className="mb-4">
                <strong>Tên Dịch Vụ:</strong> {booking.serviceName}
            </div>
            <div className="mb-4">
                <strong>Ngày Booking:</strong> {booking.date}
            </div>
            <div className="mb-4">
                <strong>Tổng Tiền:</strong> {booking.totalPrice}
            </div>
            <div className="mb-4">
                <strong>Tên Thú Cưng:</strong> {booking.petName}
            </div>
            <div className="mb-4">
                <strong>Địa Chỉ:</strong> {booking.address}
            </div>
            <div className="mb-4">
                <strong>Trạng Thái Booking:</strong> {booking.status}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleGoBack}>
                Trở Về
            </button>
        </div>
    );
}

export default BookingDetail;
