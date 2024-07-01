import React from "react";
import "./ChartBar.css";
//this component is reusable again and again for each bar,each bar display according to chartbar component
//this component represents individual bars
const ChartBar=(props)=>{
    //if there is no expense then height is 0
    let fillHeight='0%';
    if(props.value>0){
        //Math.round gives number so we append it with % to convert it into string
        fillHeight=Math.round((props.value/props.maxValue)*100) + '%';
        
    }
   return(
<div className="chart-bar">
    {/*this div containing bars*/}
    <div className="chart-bar__inner">
        {/*this div containing the blue color inside bar or blue bar*/}
        {/*dynaminic styling using style attribute, this style attibute receives object as value,
        outer curly bracket is js and inner is object*/}
      <div className="chart-bar__fill" style={{height:fillHeight}}></div>
    </div>
    <div className="chart-bar__label">{props.label}</div>
</div>
   );
}
export default ChartBar;