import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import DiscoveryScreen from "./screens/DiscoveryScreen";
import ConfirmationUserScreen from './screens/User/ConfirmationScreen';
import BookScreen from './screens/BookScreen';
import test from './components/user_modal/index'


const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/discovery' component={DiscoveryScreen} />
        <Route exact path='/users/confirmations' component={ConfirmationUserScreen} />
        <Route exact path='/books/:id' component={BookScreen} />
        <Route exact path='/test' component={test} />
    </Switch>
)

export default Routes;