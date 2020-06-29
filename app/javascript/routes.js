import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ConfirmationUserScreen from './screens/User/ConfirmationScreen';
import BookScreen from './screens/BookScreen';
import AllBooksScreen from './screens/AllBooksScreen';
import SearchScreen from './screens/SearchScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryBooksScreen from './screens/CategoryBooksScreen';
import MyBooksScreen from './screens/MyBooksScreen';
import MyBorrowingsScreen from './screens/MyBorrowingsScreen';
import MyInterestsScreen from './screens/MyInterestsScreen';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={WelcomeScreen} />
        <Route exact path='/home' component={HomeScreen} />
        <Route exact path='/users/confirmations' component={ConfirmationUserScreen} />
        <Route exact path='/books/:id' component={BookScreen} />
        <Route exact path='/users/books' component={MyBooksScreen} />
        <Route exact path='/users/interests' component={MyInterestsScreen} />
        <Route exact path='/users/borrowings' component={MyBorrowingsScreen} />
        <Route exact path='/books' component={AllBooksScreen} />
        <Route exact path='/search' component={SearchScreen} />
        <Route exact path='/categories' component={CategoriesScreen} />
        <Route exact path='/categories/:id/books' component={CategoryBooksScreen} />
    </Switch>
)

export default Routes;
