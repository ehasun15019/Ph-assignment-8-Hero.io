import React from 'react'
import Title from '../../Components/Headings/Title'
import AllAppsData from '../../Components/AllAppsData/AllAppsData'

const Apps = () => {
  return (
    <div className='px-10'>
        <div className="header pt-11 flex justify-center text-center">
            <Title heading="Our All Applications" title="Explore All Apps on the Market developed by us. We code for Millions" />
        </div>

        <div className='my-3 mb-9'>
            <AllAppsData />
        </div>
    </div>
  )
}

export default Apps