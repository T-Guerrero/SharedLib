import React, { Fragment, useEffect, useState } from 'react';
import { Columns, Notification, Heading, Container, Button, Section } from 'react-bulma-components';
import { DashboardService } from '../../services/index';
import Book from '../book_preview';

const Borrowings = () => {
    const [borrowings, setBorrowings] = useState([]);

    async function fetchBorrowings() {
        const response = await DashboardService.index();
        setBorrowings(response.data['my_borrowings']);
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

    return (
        <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
            <Columns>
                <Columns.Column>
                    <Heading className='has-text-black' size={4}>
            	       Meus Empréstimos
                    </Heading>
                </Columns.Column>
            </Columns>
            <Columns className='is-mobile center2-mobile'>
                {my_borrowings_components}
    		</Columns>
        </div>
    );
};

export default Borrowings;
