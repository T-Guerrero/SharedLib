import React, { Fragment, useEffect, useState } from 'react';
import { Columns, Notification, Heading, Container, Button, Section } from 'react-bulma-components';
import styled from 'styled-components';
import NavBar from '../components/navbar';
import Book from '..//components/book_preview';
import { DashboardService } from '../services/index';
import addBookImg from '../../assets/images/adicione-um-livro.png';
import borrowABookImg from '../../assets/images/pegue-um-livro-emprestado.png';
import UserModel from '../components/user_modal';

const notificationStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 320,
    padding: "1.25rem 1.5rem 1.25rem 1.5rem"
}

const TransitionNameStyle = {
    cursor: "pointer",
    color: "#536DFE"
}

const HomeScreen = () => {
    const [my_books, setMyBooks] = useState([]);
    const [my_borrowings, setMyBorrowings] = useState([]);
    const [my_interests, setMyInterests] = useState([]);
    const [my_transitions, setMyTransitions] = useState([]);
    const [transitions_to_deliver, setTransitionsToDeliver] = useState([]);
    const [counter, setCounter] = useState({
        books: {},
        interests: {},
        my_borrowings: {},
        my_transitions: {},
        transitions_to_deliver: {}
    });

    const [currentUser, setcurrentUser] = useState({});
    const [Show, setShow] = useState(false);
    const [Loaded, setLoaded] = useState(false);

    async function fetchBooks() {
        const response = await DashboardService.index();
        setCounter(response.data['counter']);
        setMyBooks(response.data['my_books']);
        setMyBorrowings(response.data['my_borrowings'])
        setMyInterests(response.data['my_interests']);
        setMyTransitions(response.data['my_transitions']);
        setTransitionsToDeliver(response.data['transitions_to_deliver']);
        setLoaded(true);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    function handleTransitionClick(user) {
        setcurrentUser(user);
        setShow(true);
    }

    function formatDate(s) {
        let d = new Date(s);
        return `${d.getDate()}/${1 + d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    }

    const my_transitions_components = my_transitions.map((transition, key) =>
        <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
            <Book
            name={transition.book.name}
            author={transition.book.author}
            borrowed={transition.book.borrowed}
            available={transition.book.available}
            inTransition={true}
            image_url={transition.book.image_url}
            key={key}
            id={transition.book.id}/>
        </Columns.Column>
    );

    const transitions_to_deliver_components = transitions_to_deliver.map((transition, key) =>
        <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
            <Book name={transition.book.name}
            author={transition.book.author}
            borrowed={transition.book.borrowed}
            available={transition.book.available}
            inTransition={true}
            image_url={transition.book.image_url}
            key={key}
            id={transition.book.id}/>
            <p className="has-text-centered">Entregar para <strong style={TransitionNameStyle} onClick={() => handleTransitionClick(transition.newUser)}>{transition.newUser.name}</strong>
            </p><br/>
            <p className="has-text-centered">Prazo: {formatDate(transition.deadline)}</p>
        </Columns.Column>
    );

    const my_books_components = my_books.map((book, key) =>
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

    const my_borrowings_components = my_borrowings.map((borrowing, key) =>
        <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
            <Book
            name={borrowing.book.name}
            author={borrowing.book.author}
            borrowed={borrowing.book.borrowed}
            available={borrowing.book.available}
            inTransition={borrowing.book.inTransition}
            image_url={borrowing.book.image_url}
            key={key}
            id={borrowing.book.id}/>
        </Columns.Column>
    );

    const my_interests_components = my_interests.map((interest, key) =>
        <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
            <Book
            name={interest.book.name}
            author={interest.book.author}
            borrowed={interest.book.borrowed}
            available={interest.book.available}
            inTransition={interest.book.inTransition}
            image_url={interest.book.image_url}
            key={key}
            id={interest.book.id}/>
        </Columns.Column>
    );

    return(
        <Fragment>
            <NavBar />
            {counter.transitions_to_deliver.total > 0 &&
                <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                    <Columns>
                        <Columns.Column>
                            <Heading className='has-text-black' size={4}>
                            	Livros em transição para você entregar
                            </Heading>
                        </Columns.Column>
                        <Columns.Column>
                            <div style={{textAlign: "right"}}>
                                <p>{`Mostrando ${counter.transitions_to_deliver.showing} de ${counter.transitions_to_deliver.showing}`}</p>
                            </div>
                        </Columns.Column>
                    </Columns>
                    <Columns className='is-mobile center2-mobile'>
                        {transitions_to_deliver_components}
            		</Columns>
                </div>
            }
            {counter.my_transitions.total > 0 &&
                <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                    <Columns>
                        <Columns.Column>
                            <Heading className='has-text-black' size={4}>
                            	Livros em transição para você receber
                            </Heading>
                        </Columns.Column>
                        <Columns.Column>
                            <div style={{textAlign: "right"}}>
                                <p>{`Mostrando ${counter.my_transitions.showing} de ${counter.my_transitions.total}`}</p>
                            </div>
                        </Columns.Column>
                    </Columns>
                    <Columns className='is-mobile center2-mobile'>
                        {my_transitions_components}
            		</Columns>
                </div>
            }
            {counter.books.total > 0 &&
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
                    <Columns className='is-mobile center2-mobile'>
                        {my_books_components}
            		</Columns>
                </div>
            }
            <Section>
                <Container>
                    <Columns className="center">
                        <Columns.Column className="is-one-third">
                            <Notification className="is-warning" style={notificationStyle}>
                                <figure className="image is-128x128">
                                    <img src={addBookImg} desktop={{size: 'half'}} mobile={{size: 'two-thirds'}}/>
                                </figure>
                                <Heading size={5} className="has-text-centered">
                                  Adicione um livro!
                                </Heading>
                                <Heading subtitle size={6} className="has-text-centered">
                                    Não deixe seu livro pegando pó! Adicione-o à sua coleção de livro e ajude aqueles que precisam!
                                </Heading>
                                <a href="/books/new" style={{textDecoration: "none"}}>
                                <Button className="is-info">Adicione agora!</Button>
                                </a>
                            </Notification>
                        </Columns.Column>
                        <Columns.Column className="is-one-third">
                            <Notification className="is-warning" style={notificationStyle}>
                                <figure className="image is-128x128">
                                    <img src={borrowABookImg} desktop={{size: 'half'}} mobile={{size: 'two-thirds'}}/>
                                </figure>
                                <Heading size={5} className="has-text-centered">
                                  Pegue um livro emprestado!
                                </Heading>
                                <Heading subtitle size={6} className="has-text-centered">
                                    Precisando de um livro? Pegue ele emprestado!
                                </Heading>
                                <a href="/books" style={{textDecoration: "none"}}>
                                    <Button className="is-info">Pegue agora!</Button>
                                </a>
                            </Notification>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
            {counter.my_borrowings.showing > 0 &&
                <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                    <Columns>
                        <Columns.Column>
                            <Heading className='has-text-black' size={4}>
                    	       Meus Empréstimos
                            </Heading>
                        </Columns.Column>
                        <Columns.Column>
                            <div style={{textAlign: "right"}}>
                                <p>{`Mostrando ${counter.my_borrowings.showing} de ${counter.my_borrowings.showing}`}</p>
                            </div>
                        </Columns.Column>
                    </Columns>
                    <Columns className='is-mobile'>
                        {my_borrowings_components}
            		</Columns>
                </div>
            }
            {counter.interests.total > 0 &&
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
                    <Columns className='is-mobile center2-mobile'>
                        {my_interests_components}
            		</Columns>
                </div>
            }
            {Loaded && <UserModel id={currentUser.id} show={Show} setShow={setShow} />}
        </Fragment>
    );
}

export default HomeScreen;
