import React, { Fragment, useEffect, useState } from 'react';
import { Columns, Heading, Button } from 'react-bulma-components';
import NavBar from '../components/navbar';
import Book from '../components/book_preview';
import { BookService } from '../services/index';


const MyBooksScreen = () => {
    const [my_books, setMyBooks] = useState([]);


    async function fetchBooks() {
        const response = await BookService.index();
        setMyBooks(response.data['my_books']);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const my_books_components = my_books.map((book, key) =>
        <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
            <Book
            name={book.name}
            author={book.author}
            borrowed={book.borrowed}
            available={book.available}
            inTrasition={book.inTrasition}
            image_url={book.image_url}
            key={key}
            id={book.id}/>
        </Columns.Column>
    );

    const bookCounter = my_books.length;


    const buttonStyle = {
        whiteSpace: "normal",
        width: 160,
        height: 60,
        fontSize: 14,
        borderRadius: 16
    }

    return(
        <Fragment>
            <NavBar />
            <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                <Columns className="is-mobile">
                    <Columns.Column>
                        <Heading className='has-text-black' size={4}>
                        	Meus Livros
                        </Heading>
                    </Columns.Column>
                    <Columns.Column className="is-one-fifth-desktop">
                      <a href="/books/new">
                          <Button className="is-info" style={buttonStyle}>Adicione um novo livro</Button>
                      </a>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile center2-mobile'>
                    {my_books_components}
        		</Columns>
            </div>
            {bookCounter == 0 &&
                    <p>Você ainda não adicionou nenhum livro. Adicione um para poder pegar livros emprestados.</p>
            }
        </Fragment>
    );
}
export default MyBooksScreen;
