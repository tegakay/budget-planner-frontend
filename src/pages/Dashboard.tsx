import React from "react";
import Card from "../components/Card";
import LineChartGraph from "../components/LineChartGraph";
import TableGrid from "../components/TableGrid";
import PendingMoney from "../components/PendingMoney";

const Dashboard = () => {
  return (
    <div className="px-4 grid gap-6 ">
      {/* top bar */}
      <div className="flex flex-row gap-4">
        <Card />
        <PendingMoney/>
      </div>

      <div className="grid  p-4  shadow-md rounded-2xl backdrop-blur-2xl">
        <div className="flex flex-row justify-between">
          <h2 className="font-bold text-xl">Last 30 days</h2>
          <button className=" p-3 rounded-lg  font-bold bg-blue-400 text-white text-xs max-w-max">
            View Report
          </button>
        </div>
        <div className="flex flex-row gap-3">
          <button className="text-xs  inline-flex   rounded-lg  font-semibold">12 Months</button>
          <button className="text-xs  inline-flex   rounded-lg font-light text-gray-300">3 Months</button>
          <button className="text-xs  inline-flex    rounded-lg font-light text-gray-300">30 days</button>
          <button className="text-xs  inline-flex    rounded-lg font-light text-gray-300">7 days</button>
          <button className="text-xs  inline-flex   rounded-lg font-light text-gray-300">24 Hours</button>
        </div>
        <LineChartGraph />
        
      </div>

      <div className="p-4 shadow-md rounded-2xl backdrop-blur-2xl">
      <TableGrid/>
      </div>
    </div>
  );
};

export default Dashboard;
