import React, { Fragment, useState } from 'react';
import NavBar from '../components/navbar';
import Categories from '../components/categories';


const CategoriesScreen = (props) => {
    return(
        <Fragment>
            <NavBar />
            <Categories />
        </Fragment>
    );
}
export default CategoriesScreen;
