import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


 const Layoutcomp = () => {
  return (
    <>
      
      <main className="grid md:grid-cols-[max-content_1fr] md:gap-x-4">
        <Sidebar/>
        <Outlet />
      </main>
      
    </>
  );
};

export default Layoutcomp