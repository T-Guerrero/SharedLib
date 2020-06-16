import React, { Fragment, useState } from 'react';
import NavBar from '../components/navbar';
import MyBooks from '../components/discovery';


const DiscoveryScreen = () => {
    return(
        <Fragment>
            <NavBar/>
            <MyBooks/>
        </Fragment>
    );
}
export default DiscoveryScreen;
