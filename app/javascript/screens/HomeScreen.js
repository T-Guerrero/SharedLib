import React, { Fragment, useState } from 'react';
import NavBar from '../components/navbar';
import BooksTemp from '../components/home';


const HomeScreen = () => {
    return(
        <Fragment>
            <NavBar />
            <BooksTemp />
        </Fragment>
    );
}
export default HomeScreen;
