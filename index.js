import React from "react";
import ReactDom from "react-dom";
import Card from "./Card"
import "./index.css";
import Data from "./Data";
function singlecard(val){
  return(
    <Card
    imgsrc={val.imgsrc}
    title={val.title}
    series={val.series}
    link={val.link}
  />
  );
}
ReactDom.render(
  <>
   <h1 className="heading">Top 5 Netflix Web Series 2021</h1>
   {Data.map(singlecard)}
  
  
</>,
document.getElementById("root"));