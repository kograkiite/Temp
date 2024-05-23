import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";

const TransactionHistory = () => {
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-05-01', description: 'Purchase food', amount: '$50', status: 'Completed' },
    { id: 2, date: '2023-05-03', description: 'Vet visit', amount: '$200', status: 'Pending' },
    { id: 3, date: '2023-05-07', description: 'Pet grooming', amount: '$30', status: 'Completed' },
  ]);

  const [reviewTransactionId, setReviewTransactionId] = useState(null);
  const [isReviewing, setIsReviewing] = useState(false);
  const [isReviewSuccess, setIsReviewSuccess] = useState(false);

  useEffect(() => {
    let timeout;
    if (isReviewSuccess) {
      timeout = setTimeout(() => {
        setIsReviewSuccess(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [isReviewSuccess]);

  const handleReviewTransaction = (id) => {
    setReviewTransactionId(id);
    setIsReviewing(true);
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

  const handleSubmitReview = () => {
    setIsReviewSuccess(true);
    setIsReviewing(false);
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
      <div className="md:w-full p-6 py-40">
        <h2 className="text-5xl text-center font-semibold mb-4">Lịch sử giao dịch</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Ngày</th>
              <th className="border px-4 py-2">Mô tả</th>
              <th className="border px-4 py-2">Số tiền</th>
              <th className="border px-4 py-2">Trạng thái</th>
              <th className="border px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{transaction.id}</td>
                <td className="border px-4 py-2">{transaction.date}</td>
                <td className="border px-4 py-2">{transaction.description}</td>
                <td className="border px-4 py-2">{transaction.amount}</td>
                <td className="border px-4 py-2">{transaction.status}</td>
                <td className="border px-4 py-2">
                  <a href={`/transaction-detail/${transaction.id}`} className="mr-2 text-blue-500 hover:underline">Chi tiết</a>
                </td>
                <td className="border px-4 py-2">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleReviewTransaction(transaction.id)}>Đánh giá</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isReviewing && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg px-10 py-10 sm:w-4/6 md:w-3/6">
              <h2 className="text-2xl font-semibold mb-4">Đánh giá giao dịch #{reviewTransactionId}</h2>
              <textarea
                className="w-full h-60 border rounded-md px-4 py-2 mb-4"
                placeholder="Nhập đánh giá của bạn..."
              ></textarea>
              <div className="flex justify-end">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSubmitReview}>Gửi</button>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsReviewing(false)}>Hủy</button>
              </div>
            </div>
          </div>
        )}
        {isReviewSuccess && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg px-10 py-10 sm:w-4/6 md:w-3/6 flex flex-col items-center">
              <FcCheckmark className="text-green-600 w-40 h-40 mb-4" />
              <div className="text-green-600 text-3xl mt-2 text-center">Đánh giá của bạn đã được gửi thành công!</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TransactionHistory;
