import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Steps from '../components/Steps'
import Courses from '../components/Courses'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import styles from '../styles/Navbar.module.css'

const Home = () => {
  return (
    <>
      <Navbar />
          <div className={styles.main}>
          <Hero />
        <Features />
        <Steps />
        <Courses />
        <Testimonial/>
      </div>
      <Footer/>
      </>
  )
}

export default Home
