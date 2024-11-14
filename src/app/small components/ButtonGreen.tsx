import React from 'react'

const ButtonGreen:React.FC<{title:string}> = ({title}) => {
  return (
    <div style={{backgroundColor:"#00DC82"}} className='w-fit px-3.5 py-1.5 rounded-xl cursor-pointer text-black font-semibold text-lg'>
        {title} 
    </div>
  )
}

export default ButtonGreen