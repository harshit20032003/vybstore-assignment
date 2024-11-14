import React from 'react'

const ButtonGradient:React.FC<{title:string}> = ({title}) => {
  return (
    <div className='button-gradient rounded-xl p-0.5 '>
   <div style={{backgroundColor:"#181818"}}  className='w-fit px-3.5 py-1.5 rounded-xl cursor-pointer font-semibold text-lg '>
        <div className='button-gradient-inner'>{title} </div>
    </div>
    </div>
 
  )
}

export default ButtonGradient