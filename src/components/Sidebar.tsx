import { MdDashboard,MdAttachMoney } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FcPlanner } from "react-icons/fc";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Sidebar = () => {
  return (
    <div  className="p-5">
        <h1 className="my-3">Main Logo</h1>
        <p className="flex items-center py-2 my-1 text-sm"> <span className="mr-3 " ><MdDashboard size={28} /></span> Dashboard</p>
        <p className="flex items-center py-2 my-1 text-sm"> <span className="mr-3 "><GrTransaction size={28} /></span> Transaction</p>
        <p className="flex items-center py-2 my-1 text-sm"> <span className="mr-3 "><FcPlanner size={28} /></span> Plan</p>
        <p className="flex items-center py-2 my-1 text-sm"> <span className="mr-3 "><MdAttachMoney size={28} /></span> Budget</p>
        <p>-------------------</p>
        <p className="flex items-center py-2 my-1 text-sm"> <span className="mr-3 "><IoSettingsOutline size={28} /></span> Settings</p>
        <p className="flex items-center py-2 my-1 text-sm"> <span className="mr-3 "><IoIosHelpCircleOutline size={28} /></span>Help</p>
    </div>
  )
}

export default Sidebar