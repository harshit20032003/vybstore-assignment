import React from 'react'

const CarouselCard:React.FC<{state:string,title:string,imgUrl:string}> = ({state,title,imgUrl}) => {
  return (
    <div style={{backgroundImage:`url(${imgUrl})`,backgroundSize:"cover"}} className='flex w-60 h-96 flex-col rounded-xl'>
        <div className='mt-auto mb-3'>
            <h4 className='text-center font-semibold'>
              {title}
            </h4>
            <div className='text-center mb-2.5'>
              {state}
            </div>
            <div className='bg-white flex py-1 w-40 m-auto px-2 justify-around rounded-2xl'><div className='font-semibold text-black'>Samira Hadid</div><img className='rounded-full' src={'/image-assets/current-user.png'}/></div>
        </div>
    </div>
  )
}

export default CarouselCard