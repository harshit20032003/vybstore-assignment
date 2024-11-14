import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
const InfluencerCard:React.FC<{name:string,imgUrl:string}> = ({name,imgUrl}) => {
    
  return (
    <>
        <div className='relative max-sm:hidden'>
 <div className='min-w-72 min-h-72 max-xl:min-w-52 max-xl:min-h-52 max-md:min-w-40 max-md:min-h-40 max-sm:min-w-28 max-sm:min-h-28 rounded-full z-10 absolute top-0 left-0 transition-all influencer-card-image hover:-translate-y-3 cursor-pointer hover:-translate-x-2' style={{backgroundImage:`url(${imgUrl})`,backgroundSize:"cover"}}>
        <div className='w-full h-72 max-xl:h-52 max-md:h-40 max-sm:h-28 grid invisible place-items-center influencer-card-link'>
        <div className='bg-white rounded-md text-black flex px-3 py-1 gap-2 items-center'>
        <h4 className='font-semibold'>{name}</h4>
        <div className='text-lg'><MdOutlineArrowOutward/></div>
        </div>
        </div>
        </div>       
    <div style={{minHeight:"284px",minWidth:"284px"}} className='ml-0.5 max-xl:!min-w-52 max-xl:!min-h-52 max-md:!min-w-40 max-md:!min-h-40 max-sm:!min-w-28 max-sm:!min-h-28 rounded-full influencer-card relative'>
        
    </div>        

    </div>
    <div  className='hidden min-w-40 min-h-40 max-h-40 max-sm:min-w-28 max-sm:min-h-28 rounded-full transition-all cursor-pointer max-sm:block' style={{backgroundImage:`url(${imgUrl})`,backgroundSize:"cover",filter:"none"}}>
       
        </div>  
    </>


  )
}

export default InfluencerCard