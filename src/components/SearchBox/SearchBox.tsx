"use client"
import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
const [creatorButtonSelected,setCreatorButtonSelected]=useState<boolean>(true)

  return (
    <>
    <div className='flex text-lg w-64 transition-all duration-500 hover:w-80 bg-white rounded-3xl px-4 py-2.5 text-black ml-10 max-2xl:px-2 max-2xl:py-1.5 max-2xl:text-base max-2xl:w-56 max-2xl:hover:w-64 max-2xl:ml-4 max-sm:ml-0'>
    <div style={{paddingBottom:"1px"}} className='text-xl m-auto pr-2'><IoSearchOutline/></div>
    <input style={{outline:"none"}} className='w-full'  type='text' placeholder='Search'/>
    <div className='cursor-pointer max-xxs:hidden'><span style={{color:`${creatorButtonSelected?"green":"black"}`,textDecoration:`${creatorButtonSelected?"underline":"none"}`}} onClick={()=>{setCreatorButtonSelected(true)}}>Creator</span>/<span style={{color:`${!creatorButtonSelected?"green":"black"}`,textDecoration:`${!creatorButtonSelected?"underline":"none"}`}}   onClick={()=>{setCreatorButtonSelected(false)}}>Product</span></div>
    </div>
    </>
  )
}

export default SearchBox