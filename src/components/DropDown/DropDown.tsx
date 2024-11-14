"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";

const DropDown = () => {

    const [dropDownActive,setDropDownActive]=useState<boolean>(false)
    const router = useRouter()
  return (
    <>
    <div style={{userSelect:"none"}} onClick={()=>{dropDownActive?setDropDownActive(false):setDropDownActive(true)}} className='rounded-2xl bg-white flex px-3 py-1.5 text-black items-center gap-5 cursor-pointer max-2xl:px-1.5 max-2xl:py-0.5 max-2xl:gap-2 max-2xl:rounded-xl max-2xl:text-sm'>
        <img src='/image-assets/user-icon.png'/>
        <FaAngleDown/>

    </div>
    {dropDownActive&&(<div className='w-40 p-4 cursor-pointer bg-black absolute rounded-2xl flex flex-col gap-5 top-24 right-28 font-normal'>
    <h4 onClick={()=>{router.push('/login')}}>Profile</h4>
    <h4>Dashboard</h4>
    <h4>My Store</h4>
    </div>)}
    
    </>
  )
}

export default DropDown