
import Banner from '../components/HomePage_Staff/Banner'
import Footer from '../components/homePage/Footer'
import BookingDetail from '../components/BookingDetailPage/BookingDetail'

const BookingDetailPage = () => {
    const bookingData = {
        code: 'BK123',
        serviceName: 'Pet Grooming',
        date: '2024-05-25',
        totalPrice: 150000,
        petName: 'Max',
        address: '123 Main Street',
        status: 'Đã xác nhận'
    };
  return (
    <div>
        <Banner/>
        <BookingDetail booking={bookingData} />
        <Footer/>
    </div>
  )
}

export default BookingDetailPage