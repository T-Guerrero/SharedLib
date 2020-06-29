import React, { Fragment, useEffect, useState } from 'react';
import { Columns, Heading } from 'react-bulma-components';
import NavBar from '../components/navbar';
import Book from '../components/book_preview';
import { CategoryService } from '../services/index';

const CategoryBooksScreen = (props) => {
    const [category, setCategory] = useState([]);
    const [category_books, setCategoryBooks] = useState([]);

    async function fetchCategory() {
        let category_id = props.match.params.id;
        const response = await CategoryService.show(category_id);
        setCategory(response.data['category']);
        setCategoryBooks(response.data['category_books']);
    }

    useEffect(() => {
        fetchCategory();
    }, []);

    const category_books_components = category_books.map((book, key) =>
        <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
            <Book
            name={book.name}
            author={book.author}
            borrowed={book.borrowed}
            available={book.available}
            inTransition={book.inTransition}
            image_url={book.image_url}
            key={key}
            id={book.id}/>
        </Columns.Column>
    );

    return(
        <Fragment>
            <NavBar />
            <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                <Columns>
                    <Columns.Column>
                        <Heading className='has-text-black' size={4}>
                        	{`Categoria: ${category.name}`}
                        </Heading>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile center2-mobile'>
                    {category_books_components}
        		</Columns>
            </div>
        </Fragment>
    );
}
export default CategoryBooksScreen;
