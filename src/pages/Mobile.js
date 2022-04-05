import BarChartMobile from "../components/BarChartMobile";
import React from "react";
import {Card, Paper} from "@material-ui/core";

const Mobile = () => {
  return(
          <Card style={{width:400, height:500, alignItems:"center",flexDirection:'initial',margin:'-4%'}}>
              <div style={{marginTop:'20%'}}>
          <BarChartMobile/>
              </div>
          </Card>
  )
}
export default Mobile;
