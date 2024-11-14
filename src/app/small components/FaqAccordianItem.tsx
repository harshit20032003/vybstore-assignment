"use client"
import React, { useRef, useState } from 'react'
import { FaPlus,FaMinus } from "react-icons/fa6";
const FaqAccordianItem:React.FC<{question:string,answer:string}> = ({question,answer}) => {
  const [accordianActive,setAccordianActive]=useState<boolean>(false)  
  const [accordianHeight,setAccordianHeight]=useState<number>(48)
  const divContainerRef=useRef<HTMLDivElement>(null)
  return (
    <div   onClick={()=>{accordianActive?setAccordianActive(false):(setAccordianActive(true),setAccordianHeight(divContainerRef.current?divContainerRef.current.scrollHeight:48))}} className="bg-white text-black rounded-2xl px-7 font-semibold  overflow-y-hidden cursor-pointer">
        <div className='flex items-center gap-4 py-2.5'><h4>{question}</h4><div className='ml-auto text-lg'>{accordianActive?(<FaMinus/>):(<FaPlus/>)}</div></div>
        <div ref={divContainerRef} style={{height:`${accordianActive?`${accordianHeight}px`:"0px"}`}} className='h-0 transition-all duration-500'> 
                  <hr className='rounded-md'/>
        <hr className='rounded-md'/>
        <p style={{lineHeight:"18px"}} className=' py-4'>{answer}</p>  
        </div>

    </div>
  )
}

export default FaqAccordianItem