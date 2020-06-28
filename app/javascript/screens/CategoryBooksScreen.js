import React, { Fragment, useState } from 'react';
import NavBar from '../components/navbar';
import CategoryBooks from '../components/category_books';

const CategoryBooksScreen = (props) => {
    return(
        <Fragment>
            <NavBar />
            <CategoryBooks category_id={props.match.params.id} />
        </Fragment>
    );
}
export default CategoryBooksScreen;
