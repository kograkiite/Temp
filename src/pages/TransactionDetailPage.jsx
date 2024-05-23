import React from 'react'
import Banner from '../components/UserProfilePage/Banner'
import Footer from '../components/homePage/Footer'
import TransactionDetail from '../components/TransactionDetailPage/TransactionDetail'

const TransactionDetailPage = () => {
  return (
    <div>
        <Banner/>
        <TransactionDetail/>
        <Footer/>
    </div>
  )
}

export default TransactionDetailPage