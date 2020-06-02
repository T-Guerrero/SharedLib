import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import DiscoveryScreen from "./screens/DiscoveryScreen";


const Routes = (props) => (
    <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/discovery' component={DiscoveryScreen} />
    </Switch>
)

export default Routes;
