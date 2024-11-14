import FaqAccordianItem from '@/app/small components/FaqAccordianItem'
import React from 'react'

const FaqAccordian = () => {
    const accordianData = [{
        question:"How much does it cost to set up a store?",
        answer:"No not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. Its as simple as a few clicks to get started!"
    },
    {
        question:"What kind of digital products can I sell?",
        answer:"No not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. Its as simple as a few clicks to get started!"
    },
    {
        question:"Do I need technical skills to use the platform?",
        answer:"No not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. Its as simple as a few clicks to get started!"
    },
    {
        question:"Is there a limit to the number of products I can list?",
        answer:"No not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. Its as simple as a few clicks to get started!"
    },
    {
        question:"How do I receive payments for my sales?",
        answer:"No not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. Its as simple as a few clicks to get started!"
    },
    {
        question:"Can I sell internationally on this marketplace?",
        answer:"No not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. Its as simple as a few clicks to get started!"
    },
    {
        question:"What support and resources are available for sellers?",
        answer:"No not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. Its as simple as a few clicks to get started!"
    },
    {
        question:"Is there a review process for uploaded products?",
        answer:"No not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. Its as simple as a few clicks to get started!"
    },
]
  return (
    <div style={{fontFamily:"Urbanist"}} className='flex font-medium mt-10 items-center max-md:flex-col'>
        <div className='w-1/2 max-md:w-fit max-md:text-center'><h1 style={{color:"#00DC82"}} className='max-md:my-2'>FREQUENTLY ASKED QUESTIONS</h1><p className='text-lg max-md:my-4 '>Quick answers to questions you may have. Cant find what youre looking for?
        <br/>Check out our full documentation</p></div>
        <div className='w-1/2 max-md:w-fit'>
        {accordianData.map((data)=>{
            return <div className='mb-4' key={data.question}><FaqAccordianItem question={data.question} answer={data.answer} /></div>
        })}
        </div>
        
    </div>
  )
}

export default FaqAccordian