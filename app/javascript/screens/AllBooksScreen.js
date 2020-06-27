import React, { Fragment, useState } from 'react';
import NavBar from '../components/navbar';
import AllBooks from '../components/all_books';


const AllBooksScreen = () => {
    return(
        <Fragment>
            <NavBar />
            <AllBooks/>
        </Fragment>
    );
}
export default AllBooksScreen;
