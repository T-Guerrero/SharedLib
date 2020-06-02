import React from 'react';
import { Columns, Button, Container, Notification, Heading } from 'react-bulma-components';
import '../../app.scss';
//import '../../debug.scss';
import styled from 'styled-components';
import logoImage from '../../../assets/images/Logo.png';
import questionImage from '../../../assets/images/question.png';
import nocashImage from '../../../assets/images/nocash.png';

const ColumnsFullWidth = styled(Columns)`
  width: 100%;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
`

const ButtonHome = styled(Button)`
    border-radius: 35px;
    padding-right: 60px;
    padding-left: 60px;
`

const paddingStyle = {
        paddingTop: "40px",
        paddingBottom: "40px"
};

const HomeHeader = () => {
    return (
        <div>
            <section className="header" style={paddingStyle}>
                <Columns className="center">
                    <Columns.Column desktop={{size: 'half'}} mobile={{size: 'two-thirds'}}>
                        <img src={logoImage}/>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column>
                        <Container>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Container>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column className="center">
                        <a href="/users/sign_up">
                            <ButtonHome className="is-link is-large">Cadastrar</ButtonHome>
                        </a>
                    </Columns.Column>
                    <Columns.Column className="center">
                        <a href="/users/sign_in">
                            <ButtonHome className="is-link is-large">Fazer login</ButtonHome>
                        </a>
                    </Columns.Column>
                </Columns>
            </section>
            <section style={paddingStyle}>
                <Container>
                    <Columns>
                        <Columns.Column>
                            <Notification>
                                <figure className="center">
                                    <img src={questionImage}/>
                                </figure>
                                <Heading renderAs="h2">Como funciona?</Heading>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Notification>
                        </Columns.Column>
                        <Columns.Column>
                            <Notification>
                                <figure className="center">
                                <img src={nocashImage}/>
                                </figure>
                                <Heading renderAs="h2">Pegue livros emprestados sem custo</Heading>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Notification>
                        </Columns.Column>
                    </Columns>
                </Container>

            </section>
        </div>
    );
};

export default HomeHeader;
