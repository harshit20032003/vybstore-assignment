import InformationCard from '@/app/small components/InformationCard'
import React from 'react'

const InformationGrid = () => {
  return (
    <div style={{fontFamily:"Urbanist"}} className='flex items-center justify-around mt-20 max-xl:flex-col '>
        <h1 style={{color:"#00DC82"}} className='text-center w-2/5 font-medium max-xl:w-full max-xl:mb-5'>From Creation to Monetization: Vyb Store Has It All</h1>
        <div className='flex gap-5 max-sm:gap-2'>
        <div className='flex flex-col gap-5 max-sm:gap-2'>
         <div className='w-80 max-md:w-64 max-sm:w-44 max-xxs:w-40 '>
        <InformationCard title={'Trusted By Influencers'} imageUrl={'image-assets/d.png'} text={'A trusted platform for influencers to grow and earn'} />    
        </div>
        <div className='w-80 max-md:w-64 max-sm:w-44 max-xxs:w-40 information-card'>
        <InformationCard title={'Authentic Payment Partner'} imageUrl={'image-assets/a.png'} text={'Reliable, fast, and secure payments you can trust'} />    
        </div>    
        </div>
        <div className='flex flex-col gap-5 max-sm:gap-2'>
         <div className='w-80 max-md:w-64 max-sm:w-44 max-xxs:w-40 mt-3'>
        <InformationCard title={'Secured Data'} imageUrl={'image-assets/c.png'} text={'Advanced security measures to protect your valuable data'} />    
        </div>
        <div className='w-80 max-md:w-64 max-sm:w-44 max-xxs:w-40 '>
        <InformationCard title={'Monetize Your Influence'} imageUrl={'image-assets/b.png'} text={'Seamlessly turn your influence into consistent revenue'} />    
        </div>    
        </div>
        </div>
       
        
    </div>
  )
}

export default InformationGrid