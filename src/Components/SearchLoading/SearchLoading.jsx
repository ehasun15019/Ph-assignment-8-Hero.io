import React from 'react'
import { assets } from '../../assets/assets'
import './SearchLoading.css'


const SearchLoading = () => {
  return (
    <div className='flex justify-center items-center gap-3'>
      <img src={assets.logo} alt="logo" className='w-7 h-7 animated-loading' />
      <h2 className='bg-clip-text text-transparent bg-gradient-to-br from-[#6538BA] via-[#7A42E8] to-[#8854CE]'>Searching ...</h2>
    </div>
  )
}

export default SearchLoading
