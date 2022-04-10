import BarGraphMobile from "../components/BarGraphMobile";
import React, {useState} from "react";
import {Box, Card, Paper} from "@material-ui/core";

const Mobile = () => {

  return(

          <Box style={{display:'flex', marginTop:'10%',alignItems:"center", marginLeft:"-4%", marginRight:"-4%"}}>
          <Card style={{width:700, height:500,}}>

              <div style={{marginTop:'20%', alignItems:"center", }}>
          <BarGraphMobile />
              </div>
          </Card>
      </Box>

  )
}
export default Mobile;
