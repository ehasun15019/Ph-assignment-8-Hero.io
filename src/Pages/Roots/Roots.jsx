import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Footer2 from '../../Components/Footer/Footer2';
import { assets } from '../../assets/assets';
import './Roots.css'

const Roots = () => {
  const [loadings, setLoadings] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoadings(true);
    const timeout = setTimeout(() => setLoadings(false), 700); // fake delay
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

       {loadings && (
        <div className="fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#8A4FFF] via-[#4FC3FF] to-[#8A4FFF] animate-[slide_1s_linear_infinite] z-50"></div>
      )}

      <div className='flex-1 loading-animated-text'>
        {loadings ? (
          <div className="flex justify-center items-center h-[70vh]">
            {/* Custom Loading Text with Spinning Logo */}
            <h2 className="text-3xl font-semibold flex items-center text-blue-600">
              L
              <img
                src={assets.logo}
                alt="loading"
                className="w-8 h-8 mx-1 animate-spin-smooth"
              />
              ading
            </h2>
          </div>
        ) : (
          <Outlet />
        )}
      </div>

      <Footer />
      <Footer2 />
    </div>
  );
};

export default Roots;
