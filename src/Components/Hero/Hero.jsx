import React from 'react'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <div className='mt-9 px-10'>
        <div className='text-center space-y-4'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold '>We Build <br /> <span className='bg-clip-text text-transparent bg-gradient-to-br from-[#6538BA] via-[#7A42E8] to-[#8854CE]'>Productive</span> Apps</h1>

            <p className='text-gray-600 text-[0.8rem] md:text-[1rem]'>
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
        </div>

        <div className='flex flex-col md:flex-row gap-2 justify-center items-center mt-6'>
            <button>
                <a href="https://play.google.com/store/games?hl=en_US&pli=1" target='_blank' className='flex items-center gap-3 font-semibold rounded border border-gray-400 w-[150px] py-2 px-2'>
                    <img src={assets.pStore} alt="play store" />
                    <span>Play Store</span>
                </a>
            </button>

            <button >
                <a href="https://apps.apple.com/us/app/apple-store/id375380948" target='_blank' className='flex items-center gap-3 font-semibold rounded border border-gray-400 w-[150px] py-2 px-2'>
                    <img src={assets.aStore} alt="app store" />
                    <span>App Store</span>
                </a>
            </button>
        </div>

        <div className="hero-image flex justify-center">
            <img className='w-[350px] md:w-[550px] lg:w-[650px] mt-10' src={assets.hero} alt="hero" />
        </div>
    </div>
  )
}

export default Hero