import React, { Fragment, useEffect, useState } from 'react';
import BookInfo from '../components/book';
import { BookService } from '../services/index'

const BookScreen = (props) => {
    const [Book, setBook] = useState([]);
    const [Users, setUsers] = useState([]);
    let myBook = false

    async function fetchBook(){
        const response = await BookService.show(props.match.params.id)
        setBook(response.data['book']);
        setUsers(response.data['users']);
    }

    useEffect( () => {
        fetchBook();
    }, [])

    if (Users.currentUser == Users.owner)
        myBook = true;
    else
        myBook = false;

    return (
        <Fragment>
            <BookInfo
            isMyBook={myBook}
            book={Book}
            currentUserId={Users.currentUser}
            />
        </Fragment>
    )
}

export default BookScreen;