"use client"

import CarouselCard from '@/app/small components/CarouselCard';
import React,{useState,useRef} from 'react'
const TravelCarousel = () => {
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

    const travelData =[{
        title:"Darjeeling Itinerary",
        state:"West Bengal",
        imgUrl:"/image-assets/i3.png"
    },
    {
        title:"Munnar Itinerary",
        state:"Kerela",
        imgUrl:"/image-assets/i1.png"
    },
    {
        title:"Delhi Itinerary",
        state:"Delhi",
        imgUrl:"/image-assets/i2.png"
    },
    {
        title:"Delhi Itinerary",
        state:"Delhi.",
        imgUrl:"/image-assets/i2.png"
    },
    {
        title:"Delhi Itinerary",
        state:"Delhi..",
        imgUrl:"/image-assets/i2.png"
    },
]
    

  return (
    <div className='mt-10'>
    <h1 className='w-fit m-auto text-center font-medium'>Explore Our Curated Travel Itineraries</h1>
    <div ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove} className='overflow-x-scroll px-4 select-none flex justify-evenly gap-4 py-6 influencer-grid max-xl:gap-5'>
        {
            travelData.map((data)=>{
                return <div key={data.state}>
                    <CarouselCard title={data.title} state={data.state} imgUrl={data.imgUrl}/>
                </div>
            })
        }
    
    
    </div>    
    </div>
  )
}

export default TravelCarousel