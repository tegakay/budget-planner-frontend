import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


 const Layoutcomp = () => {
  return (
    <>
      
      <main className="grid md:grid-cols-[max-content_1fr] md:gap-x-4 md:p-6">
        <div className="sticky top-0 z-10"><Sidebar/></div>
        <Outlet />
      </main>
      
    </>
  );
};

export default Layoutcomp