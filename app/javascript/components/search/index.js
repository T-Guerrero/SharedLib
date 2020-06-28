import React, { Fragment, useEffect, useState } from 'react';
import { Columns, Notification, Heading, Container, Button, Section } from 'react-bulma-components';
import { SearchService } from '../../services/index';
import Book from '../book_preview';
// import { useParams } from 'react-router-dom' // para pegar '/id'


const SearchResults = (props) => {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);

    async function fetchSearch(props) {
        const response = await SearchService.index(props.query);
        setBooks(response.data['books']);
        setAuthors(response.data['authors_books']);
        setCategories(response.data['categories']);
    }

    useEffect(() => {
        fetchSearch(props);
    }, []);

    const books_components = books.map((book, key) =>
        <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
            <Book name={book.name} author={book.author} borrowed={book.borrowed} available={book.available} image_url={book.image_url} key={key} id={book.id}/>
        </Columns.Column>
    );

    const authors_components = authors.map((book, key) =>
        <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
            <Book name={book.name} author={book.author} borrowed={book.borrowed} available={book.available} image_url={book.image_url} key={key} id={book.id}/>
        </Columns.Column>
    );

    const categories_components = categories.map((category, key) =>
        <Columns.Column key={key}>
            <p>{category.name}</p>
        </Columns.Column>
    );

    return (
        <div>
            <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                <Columns>
                    <Columns.Column>
                        <Heading className='has-text-black' size={4}>
                        	Resultado da busca (Livros)
                        </Heading>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile center2-mobile'>
                    {books_components}
        		</Columns>
            </div>
            <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                <Columns>
                    <Columns.Column>
                        <Heading className='has-text-black' size={4}>
                        	Resultado da busca (Autores)
                        </Heading>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile center2-mobile'>
                    {authors_components}
        		</Columns>
            </div>
            <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                <Columns>
                    <Columns.Column>
                        <Heading className='has-text-black' size={4}>
                        	Resultado da busca (Categorias)
                        </Heading>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile center2-mobile'>
                    {categories_components}
        		</Columns>
            </div>
        </div>
    );
};

export default SearchResults;
