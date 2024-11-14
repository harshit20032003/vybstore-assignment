"use client"

import LoginForm from '@/app/small components/LoginForm';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const InformationCards = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [cardHeight, setCardHeight] = useState<number>();
    const cardContainerRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const router = useRouter()
    const handleMouseDown = (e: React.MouseEvent) => {
      if (cardContainerRef.current) {
        setIsDragging(true);
        setStartY(e.pageY - cardContainerRef.current.offsetTop);
        setScrollTop(cardContainerRef.current.scrollTop);
      }
    };
  
    const handleMouseLeave = () => {
      setIsDragging(false);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging || !cardContainerRef.current) return;
      e.preventDefault();
      const y = e.pageY - cardContainerRef.current.offsetTop;
      const walk = (y - startY) * 2; 
      cardContainerRef.current.scrollTop = scrollTop - walk;
    };
  
    useEffect(() => {
      if (cardRef.current) {
        setCardHeight(cardRef.current.scrollHeight + 60);
      }
    }, []);

  return (
    <div ref={cardContainerRef}
    onMouseDown={handleMouseDown}
    onMouseLeave={handleMouseLeave}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}  style={{height:`${cardHeight?cardHeight:335}px`,minWidth:"800px",maxWidth:"800px"}} className='overflow-y-scroll overflow-x-hidden pl-1 pt-2.5 card-grid select-none mx-auto my-20 z-50'>
        <div ref={cardRef} style={{backgroundColor:"#b04c4c",transform:"rotate(-1deg)"}} className='flex sticky top-0 items-center rounded-2xl py-4 px-5 gap-5'>
        <div className=''>
            <h2 className='mb-5 max-md:text-2xl'>Sign Up and create your own store hassel-free.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quis quod itaque deleniti maiores impedit voluptates numquam odio voluptatibus ea, nobis incidunt natus officia aliquid modi ullam! Quam, accusamus reprehenderit?</p>
        </div>
        <div onClick={()=>{router.push("/login")}} style={{backgroundColor:"#181818",backgroundImage:"url(image-assets/login-page.png)",backgroundRepeat:"no-repeat",backgroundPosition:"center"}} className='min-w-64 h-72 rounded-2xl cursor-pointer'>
        
        </div>
        </div>
        <div style={{backgroundColor:"#60d46c",transform:"rotate(1deg)"}} className='flex mt-5 sticky top-0 items-center rounded-2xl py-4 px-5'>
        <div className=''>
            <h2 className='mb-5 max-md:text-2xl'>"Monetize your influencer status: Earn money adding real value to your true followers!"</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quis quod itaque deleniti maiores impedit</p>
        </div>
        <div className='min-w-64 h-72 rounded-2xl grid place-items-center'>
        <img width={440}src={"/image-assets/2.png"}/>
        </div>
        </div>
        <div style={{backgroundColor:"#507cd4",transform:"rotate(-1deg)"}} className='flex mt-5 sticky top-0 items-center rounded-2xl py-4 px-5'>
        <div className=''>
            <h2 className='mb-5 max-md:text-2xl'>Call audience to your store. Easily integrate links into your content.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quis quod itaque deleniti maiores impedit voluptates numquam odio voluptatibus ea.</p>
        </div>
        <div className='min-w-64 h-72 rounded-2xl grid place-items-center'>
        <img width={440}src={"/image-assets/3.png"}/>
        </div>
        </div>
        <div style={{backgroundColor:"#60acb4",transform:"rotate(1deg)"}} className='flex mt-5 sticky top-0 items-center rounded-2xl py-4 px-5'>
        <div className=''>
            <h2 className='mb-5 max-md:text-2xl'>Build and customize your store front.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quis quod itaque deleniti maiores impedit voluptates numquam odio voluptatibus ea, nobis incidunt natus officia aliquid modi ullam! Quam, accusamus reprehenderit?</p>
        </div>
        <div className='min-w-64 h-72 rounded-2xl grid place-items-center'>
        <div style={{backgroundImage:"url(/image-assets/4.png)",backgroundSize:"cover"}} className='h-52 w-44 rounded-xl'></div>
        </div>
        </div>
    </div>
  )
}

export default InformationCards