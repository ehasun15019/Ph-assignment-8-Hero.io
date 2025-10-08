import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footer2 from '../../Components/Footer/Footer2'
import ErrorPageDesign from './ErrorPageDesign'

const ErrorPage = () => {
  return (
    <div>
        <Navbar />
        <ErrorPageDesign />
        <Footer />
        <Footer2 />
    </div>
  )
}

export default ErrorPage