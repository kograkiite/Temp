import React from 'react'
import Banner from '../components/AboutPage/Banner'
import Welcome from '../components/AboutPage/Welcome'
import Footer from '../components/homePage/Footer'
import { Stats } from '../components/AboutPage/Stats'
import { Team } from '../components/AboutPage/Team'

const About = () => {
  return (
    <div>
        <Banner/>
        <Welcome/>
        <Stats/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default About