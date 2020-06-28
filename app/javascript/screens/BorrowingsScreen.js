import React, { Fragment, useState } from 'react';
import NavBar from '../components/navbar';
import Borrowings from '../components/borrowings';


const BorrowingsScreen = () => {
    return(
        <Fragment>
            <NavBar />
            <Borrowings />
        </Fragment>
    );
}
export default BorrowingsScreen;
