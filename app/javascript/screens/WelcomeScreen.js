import React, { Fragment } from 'react';
import { Section, Columns, Button, Container, Notification, Heading } from 'react-bulma-components';
import styled from 'styled-components';
import logoImage from '../../assets/images/Logo.png';
import questionImage from '../../assets/images/question.png';
import nocashImage from '../../assets/images/nocash.png';

const ButtonHome = styled(Button)`
    color: #FFE0E0;
    background-color: #536DFE;
    outlined: none;
    border: 0px;
    border-radius: 35px;
    padding-right: 60px;
    padding-left: 60px;
    transition: 400ms;
    :hover {
        background-color: #4B61DD;
    }
`

const HeaderSection = styled(Section)`
    flex-direction: column;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
`

const sectionStyle = {
    paddingTop: "40px",
    paddingBottom: "40px"
}

const notificationStyle = {
    flex: "1"
}

const columnNotificationStyle = {
    display: "flex",
    flexDirection: "column"
}

const WelcomeScreen = () => {
    return (
        <Fragment>
            <HeaderSection className="header" style={sectionStyle}>
                <Columns className="center">
                    <Columns.Column desktop={{size: 'half'}} mobile={{size: 'two-thirds'}}>
                        <img src={logoImage} className="image is-520x150"/>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column>
                        <Container  style={{textAlign: "center"}}>
                            <Heading className="subtitle is-5">
                                A SharedLib é uma biblioteca virtual que não possui nenhum livro! Feito para os estudantes da
                                Universidade de São Paulo do campus da capital, ela usa os livros dos próprios usuários e cria
                                uma rede onde os usuários podem emprestar livros entre si!
                            </Heading>
                        </Container>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column className="center">
                        <a href="/users/sign_up">
                            <ButtonHome className="is-large">Cadastrar</ButtonHome>
                        </a>
                    </Columns.Column>
                    <Columns.Column className="center">
                        <a href="/users/sign_in">
                            <ButtonHome className="is-large">Fazer login</ButtonHome>
                        </a>
                    </Columns.Column>
                </Columns>
            </HeaderSection>
            <Section style={sectionStyle}>
                <Container>
                    <Columns>
                        <Columns.Column style={columnNotificationStyle}>
                            <Notification style={notificationStyle}>
                                <figure className="center">
                                    <img src={questionImage}/>
                                </figure>
                                <Heading renderAs="h2">Como funciona?</Heading>
                                <p className="has-text-justified">
                                    Através de um sistema de cadastro e gerenciamento de livros, a SharedLib disponiliza todo um
                                    sistema para que você cadastre seus livros, pegue livros emprestados e/ou manifeste interesse
                                    por um livro e fique na lista de espera para pegá-lo emprestado. Após pegar um livro emprestado,
                                    combine com o responsável pelo transporte a melhor maneira de realizar a troca da posse do livro
                                    e, então, confirme o recebimento do livro no seu perfil de usuário.
                                </p><br/>
                                <p className="has-text-justified">
                                    Os empréstimos tem duração de 10 dias podendo serem renovados automaticamente por mais 10 dias caso
                                    não haja outros interesses no livro, além disso, o dono do livro pode requisitá-lo de volta a
                                    qualquer momento. O tempo máximo para o transporte de um usuário para o outro é de 5 dias, caso o
                                    transporte não seja realizado nesse intervalo de tempo o usuário responsável pelo transporte receberá
                                    uma punição reduzindo em um a quantidade máxima de livros que o mesmo pode pegar emprestado.
                                </p>
                            </Notification>
                        </Columns.Column>
                        <Columns.Column style={columnNotificationStyle}>
                            <Notification style={notificationStyle}>
                                <figure className="center">
                                <img src={nocashImage}/>
                                </figure>
                                <Heading renderAs="h2">Pegue livros emprestados sem custo</Heading>
                                <p className="has-text-justified">
                                O objetivo da SharedLib é criar um sistema de cooperação entre os seus usuários, portanto, para cada
                                livro seu cadastrado no site, você tem direito a pegar um livro emprestado a mais, criando assim uma rede
                                em que todos colaboram. Inicialmente é necessário cadastrar pelo menos um livro seu para pegar algum outro
                                emprestado.
                                </p><br/>
                                <p className="has-text-justified">
                                Com exceção dos casos em que o livro é desabilitado pois o transporte não foi realizado com sucesso,
                                Sempre que você desabilita um dos seus livros do sistema, o número máximo de livros que você pode pegar
                                emprestado também é reduzido até que o mesmo seja ativado novamente ou algum outro livro seja cadastrado
                                no site.
                                </p>
                            </Notification>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </Fragment>
    );
};

export default WelcomeScreen;
