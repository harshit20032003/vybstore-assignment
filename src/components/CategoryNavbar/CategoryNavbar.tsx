import React from 'react'

const CategoryNavbar = () => {
  return (
    <div className='flex justify-between px-24 max-lg:px-10 py-3 mt-28 max-md:mt-10 bg-black rounded-2xl category-navbar max-xxs:px-5'>
        <h3 className='max-xxs:text-xl'>Travel</h3>
        <h3 className='max-xxs:text-xl'>Digital</h3>
        <h3 className='max-xxs:text-xl'>Brand</h3>
        <h3 className='max-xxs:text-xl'>Merch</h3>
    </div>
  )
}

export default CategoryNavbar