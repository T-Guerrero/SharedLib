import React, { Fragment, useEffect, useState } from 'react';
import { Columns, Notification, Heading, Container, Button, Section } from 'react-bulma-components';
import { BookService } from '../../services/index';
import Book from '../book_preview';


const AllBooks = () => {
    const [all_books, setAllBooks] = useState([]);

    async function fetchBooks() {
        const response = await BookService.index();
        setAllBooks(response.data['all_books']);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const all_books_components = all_books.map((book, key) =>
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
                        	Todos os Livros
                        </Heading>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile center2-mobile'>
                    {all_books_components}
        		</Columns>
            </div>
        </div>
    );
};

export default AllBooks;
