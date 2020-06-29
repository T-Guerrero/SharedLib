import React, { Fragment, useEffect, useState } from 'react';
import { Columns, Heading } from 'react-bulma-components';
import NavBar from '../components/navbar';
import Book from '../components/book_preview';
import { SearchService } from '../services/index';

const SearchScreen = () => {
    let queryString = document.location.search.substring(1); // remove '?'
    queryString = queryString.split("&"); // array [ "p1=v1", "p2=v2", "p3=v3" ]
    let queries = {};
    let p, v;
    for (let x of queryString) {
        [p, v] = x.split("=");
        queries[p] = v;
    }

    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);

    async function fetchSearch() {
        const response = await SearchService.index(queries.query);
        setBooks(response.data['books']);
        setAuthors(response.data['authors_books']);
        setCategories(response.data['categories']);
    }

    useEffect(() => {
        fetchSearch();
    }, []);

    const books_components = books.map((book, key) =>
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

    const authors_components = authors.map((book, key) =>
        <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
            <Book name={book.name}
            author={book.author}
            borrowed={book.borrowed}
            available={book.available}
            inTransition={book.inTransition}
            image_url={book.image_url}
            key={key}
            id={book.id}/>
        </Columns.Column>
    );

    const categories_components = categories.map((category, key) =>
        <Columns.Column key={key}>
            <a href={`/categories/${category.id}/books`}>{category.name}</a>
        </Columns.Column>
    );

    return(
        <Fragment>
            <NavBar />
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
        </Fragment>
    );
}
export default SearchScreen;
