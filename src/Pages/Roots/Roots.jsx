import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footer2 from '../../Components/Footer/Footer2'
import { Outlet, useNavigation } from 'react-router'

const Roots = () => {
  const navigation = useNavigation();

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      {/* --- Loading Bar at Top --- */}
      {navigation.state === "loading" && (
        <div className="fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#8A4FFF] via-[#4FC3FF] to-[#8A4FFF] animate-[slide_1s_linear_infinite] z-50"></div>
      )}

      {/* --- Page Content --- */}
      <div className='flex-1'>
        {navigation.state === "loading" ? (
          <div className='flex justify-center items-center h-[70vh]'>
            <span className="loading loading-spinner text-primary scale-150"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </div>

      <Footer />
      <Footer2 />
    </div>
  )
}

export default Roots
