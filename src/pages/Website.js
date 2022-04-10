import React from "react";

import BarGraphWebsite from "../components/BarGraphWebsite";
import {Card} from "@material-ui/core";


const Website = () => {
  return(
      <Card style={ {width:955, height:500, alignItems:"center",flexDirection:'initial', marginTop:'10%', marginLeft:'10%'}}>
        <div style={{marginTop:'5%'}}>
     <BarGraphWebsite />
     </div>
      </Card>
  )
}
export default Website;
