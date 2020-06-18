import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import DiscoveryScreen from "./screens/DiscoveryScreen";
import EditUserScreen from './screens/User/EditScreen';
import ConfirmationUserScreen from './screens/User/ConfirmationScreen';


const Routes = (props) => (
    <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/discovery' component={DiscoveryScreen} />
        <Route exact path='/user' component={EditUserScreen} />
        <Route exact path='/user/confirmations' component={ConfirmationUserScreen} />
    </Switch>
)

export default Routes;
