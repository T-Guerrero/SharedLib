import React, { Fragment, useEffect, useState } from 'react';
import Pluralize from 'pluralize';
import { Columns, Heading, Button } from 'react-bulma-components';
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

    function formatDate(s) {
        let d = new Date(s);
        return `${d.getDate()}/${1 + d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    }

    const buttonStyle = {
        whiteSpace: "normal",
        width: 160,
        height: 60,
        fontSize: 14,
        borderRadius: 16
    }

    const my_borrowings_components = borrowings.map((borrowing, key) =>
            <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
                <Book name={borrowing.book.name} author={borrowing.book.author} borrowed={borrowing.book.borrowed} available={borrowing.book.available} image_url={borrowing.book.image_url} key={key} id={borrowing.book.id}/>
                <p className="has-text-centered">{`Prazo limite ${formatDate(borrowing.deadline)}`}</p>
            </Columns.Column>
    );

    const borrowingsCounter = borrowings.length;

    return(
        <Fragment>
            <NavBar />
            <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                <Columns className="is-vcentered is-mobile">
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
                    <Columns.Column className="is-one-fifth-desktop">
                      <a href="/books">
                          <Button className="is-info" style={buttonStyle}>Pegue um novo livro emprestado</Button>
                      </a>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile center2-mobile'>
                    {my_borrowings_components}
                </Columns>
                {borrowingsCounter == 0 &&
                        <p>Você ainda não pegou nenhum livro emprestado.</p>
                }

            </div>
        </Fragment>
    );
}
export default MyBorrowingsScreen;
