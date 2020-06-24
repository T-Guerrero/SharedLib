import React, { Fragment, useEffect, useState } from 'react';
import { Columns, Notification, Heading, Container, Button, Section } from 'react-bulma-components';
import { MyBooksService } from '../../services/index';
import Book from '../book';
import addBookImg from '../../../assets/images/adicione-um-livro.png';
import borrowABookImg from '../../../assets/images/pegue-um-livro-emprestado.png';

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
            <Section>
                <Container>
                    <Columns className="center">
                        <Columns.Column className="is-one-third">
                            <Notification className="is-warning center2" style={{height: 320, padding: "1.25rem 1.5rem 1.25rem 1.5rem"}}>
                                <figure className="image is-128x128">
                                    <img src={addBookImg} desktop={{size: 'half'}} mobile={{size: 'two-thirds'}}/>
                                </figure>
                                <Heading size={5} className="has-text-centered">
                                  Adicione um livro!
                                </Heading>
                                <Heading subtitle size={6} className="has-text-centered">
                                    Não deixe seu livro pegando pó! Adicione-o à sua coleção de livro e ajude aqueles que precisam!
                                </Heading>
                                <a href="/books/new">
                                <Button className="is-info">Adicione agora!</Button>
                                </a>
                            </Notification>
                        </Columns.Column>
                        <Columns.Column className="is-one-third">
                            <Notification className="is-warning center2" style={{height: 320, padding: "1.25rem 1.5rem 1.25rem 1.5rem"}}>
                                <figure className="image is-128x128">
                                    <img src={borrowABookImg} desktop={{size: 'half'}} mobile={{size: 'two-thirds'}}/>
                                </figure>
                                <Heading size={5} className="has-text-centered">
                                  Pegue um livro emprestado!
                                </Heading>
                                <Heading subtitle size={6} className="has-text-centered">
                                    Precisando de um livro? Pegue ele emprestado!
                                </Heading>
                                <Button className="is-info">Pegue agora!</Button>
                            </Notification>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
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
