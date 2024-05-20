import React from 'react'

import UserProfile from '../components/UserProfilePage/UserProfile'
import Banner from '../components/UserProfilePage/Banner'
import Footer from '../components/homePage/Footer'

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