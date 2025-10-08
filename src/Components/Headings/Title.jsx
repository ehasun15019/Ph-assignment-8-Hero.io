import React from 'react'

const Title = ({heading, title}) => {
  return (
    <div className=''>
        <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl'>
            {heading}
        </h2>
        
        <p className='text-gray-600 pt-3'>
            {title}
        </p>
    </div>
  )
}

export default Title