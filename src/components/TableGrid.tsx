import React from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from "react";

const TableGrid = () => {
  let data = [
    { Transaction: "Spotify", ID: "76345", Amount: 64950, Date: '2024-08-15' },
    { Transaction: "Netflix", ID: "72352", Amount: 647321, Date: '2024-08-15' },
    { Transaction: "Upwork", ID: "78352", Amount: 6578, Date: '2024-08-15' },
    
  ];
  const [rowData, setrowData] = useState(data);

  const [colDefs, setColDefs] = useState([
    { field: "Transaction" },
    { field: "ID" },
    { field: "Amount" },
    { field: "Date" },
  ]);
  const defaultColDef = {
    flex: 1,
};

  return (
    // wrapping container with theme & size
    <div
     className="ag-theme-quartz" // applying the Data Grid theme
     style={{ height: 500 }} // the Data Grid will fill the size of the parent container
    >
        <div className="flex flex-col md:flex-row justify-between items-center py-4"> <h2>Transaction History</h2> <div><button className="p-3 rounded-lg  font-bold bg-blue-400 text-white"> Download</button></div></div>
      <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
      />
    </div>
   )
};

export default TableGrid;
