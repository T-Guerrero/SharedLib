import React from "react";
import { Switch, Route } from "react-router-dom";
// import HomeScreen from "./screens/HomeScreen";
import HomeScreen from "./screens/home";
import DiscoveryScreen from "./screens/discovery";


const Routes = (props) => (
    <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/discovery' component={DiscoveryScreen} />
        <Route exact path='<Nome do path que vai renderizar o component do lado =>' component={HomeScreen} />
    </Switch>
)

export default Routes;
