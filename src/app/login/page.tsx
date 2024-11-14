import React from 'react'
import LoginForm from '../small components/LoginForm'
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  return (
    <div className='px-28 py-8 max-1.5xl:px-16 max-lg:px-14 max-lg:py-6 max-md:px-6 max-sm:px-4 max-xs:px-3 overflow-x-hidden'>
      <Navbar/>
    <LoginForm/>
    </div>
  )
}

export default page