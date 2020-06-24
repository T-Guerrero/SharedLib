import React, { Fragment, useEffect, useState } from 'react';
import { Section, Container, Heading } from 'react-bulma-components';
import styled from 'styled-components';
import NavBar from '../../components/navbar';
import UserMenu from '../../components/userMenu';
import BookConfirmation from '../../components/book_confirmation';
import { TransitionService } from '../../services/index';

const CustomSection = styled(Section)`
    display: flex;
    min-height: 100%;
`

const CustomContainer = styled(Container)`
    margin-top: 2vh;
    align-items: center;
`

const ConfirmationUser = () => {
    const [Transitions, setTransitions] = useState([]);

    async function fetchTransitions(){
        const response = await TransitionService.index();
        setTransitions(response.data['transitions']);
    }

    useEffect( () => {
        fetchTransitions();
    }, []);
    
    const BooksComponents = Transitions.map((transition, key) => {
        return(
            <BookConfirmation 
            key={key}
            id={transition.id}
            book={transition.book}
            image_url={transition.image_url}
            category={transition.category}
            oldUser={transition.oldUser} 
            deadline={transition.deadline}/>
        );
    });

    return (
        <Fragment>
            <NavBar/>
            <CustomSection>
                <UserMenu confirmations={true}/>
                <CustomContainer>
                    <Heading className="has-text-centered is-4">Confirmar recebimento de livro</Heading>
                    {BooksComponents}
                </CustomContainer>
            </CustomSection>
        </Fragment>
    )
}

export default ConfirmationUser;