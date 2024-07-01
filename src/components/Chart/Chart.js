import React from "react";
import "./Chart.css"
import ChartBar from "./ChartBar";
//this component represents whole chart
const Chart=(props)=>{
    //to find the percentage for each bar we have max value which can be calculated based of prices 
    //of filteredExpenses(maximum among price) pass to chartBar 
    const expensesOnlyArray=props.chartExpenses.map((monthExpenseData)=>{
        return monthExpenseData.price;
    });
    const maxValue=Math.max(...expensesOnlyArray);
    //chart contain months and values so create array of object and then increase value
    const chartData=[
        {expenseMonth:'Jan', expenseValue:0},
        {expenseMonth:'Feb', expenseValue:0},
        {expenseMonth:'Mar', expenseValue:0},
        {expenseMonth:'Apr', expenseValue:0},
        {expenseMonth:'May', expenseValue:0},
        {expenseMonth:'Jun', expenseValue:0},
        {expenseMonth:'Jul', expenseValue:0},
        {expenseMonth:'Aug', expenseValue:0},
        {expenseMonth:'Sep', expenseValue:0},
        {expenseMonth:'Oct', expenseValue:0},
        {expenseMonth:'Nov', expenseValue:0},
        {expenseMonth:'Dec', expenseValue:0},

    ]
    //from the filteredExpenses array we grab months of all data inputed and for that month set expenseValue + price 
    //and store it in chartData, so updated chartData using for loop
    for(let ele of props.chartExpenses){
        //here index of array=index of month so for particular month index put price 
        chartData[ele.date.getMonth()].expenseValue += ele.price;
    }
   
return(
    <div className="chart">
    {
      chartData.map((monthData)=>{
        return (
          <ChartBar
          /*as we used map method we provide it key*/
           key={monthData.expenseMonth}
           label={monthData.expenseMonth}
           value={monthData.expenseValue}
           maxValue={maxValue}
          />
        );
      })
    }
    </div>
);
}
export default Chart;