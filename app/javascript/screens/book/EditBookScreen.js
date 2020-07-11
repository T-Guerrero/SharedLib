import React, { Fragment, useState, useEffect } from 'react';
import { Section } from 'react-bulma-components';
import styled from 'styled-components';
import NavBar from '../../components/navbar';
import Form from '../../components/book_form';
import { BookService } from '../../services/index'


const CustomSection = styled(Section)`
    flex-direction: column;
    align-items: center;
`

const EditBookScreen = (props) => {
    const [Book, setBook] = useState([]);
    const [Loaded, setLoaded] = useState(false);

    async function fetchBook(){
        const response = await BookService.show(props.match.params.id);
        setBook(response.data['book'])
        setLoaded(true);
    }

    useEffect(()=>{
        fetchBook();
    }, []);

    return (
        <Fragment>
            <NavBar />
            <CustomSection className="book">
                <h1>Editar livro</h1>
                {Loaded && <Form book={Book} Edit={true}/>}
            </CustomSection>
        </Fragment>
    )
}

export default EditBookScreen;