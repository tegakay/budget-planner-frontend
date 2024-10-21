import React from 'react'
import { MdPaid } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";

const Card = () => {
  return (
    <div className=' shadow-md rounded-lg py-2 px-6'>
        <h1 className='flex  items-center gap-1 text-base'> <MdPaid size={20} />Spent Today </h1>
        <p className='text-2xl flex items-center gap-4 font-bold'><span>#480.00</span>  <FaArrowTrendUp /></p> 
    </div>
  )
}

export default Card