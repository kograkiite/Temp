
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


function App() {


  return (
    <>
    <HomePage/>
    {/* <AboutPage/> */}
    {/* <ContactPage/> */}
    {/* <PetHotelPage/> */}
    {/* <PetServicePage/> */}
    {/* <ForDogPage/> */}
    {/* <ForCatPage/> */}
    <LoginPage/>
    <UserProfilePage/>
    <ChangePasswordPage/>
    </>
  )
}

export default App
