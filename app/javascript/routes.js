import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";


const Routes = (props) => (
    <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='<Nome do path que vai renderizar o component do lado =>' component={HomeScreen} />
    </Switch>
)

export default Routes;