import React, { Fragment, useState } from 'react';
import NavBar from '../components/navbar';
import MyInterests from '../components/my_interests';


const BorrowingsScreen = () => {
    return(
        <Fragment>
            <NavBar />
            <MyInterests />
        </Fragment>
    );
}
export default BorrowingsScreen;
