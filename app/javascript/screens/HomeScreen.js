import React, { Fragment, useState } from 'react';
import NavBar from '../components/navbar';
import MyBooks from '../components/home';


const HomeScreen = () => {
    return(
        <Fragment>
            <NavBar />
            <MyBooks/>
        </Fragment>
    );
}
export default HomeScreen;
