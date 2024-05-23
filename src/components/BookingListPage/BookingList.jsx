import { useState } from 'react';

const BookingList = () => {
    const [bookings, setBookings] = useState([
        {
            id: 1,
            code: 'BK123',
            date: '2024-05-24',
            total: '$100',
            status: 'Đã xác nhận'
        },
        {
            id: 2,
            code: 'BK456',
            date: '2024-05-25',
            total: '$150',
            status: 'Chờ xác nhận'
        },
    ]);

    return (
        <div className="p-44">
            <h2 className="text-5xl text-center text-red-500 font-semibold mb-4">Danh sách đặt lịch của khách hàng</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Mã đặt lịch</th>
                        <th className="border px-4 py-2">Ngày đặt</th>
                        <th className="border px-4 py-2">Tổng tiền</th>
                        <th className="border px-4 py-2">Trạng thái</th>
                        <th className="border px-4 py-2">Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td className="border px-4 py-2">{booking.code}</td>
                            <td className="border px-4 py-2">{booking.date}</td>
                            <td className="border px-4 py-2">{booking.total}</td>
                            <td className="border px-4 py-2">{booking.status}</td>
                            <td className="border px-4 py-2">
                                <a href={`/booking-detail/${booking.id}`} className="text-blue-500 hover:underline">Chi tiết</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookingList;
