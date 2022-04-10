import React from "react";
import {Container} from "@material-ui/core";

import Website from "./pages/Website";
import Mobile from "./pages/Mobile";

import {BrowserView, MobileView} from 'react-device-detect';

const App = ()=> {
    return (
        <Container style={{alignItems:'center' }}>
            <BrowserView>
                <Website/>
            </BrowserView>
            <MobileView>
                <Mobile/>
            </MobileView>

        </Container>
    )
}
export default App;
