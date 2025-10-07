import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footer2 from '../../Components/Footer/Footer2'
import { Outlet } from 'react-router'

const Roots = () => {
  return (
    <div className=''>
       <Navbar />

       <div className='flex-1'>
        <Outlet></Outlet>
       </div>

       <Footer />
       <Footer2 />
    </div>
  )
}

export default Roots