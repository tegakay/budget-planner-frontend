import { MdDashboard,MdAttachMoney } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FcPlanner } from "react-icons/fc";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Sidebar = () => {
  return (
    <div  className=" flex md:flex-col justify-between">
        <h1 className="my-3">Main Logo</h1>
        <p className="flex items-center py-2 my-1 text-xs"> <span className="mr-3 hidden md:block " ><MdDashboard size={28} /></span> Overview</p>
        <p className="flex items-center py-2 my-1 text-xs hidden md:flex"> <span className="mr-3 "><GrTransaction size={28} /></span> Add Transactions</p>
        <p className="flex items-center py-2 my-1 text-xs"> <span className="mr-3 hidden md:block "><FcPlanner size={28} /></span> Transactions</p>
        <p className="flex items-center py-2 my-1 text-xs"> <span className="mr-3 hidden md:block "><MdAttachMoney size={28} /></span>Configure Budget</p>
        <p className="hidden md:block">-------------------</p>
        <p className="flex items-center py-2 my-1 text-xs"> <span className="mr-3 hidden md:block "><IoSettingsOutline size={28} /></span> Settings</p>
        <p className="flex items-center py-2 my-1 text-xs"> <span className="mr-3 hidden md:block "><IoIosHelpCircleOutline size={28} /></span>Help</p>
    </div>
  )
}

export default Sidebar