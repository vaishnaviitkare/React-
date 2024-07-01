import React from "react";
import Chart from "../Chart/Chart";
const ExpensesChart=(props)=>{
return(
<div>
    {/*In Chart component we create chart so pass this filteredExpenses that we receive to Chart*/}
    <Chart chartExpenses={props.chartData}/>
</div>
);

}
export default ExpensesChart;