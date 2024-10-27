import React from 'react'
import { MdPaid } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";

const Card = () => {
  return (
    <div className=' shadow-md rounded-lg py-2 px-6 backdrop-blur-lg max-w-max'>
        <h1 className='flex  items-center gap-1 text-xs'> <MdPaid size={12} />Spent Today </h1>
        <p className='text-base flex items-center gap-4 font-bold font-black'><span>#480.00</span>  <FaArrowTrendUp /></p> 
    </div>
  )
}

export default Card