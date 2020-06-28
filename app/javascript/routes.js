import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ConfirmationUserScreen from './screens/User/ConfirmationScreen';
import BookScreen from './screens/BookScreen';
import MyBooksScreen from './screens/MyBooksScreen';
import AllBooksScreen from './screens/AllBooksScreen';
import SearchScreen from './screens/SearchScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryBooksScreen from './screens/CategoryBooksScreen';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={WelcomeScreen} />
        <Route exact path='/home' component={HomeScreen} />
        <Route exact path='/users/confirmations' component={ConfirmationUserScreen} />
        <Route exact path='/books/:id' component={BookScreen} />
        <Route exact path='/all_books' component={AllBooksScreen} />
        <Route exact path='/my_books' component={MyBooksScreen} />
        <Route exact path='/search' component={SearchScreen} />
        <Route exact path='/all_categories' component={CategoriesScreen} />
        <Route exact path='/category_books/:id' component={CategoryBooksScreen} />
    </Switch>
)

export default Routes;
