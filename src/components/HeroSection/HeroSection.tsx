import ButtonGradient from '@/app/small components/ButtonGradient'
import ButtonGreen from '@/app/small components/ButtonGreen'
import React from 'react'

const HeroSection = () => {
  return (
    <>
    <div style={{fontFamily:"Urbanist"}} className='flex mt-9 max-md:mt-0 max-xl:flex-col max-xl:gap-5'>
    <div className='flex justify-around flex-col w-1/2 max-xl:w-full max-xl:gap-5'>
    <div>
        <h1 className='hero-section-text'>One</h1>
        <h1 className='hero-section-text'>Stop</h1>
        <br/>
        <h1 className='hero-section-text'>Marketplace</h1>
        <br/>
        <h1 className='hero-section-text'>For</h1>
        <h1 style={{backgroundColor:"#00DC82"}} className='hero-section-text'>Influencers</h1>
    </div>
    <h1 style={{lineHeight:"46px"}} className='font-semibold pr-24 hero-section-paragraph max-xl:pr-0'>
    "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content All in One Hub."
    </h1>
    <div className='flex gap-5 items-center max-xl:mb-5'>
        <ButtonGreen title={"Demo Store"} />
        <ButtonGradient title={"Join Waitlist"}/>
    </div>
    </div>
    <div className='w-1/2 max-xl:w-full'>
     <img style={{width:"600px"}} className='ml-auto max-xl:m-auto max-xl:!w-full' src='/image-assets/hero-section-image.png'/>
    </div>
   
    </div>
    </>
  )
}

export default HeroSection