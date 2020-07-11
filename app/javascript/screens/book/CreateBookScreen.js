import React, { Fragment } from 'react';
import { Section } from 'react-bulma-components';
import styled from 'styled-components';
import Navbar from '../../components/navbar';
import Form from '../../components/book_form';

const CustomSection = styled(Section)`
    flex-direction: column;
    align-items: center;
`

const CreateBookScreen = () => {
    return(
        <Fragment>
            <Navbar />
            <CustomSection className="book">
                <h1>Adicionar um livro</h1>
                <Form />
            </CustomSection>
        </Fragment>
    )
}

export default CreateBookScreen;