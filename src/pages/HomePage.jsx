import React from 'react'
import Banner from '../component/homePage/Banner'
import BannerBottom from '../component/homePage/BannerBottom'
import TestApi from '../component/homePage/TestApi'

const HomePage = () => {
  return (
    <div>
        <Banner/>
        <BannerBottom/>
        <TestApi/>
    </div>
  )
}

export default HomePage