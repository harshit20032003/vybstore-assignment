"use client"

import InfluencerCard from '@/app/small components/InfluencerCard'
import React,{useState,useRef} from 'react'

const OurInfluencerGrid = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e:any) => {
    if(containerRef.current){
         setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);   
    }

  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e:any) => {
    if (!isDragging) return;
    e.preventDefault();
    if(containerRef.current){
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    containerRef.current.scrollLeft = scrollLeft - walk;
    }

  };
  return (
    <div className='mt-10'>
    <h1 style={{color:"#00DC82",fontFamily:"Urbanist"}} className='w-fit m-auto font-medium'>Our Influencers</h1>
    <div ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove} className='overflow-x-scroll select-none flex justify-evenly gap-4 py-6 influencer-grid max-xl:gap-5'>

    <InfluencerCard name={"Samira"} imgUrl={'image-assets/influencer1.jfif'}/>
    <InfluencerCard name={"Jay"} imgUrl={"image-assets/influencer2.jfif"}/>
    <InfluencerCard name={"Samira"} imgUrl={"image-assets/influencer3.jfif"}/>
    <InfluencerCard name={"Jay"} imgUrl={"image-assets/influencer4.jfif"}/>
    
    </div>    
    </div>

  )
}

export default OurInfluencerGrid