import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';

const LineChartGraph = () => {
  return (

   <div style={{ height: "300px", width: "100%" }}>
     <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          label:'Income',
        },
        {
          data: [3, 4.5, 1, 9.5, 2.5, 3],
          label:'Expenditure',
        },
      ]}
      
    />
   </div>
  )
}

export default LineChartGraph