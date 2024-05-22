
import './App.css'
import HomePage from './pages/HomePage'
import "./styles/bootstrap.css"
import "./styles/flexslider.css"
import "./styles/style.css"
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PetHotelPage from './pages/PetHotelPage'
import PetServicePage from './pages/PetServicePage'
import ForDogPage from './pages/ForDogPage'
import ForCatPage from './pages/ForCatPage'
import LoginPage from './pages/LoginPage'
import UserProfilePage from './pages/UserProfilePage'
import ChangePasswordPage from './pages/ChangePasswordPage'
import UpdateUserProfilePage from './pages/UpdateUserProfilePage'
import { Route, Routes } from 'react-router-dom'
import PostLogin from './pages/PostLogin'
import ProductDetailPage from './pages/ProductDetailPage'
import PetListPage from './pages/PetListPage'
import TransactionHistoryPage from './pages/TransactionHistoryPage'


function App() {


  return (
    <>
    {/* <HomePage/>
    <AboutPage/>
    <ContactPage/>
    <PetHotelPage/>
    <PetServicePage/>
    <ForDogPage/>
    <ForCatPage/>
    <LoginPage/>
    <UserProfilePage/>
    <ChangePasswordPage/>
    <UpdateUserProfilePage/> */}
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/home' element={<PostLogin/>}/>
      <Route path='/for-dog' element={<ForDogPage/>}/>
      <Route path='/for-cat' element={<ForCatPage/>}/>
      <Route path='/pet-service' element={<PetServicePage/>}/>
      <Route path='/pet-hotel' element={<PetHotelPage/>}/>
      <Route path='/user-profile' element={<UserProfilePage/>}/>
      <Route path='/change-password' element={<ChangePasswordPage/>}/>
      <Route path='/update-user-profile' element={<UpdateUserProfilePage/>}/>
      <Route path='/product-detail/:id' element={<ProductDetailPage/>}/>
      <Route path='/pet-list' element={<PetListPage/>}/>
      <Route path='/transaction-history' element={<TransactionHistoryPage/>}/>
    </Routes>
    </>
  )
}

export default App
