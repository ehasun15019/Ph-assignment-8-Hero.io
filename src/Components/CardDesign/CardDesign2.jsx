import React from 'react'
import { assets } from '../../assets/assets'

const CardDesign2 = ({image, title, downloads, ratingAvg, size, onUninstall}) => {
  return (
    <div>
        <div className="card-section bg-white mb-4 mt-3 py-3 px-5 rounded flex justify-between items-center">
           <div className='flex gap-3 items-center'>
             <div className="image-sec w-[40px]">
                <img src={image} alt={title} />
             </div>

             <div className="content flex flex-col">
                <h4 className='text-[0.9rem]'>{title}</h4>

               <div className='flex gap-3'>
                    <div className='flex gap-2 items-center'>
                        <img src={assets.download} alt="download" className='w-4' />
                        <p className='text-[0.8rem]'>{downloads} M</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <img src={assets.star} alt="ratingAvg" className='w-4' />
                        <p className='text-[0.8rem]'>{ratingAvg}</p>
                    </div>

                    <div>
                        <p className='text-gray-400'>{size} MB</p>
                    </div>
               </div>
             </div>
           </div>

           <div className="button-sec">
                <button onClick={onUninstall} className='bg-[#00D390] px-4 py-1 text-white rounded'>
                    <p>Uninstall</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CardDesign2