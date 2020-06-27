import React, { Fragment, useState } from 'react';
import NavBar from '../components/navbar';
import MyBooks from '../components/my_books';


const MyBooksScreen = () => {
    return(
        <Fragment>
            <NavBar />
            <MyBooks/>
        </Fragment>
    );
}
export default MyBooksScreen;
