import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router'

const ErrorPageDesign = () => {
  return (
    <div className='py-12 px-10 text-center'>
        <div className='flex flex-col justify-center items-center'>
            <img src={assets.error} alt="error" className='w-[200px] md:w-[350px] lg:w-[450px]' />
            <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Oops, page not found!</h3>
            <p className='text-gray-600 pb-6 pt-1'>The page you are looking for is not available.</p>
            <Link to='/' className='bg-gradient-to-br from-[#6538BA] via-[#7A42E8] to-[#8854CE] px-8 py-3 rounded text-white'>Go Back!</Link>
        </div>
    </div>
  )
}

export default ErrorPageDesign