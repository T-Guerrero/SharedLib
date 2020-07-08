import React, { Fragment, useEffect, useState } from 'react';
import { Section, Container, Heading } from 'react-bulma-components';
import styled from 'styled-components';
import NavBar from '../../components/navbar';
import UserMenu from '../../components/userProfile_menu';
import BookConfirmation from '../../components/book_confirmation';
import { TransitionService, UserService } from '../../services/index';

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
    const [User, setUser] = useState([]);

    async function fetchTransitions(){
        const response = await TransitionService.index();
        setTransitions(response.data['transitions']);
    }

    async function fetchUser(){
        const response = await UserService.index();
        setUser(response.data['user']);
    }

    useEffect( () => {
        fetchTransitions();
        fetchUser();
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
            oldUserId={transition.oldUserId}
            deadline={transition.deadline}/>
        );
    });

    return (
        <Fragment>
            <NavBar/>
            <CustomSection>
                <UserMenu confirmations={true} user={User}/>
                <CustomContainer>
                    <Heading className="has-text-centered is-4">Confirmar recebimento de livro</Heading>
                    {BooksComponents}
                </CustomContainer>
            </CustomSection>
        </Fragment>
    )
}

export default ConfirmationUser;