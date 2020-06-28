import React, { Fragment, useEffect, useState } from 'react';
import { Columns, Notification, Heading, Container, Button, Section } from 'react-bulma-components';
import { CategoryService } from '../../services/index';
import Book from '../book_preview';

const CategoryBooks = (props) => {
    const [category, setCategory] = useState([]);
    const [category_books, setCategoryBooks] = useState([]);

    async function fetchCategory() {
        const response = await CategoryService.show(props.category_id);
        setCategory(response.data['category']);
        setCategoryBooks(response.data['category_books']);
    }

    useEffect(() => {
        fetchCategory();
    }, []);

    const category_books_components = category_books.map((book, key) =>
        <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
            <Book name={book.name} author={book.author} borrowed={book.borrowed} available={book.available} image_url={book.image_url} key={key} id={book.id}/>
        </Columns.Column>
    );


    return (
        <div>
            <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                <Columns>
                    <Columns.Column>
                        <Heading className='has-text-black' size={4}>
                        	{`Categoria ${category.name}`}
                        </Heading>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile center2-mobile'>
                    {category_books_components}
        		</Columns>
            </div>
        </div>
    );
};

export default CategoryBooks;
