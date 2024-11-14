"use client"

import React, { useState } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import DropDown from '../DropDown/DropDown'
import { GiHamburgerMenu } from "react-icons/gi";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegEdit,FaHeadset } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [navMenuVisible,setNavMenuVisible]=useState<boolean>(false)
  const router = useRouter()
  return (
    <>
    <div style={{fontFamily:"Urbanist"}} className='flex items-center pb-10 gap-7 font-semibold navbar max-2xl:gap-4'>
    <img onClick={()=>{router.push("/")}} className='max-2xl:w-24' src='/logo/page_logo.png'/>
    <SearchBox/>
    <div className='flex ml-auto gap-7 max-xl:hidden'>
    <h3 className='ml-auto'>
        Fav Creators
    </h3>
    <h3>
        Merchandise
    </h3>
    <h3>
        Brand
    </h3>
    <h3>
        Digital
    </h3>
    <DropDown/>
    </div>
    <div className='hidden relative ml-auto text-4xl max-xl:block'>
    <div onClick={()=>{navMenuVisible?setNavMenuVisible(false):setNavMenuVisible(true)}} className='relative'><GiHamburgerMenu/></div>
    <div style={{backgroundColor:"#212020",width:"285px",height:"400px"}} className={`transition-all duration-500 absolute ${navMenuVisible?"-left-44 max-md:-left-56":"left-44"} pl-7 pr-2`}>
      <div className='flex mt-4'><div style={{backgroundImage:"url(/image-assets/influencer3.jfif)",backgroundSize:"cover"}} className='h-20 w-20 rounded-full'></div><div onClick={()=>{setNavMenuVisible(false)}} className='ml-auto'><RxCross2/></div></div>
      
      
      <div style={{color:"#00DC82"}} className='text-sm flex gap-1 items-center mt-2'><div className='text-base mb-1'><FaRegEdit/></div><div>Change Profile Picture</div></div>
      <div className='text-xl mt-2'>Samira Hadid</div>
      <div className='text-sm font-normal'>@samirahadid</div>
      <ul className='text-xl opacity-70 nav-menu-list'>
        <li><LuUser2/><div>Profile</div></li>
        <li><HiOutlineLocationMarker/><div>Address</div></li>
        <li><FaHeadset/><div>Contact us</div></li>
        <li><MdInfoOutline/><div>About us</div></li>
      </ul>
      <div onClick={()=>{router.push('/login')}} className='text-xl flex items-center gap-2 mt-3'><IoMdExit/><div >Logout</div></div>
      
    </div>
    </div>
    
    </div>
    </>
  )
}

export default Navbar