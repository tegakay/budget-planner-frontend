import { MdPaid } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";

const PendingMoney = () => {
  return (
    <div className=' shadow-md rounded-lg py-2 px-6 backdrop-blur-lg max-w-max '>
        <h1 className='flex  items-center gap-1 text-xs'> <MdPaid size={12} />Monthly Budget </h1>
        <p className='text-base flex items-center gap-4 font-bold font-black'><span>#48000.00</span>  </p> 
    </div>
  )
}

export default PendingMoney