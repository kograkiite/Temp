import React from 'react'
import Footer from '../components/homePage/Footer'
import Banner from '../components/UserProfilePage/Banner'
import UserProfile from '../components/UserProfilePage/UserProfile'

const UserProfilePage = () => {
  return (
    <div>
        <Banner/>
        <UserProfile/>
        <Footer/>
    </div>
  )
}

export default UserProfilePage