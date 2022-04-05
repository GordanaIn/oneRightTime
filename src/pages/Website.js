import React from "react";
import BarChartMobile from "../components/BarChartMobile";
import BarChartWebsite from "../components/BarChartWebsite";
import {Card} from "@material-ui/core";

const Website = () => {
  return(
      <Card style={{width:400, height:500, alignItems:"center",flexDirection:'initial',margin:'-4%'}}>
        <div style={{marginTop:'5%'}}>
          <h2 style={{alignItems:"center", textAlign:"center"}}>1.2 Graph two: predicted investments</h2>
        </div>
        <div style={{marginTop:'20%'}}>
     <BarChartWebsite />
     </div>
      </Card>
  )
}
export default Website;
