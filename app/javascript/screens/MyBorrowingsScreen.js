import React, { Fragment, useEffect, useState } from 'react';
import Pluralize from 'pluralize';
import { Columns, Heading } from 'react-bulma-components';
import NavBar from '../components/navbar';
import { DashboardService } from '../services/index';
import Book from '../components/book_preview';

const MyBorrowingsScreen = () => {
    const [borrowings, setBorrowings] = useState([]);
    const [user, setUser] = useState([]);

    async function fetchBorrowings() {
        const response = await DashboardService.index();
        setBorrowings(response.data['my_borrowings']);
        setUser(response.data['currentUser'])
    }

    useEffect(() => {
        fetchBorrowings();
    }, []);

    const my_borrowings_components = borrowings.map((borrowing, key) =>
        <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
            <Book name={borrowing.book.name} author={borrowing.book.author} borrowed={borrowing.book.borrowed} available={borrowing.book.available} image_url={borrowing.book.image_url} key={key} id={borrowing.book.id}/>
            <p>{`Prazo limite ${borrowing.deadline}`}</p>
        </Columns.Column>
    );

    return(
        <Fragment>
            <NavBar />
            <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                <Columns className="is-vcentered">
                    <Columns.Column>
                        <Heading className='has-text-black' size={4}>
                        Meus Empréstimos
                        </Heading>
                    </Columns.Column>
                    <Columns.Column>
                        <Heading className='is-pulled-right subtitle has-text-black' size={6}>
                        Você pode pegar {Pluralize("livro", user.maxBorrowings, true)} {Pluralize("emprestado", user.maxBorrowings)}
                        </Heading>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile center2-mobile'>
                    {my_borrowings_components}
                </Columns>
            </div>
        </Fragment>
    );
}
export default MyBorrowingsScreen;
