import React, { Fragment, useState } from 'react';
import NavBar from '../components/navbar';
import SearchResults from '../components/search';

const SearchScreen = () => {
    let queryString = document.location.search.substring(1); // remove '?'
    queryString = queryString.split("&"); // array [ "p1=v1", "p2=v2", "p3=v3" ]
    let queries = {};
    let p, v;
    for (let x of queryString) {
        [p, v] = x.split("=");
        queries[p] = v;
    }
    return(
        <Fragment>
            <NavBar />
            <SearchResults query={queries.query}/>
        </Fragment>
    );
}
export default SearchScreen;
