import React from 'react'

const Counter = () => {
  return (
    <div className='bg-gradient-to-br from-[#6538BA] via-[#7A42E8] to-[#8854CE] text-white py-10'>
        <h2 className='text-2xl font-bold md:text-3xl text-center'>Trusted by Millions, Built for You</h2>

      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-6 md:gap-14 lg:gap-20'>
          <div className='text-center space-y-2'>
            <p className='text-[0.8rem]'>Total Downloads</p>
            <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold'>29.6M</h3>
            <p className='text-[0.8rem]'>21% more than last month</p>
        </div>

        <div className='text-center space-y-2'>
            <p className='text-[0.8rem]'>Total Reviews</p>
            <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold'>906K</h3>
            <p className='text-[0.8rem]'>46% more than last month</p>
        </div>

        <div className='text-center space-y-2'>
            <p className='text-[0.8rem]'>Active Apps</p>
            <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold'>132+</h3>
            <p className='text-[0.8rem]'>31 more will Launch</p>
        </div>
      </div>
    </div>
  )
}

export default Counter