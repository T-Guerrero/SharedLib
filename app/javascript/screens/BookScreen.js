import React, { Fragment, useEffect, useState } from 'react';
import BookInfo from '../components/book';
import { BookService } from '../services/index'

const BookScreen = (props) => {
    const [Book, setBook] = useState([]);
    const [Users, setUsers] = useState([]);
    const [Loaded, setLoaded] = useState(false);
    let myBook = false

    async function fetchBook(){
        const response = await BookService.show(props.match.params.id)
        setUsers(response.data['users']);
        setBook(response.data['book']);
        setLoaded(true);
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
            {Loaded && <BookInfo
            isMyBook={myBook}
            book={Book}
            currentUserId={Users.currentUser}
            ownerId={Users.owner}
            />}
        </Fragment>
    )
}

export default BookScreen;