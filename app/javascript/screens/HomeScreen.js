import React, { Fragment, useEffect, useState } from 'react';
import { Columns, Notification, Heading, Container, Button, Section } from 'react-bulma-components';
import NavBar from '../components/navbar';
import Book from '..//components/book_preview';
import { DashboardService } from '../services/index';
import addBookImg from '../../assets/images/adicione-um-livro.png';
import borrowABookImg from '../../assets/images/pegue-um-livro-emprestado.png';

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

    async function fetchBooks() {
        const response = await DashboardService.index();
        setCounter(response.data['counter']);
        setMyBooks(response.data['my_books']);
        setMyBorrowings(response.data['my_borrowings'])
        setMyInterests(response.data['my_interests']);
        setMyTransitions(response.data['my_transitions']);
        setTransitionsToDeliver(response.data['transitions_to_deliver']);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const my_transitions_components = my_transitions.map((transition, key) =>
        <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
            <Book
            name={transition.book.name}
            author={transition.book.author}
            borrowed={transition.book.borrowed}
            available={transition.book.available}
            inTransition={transition.book.available}
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
            inTransition={transition.book.inTransition}
            image_url={transition.book.image_url}
            key={key}
            id={transition.book.id}/>
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
            <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                <Columns>
                    <Columns.Column>
                        <Heading className='has-text-black' size={4}>
                        	Livros em transição para você receber
                        </Heading>
                    </Columns.Column>
                    <Columns.Column>
                        <div style={{textAlign: "right"}}>
                            <p>{`Mostrando ${counter.my_transitions.showing} de ${counter.my_transitions.showing}`}</p>
                        </div>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile center2-mobile'>
                    {my_transitions_components}
        		</Columns>
            </div>
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
                                <a href="/books">
                                    <Button className="is-info">Pegue agora!</Button>
                                </a>
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
                            <p>{`Mostrando ${counter.my_borrowings.showing} de ${counter.my_borrowings.showing}`}</p>
                        </div>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile'>
                    {my_borrowings_components}
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
                <Columns className='is-mobile center2-mobile'>
                    {my_interests_components}
        		</Columns>
            </div>
        </Fragment>
    );
}
export default HomeScreen;
