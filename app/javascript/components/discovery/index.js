import React, { Fragment, useEffect, useState } from 'react';
import { Navbar, Columns, Container, Notification, Heading, Button } from 'react-bulma-components';
import testeImgLivro from '../../../assets/seeds_images/sedgewick.jpg';
import { MyBooksService } from '../../services/index';
import Book from '../book';

const MyBooks = () => {
    const [my_books, setMyBooks] = useState([]);
    const [my_interests, setMyInterests] = useState([]);

    async function fetchBooks() {
        const response = await MyBooksService.index();
        setMyBooks(response.data['my_books'])
        setMyInterests(response.data['my_interests'])
    }

    useEffect(() => {
        fetchBooks();
    }, []);



    const my_books_components = my_books.map((book, key) =>
        <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
            <Book name={book.name} author={book.author} image_url={book.image_url} key={key} id={book.id}/>
        </Columns.Column>
    );

    const my_interests_components = my_interests.map((interest, key) =>
        <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
            <Book name={interest.book.name} author={interest.book.author} image_url={interest.book.image_url} key={key} id={interest.book.id}/>
        </Columns.Column>
    );
    //
    // const recommended_albums_components = recommended_albums.map((album, key) =>
    //     <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
    //         <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} key={key} id={album.id}/>
    //     </Columns.Column>
    // );
    //



    return (
        <div>
            <div>
                <Heading className='has-text-black' size={4}>
                	Meus Livros
                </Heading>
                <Columns className='is-mobile'>
                    {my_books_components}
        		</Columns>
            </div>
            <div>
                <Heading className='has-text-black' size={4}>
                	Meus Interesses
                </Heading>
                <Columns className='is-mobile'>
                    {my_interests_components}
        		</Columns>
            </div>
        </div>
    );
};

export default MyBooks;
