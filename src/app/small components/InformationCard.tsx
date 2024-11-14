import React from 'react'

const InformationCard:React.FC<{imageUrl:string,title:string,text:string}> = ({imageUrl,title,text}) => {
  return (
    <div className='bg-black rounded-xl flex flex-col items-center font-semibold py-6 px-2 w-full h-full text-center'>
      <h2 className='max-sm:text-xl information-card-title' style={{lineHeight:"36px"}} >{title}</h2>
      <div className='text-lg my-3 max-sm:text-base'>{text}</div>
      <img width={200} className='max-sm:!w-28' alt='img' src={imageUrl}/>
    </div>
  )
}

export default InformationCard