import React from 'react'
import TravelCarousel from '../TravelCarousel/TravelCarousel'

const TravelSection = () => {
  return (
    <div style={{fontFamily:"Urbanist"}} className='mt-10 font-medium bg-black rounded-2xl'>
        <div className='py-36 rounded-2xl grid place-items-center max-md:py-20 max-xs:pt-20 max-xs:pb-10' style={{backgroundImage:"url(/image-assets/travel-section-1.png)",backgroundPosition:"center",backgroundSize:"cover"}}>
        <div>
          <div style={{fontSize:"140px"}} className='w-fit m-auto max-md:!text-8xl max-xs:!text-7xl'>TRAVEL</div>
          <h2 style={{padding:"0 15%"}} className='text-center max-md:text-2xl max-xs:text-lg max-xs:!px-7'>Turn your travel experience into itinerary, travel package with VYB Store and share it with your true followers.</h2> 
        </div>
        
        </div>
        <div>
            <TravelCarousel/>
        </div>
        <div style={{backgroundImage:`url(/image-assets/travel-section-2.png)`,backgroundSize:"contain",backgroundPositionY:"100px",backgroundRepeat:"no-repeat"}} className='mt-5 rounded-2xl'>
            <h1 className='w-fit m-auto text-center'>How to list?</h1>
            <div style={{backgroundImage:`url(/image-assets/vector-1.svg)`,backgroundSize:"100%",backgroundRepeat:"no-repeat",backgroundPosition:"center"}} className='h-96 py-96 max-lg:py-72 max-md:py-52 max-xs:h-72 max-xs:py-0 '>
      
            </div>
            <h2 className='w-fit m-auto text-center pb-10 px-0.5 max-xs:text-xl'>You Curate Experience,  We Make It Happen</h2>
        </div>
    </div>
  )
}

export default TravelSection