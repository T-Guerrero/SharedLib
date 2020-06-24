import React, { Fragment, useEffect, useState } from 'react';
import { Navbar, Columns, Container, Notification, Heading, Button } from 'react-bulma-components';
import { MyBooksService } from '../../services/index';
import Book from '../book';

const MyBooks = () => {
    const [my_books, setMyBooks] = useState([]);
    const [my_interests, setMyInterests] = useState([]);
    const [counter, setCounter] = useState({
        books: {},
        interests: {}
    });

    async function fetchBooks() {
        const response = await MyBooksService.index();
        setCounter(response.data['counter']);
        setMyBooks(response.data['my_books']);
        setMyInterests(response.data['my_interests']);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const my_books_components = my_books.map((book, key) =>
        <Columns.Column key={key}>
            <Book name={book.name} author={book.author} borrowed={book.borrowed} available={book.available} image_url={book.image_url} key={key} id={book.id}/>
        </Columns.Column>
    );

    const my_interests_components = my_interests.map((interest, key) =>
        <Columns.Column key={key}>
            <Book name={interest.book.name} author={interest.book.author} borrowed={interest.book.borrowed} available={interest.book.available} image_url={interest.book.image_url} key={key} id={interest.book.id}/>
        </Columns.Column>
    );

    return (
        <div>
            <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                <Columns>
                    <Columns.Column>
                        <Heading className='has-text-black' size={4}>
                        	Meus Livros
                        </Heading>
                    </Columns.Column>
                    <Columns.Column>
                        <div style={{textAlign: "right"}}>
                            <p>{`Mostrando ${counter.books.showing} de ${counter.books.total}`}</p>
                        </div>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile'>
                    {my_books_components}
        		</Columns>
            </div>
            <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                <Columns>
                    <Columns.Column>
                        <Heading className='has-text-black' size={4}>
                	       Meus Empréstimos
                        </Heading>
                    </Columns.Column>
                    <Columns.Column>
                        <div style={{textAlign: "right"}}>
                            <p>{`Mostrando ${counter.interests.showing} de ${counter.interests.total}`}</p>
                        </div>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile'>
                    {my_books_components}
        		</Columns>
            </div>
            <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                <Columns>
                    <Columns.Column>
                        <Heading className='has-text-black' size={4}>
                	       Meus Interesses
                        </Heading>
                    </Columns.Column>
                    <Columns.Column>
                        <div style={{textAlign: "right"}}>
                            <p>{`Mostrando ${counter.interests.showing} de ${counter.interests.total}`}</p>
                        </div>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile'>
                    {my_interests_components}
        		</Columns>
            </div>
        </div>
    );
};

export default MyBooks;
