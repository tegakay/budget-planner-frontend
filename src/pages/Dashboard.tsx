import React from "react";
import Card from "../components/Card";
import LineChartGraph from "../components/LineChartGraph";
import TableGrid from "../components/TableGrid";

const Dashboard = () => {
  return (
    <div className="px-4 grid gap-6">
      {/* top bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="grid  p-4  shadow-md rounded-2xl">
        <div className="flex flex-col md:flex-row justify-between">
          <h2 className="font-bold">Last 30 days</h2>
          <button className=" p-3 rounded-lg  font-bold bg-blue-400 text-white">
            View Report
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <button className="text-sm  inline-flex   rounded-lg  font-semibold">12 Months</button>
          <button className="text-sm  inline-flex   rounded-lg font-light text-gray-300">3 Months</button>
          <button className="text-sm  inline-flex    rounded-lg font-light text-gray-300">30 days</button>
          <button className="text-sm  inline-flex    rounded-lg font-light text-gray-300">7 days</button>
          <button className="text-sm  inline-flex   rounded-lg font-light text-gray-300">24 Hours</button>
        </div>
        <LineChartGraph />
        <TableGrid/>
      </div>
    </div>
  );
};

export default Dashboard;
