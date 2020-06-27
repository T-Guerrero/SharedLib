import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ConfirmationUserScreen from './screens/User/ConfirmationScreen';
import BookScreen from './screens/BookScreen';
import MyBooksScreen from './screens/MyBooksScreen';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={WelcomeScreen} />
        <Route exact path='/home' component={HomeScreen} />
        <Route exact path='/users/confirmations' component={ConfirmationUserScreen} />
        <Route exact path='/books/:id' component={BookScreen} />
        <Route exact path='/my_books' component={MyBooksScreen} />
    </Switch>
)

export default Routes;
