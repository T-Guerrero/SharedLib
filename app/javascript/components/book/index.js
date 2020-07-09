import React, { Fragment, useState } from 'react';
import Pluralize from 'pluralize';
import { useHistory } from 'react-router-dom';
import { Heading, Container, Section, Columns, Button, Notification } from 'react-bulma-components';
import styled from 'styled-components';
import Navbar from '../navbar';
import UserModel from '../user_modal';
import BookStatusTag from '../bookStatus_tag';
import { DashboardService, InterestService, TransitionService, BookService, BorrowingService } from '../../services/index';

const CustomSection = styled(Section)`
    flex-direction: column;
    align-items: center;
`

const BookImage = styled.img`
    max-width: 380px;
    max-height: 55vh;
    margin-bottom: 10px;
`

const ButtonsContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 0 auto 0 0;
    @media (max-width: 1000px){
        margin: 0 auto;
    }
`

const CustomButton = styled(Button)`
    color: #FFE0E0;
    outlined: none;
    background-color: #536DFE;
    transition: 400ms;
    width: 100%;
    margin-top: 20px;
    :hover {
        background-color: #4B61DD;
    }
`

const BookInfo = styled.div`
    display: flex;
    margin-bottom: 1rem;
`

const titleStyle = {
    fontWeight: "normal",
    fontSize: "36px",
    color: "#000000",
    marginBottom: "30px"
}

const CenterColumnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "100px"
}

const ColumnsStyle = {
    marginTop: "50px"
}

const OwnerNameStyle = {
    cursor: "pointer",
    color: "#536DFE",
    marginLeft: "0.5vw"
}

const Book = (props) => {
    const [Show, setShow] = useState(false);
    const [ResponseData, setResponseData] = useState([]);
    let BookStatus;
    let Buttons, Title;
    let history = useHistory();

    async function manifestInterest(){
        const response = await InterestService.create(props.book.id);
        setResponseData(response.data);
        if (response.data.status == 'success')
            window.location.reload();
    }

    async function destroyInterest(){
        await InterestService.destroy(props.book.id, props.book.interestId);
        window.location.reload();
    }

    async function createTransition(){
        const response = await TransitionService.create(props.book.id);
        setResponseData(response.data);
        if (response.data.status == 'success')
            setTimeout(() => window.location.reload(), 2000);
    }

    async function returnBook(){
        const response = await BorrowingService.destroyByUser(props.book.id, props.book.borrowing.id);
        setResponseData(response.data);
        setTimeout(() => window.location.reload(), 2000);
    }

    async function destroyBook(){
        await BookService.destroy(props.book.id)
        history.push('/home')
    }

    async function takeBookBack(){
        const response = await BorrowingService.destroyByOwner(props.book.id, props.book.borrowing.id);
        setResponseData(response.data);
        setTimeout(() => window.location.reload(), 2000);
    }

    async function activeBook(){
        await DashboardService.activeBook(props.book.id)
        window.location.reload();
    }

    async function disableBook(){
        await DashboardService.disableBook(props.book.id)
        window.location.reload();
    }

    //Botões
    if (props.isMyBook){
        let statusButton
        if (props.book.available){
            if (!props.book.borrowed && !props.book.inTransition){
                statusButton =
                <CustomButton className="is-rounded is-medium" 
                onClick={() => disableBook()}>Desativar livro</CustomButton>
            }
            else{
                statusButton =
                <CustomButton className="is-rounded is-medium" 
                onClick={() => takeBookBack()}
                disabled={!props.book.inTransition && props.book.borrowed ? false:true}>
                Requisitar livro de volta</CustomButton>
            }
        }
        else{
            statusButton =
            <CustomButton className="is-rounded is-medium" 
            onClick={() => activeBook()}>Ativar livro</CustomButton>
        }
        
        Buttons = 
        <ButtonsContainer>
            <a href={`/books/${props.book.id}/edit`}>
                <CustomButton className="is-rounded is-medium">Editar detalhes do livro</CustomButton>
            </a>
            {statusButton}
            <CustomButton className="is-rounded is-medium"
            onClick={() => {if (window.confirm('Você tem certeza?')) destroyBook()} }
            disabled={!props.book.borrowed && !props.book.inTransition ? false:true}>
            Remover livro do site</CustomButton>
        </ButtonsContainer>
        Title = <Heading style={titleStyle}>Detalhes do seu livro</Heading>
    }
    else{
        let interestButton
        if (props.book.hasInterest){
            interestButton = 
            <CustomButton className="is-rounded is-medium"
            onClick={() => destroyInterest()}>Remover interesse</CustomButton>
        }
        else{
            interestButton = 
            <CustomButton className="is-rounded is-medium"
            onClick={() => manifestInterest()}
            disabled={props.book.available && (props.book.borrowed && props.currentUserId != props.book.borrowing.userId) ||
                    (props.book.inTransition && props.currentUserId != props.book.transition.userId) ? false:true}>
            Manifestar interesse</CustomButton>
        }

        Buttons =
        <ButtonsContainer>
            {interestButton}
            <p style={{textAlign: "center"}}>{Pluralize("Pessoa", props.book.interestsCount, true)} têm interesse</p>

            <CustomButton className="is-rounded is-medium"
            onClick={() => createTransition()}
            disabled={props.book.available && !props.book.borrowed
                    && !props.book.inTransition && props.book.interestsCount == 0 ? false:true}>
            Pegar emprestado</CustomButton>

            <CustomButton className="is-rounded is-medium"
            onClick={() => returnBook()}
            disabled={props.book.available && props.book.borrowed
                    && props.currentUserId == props.book.borrowing.userId ? false:true}>
            Devolver livro</CustomButton>
        </ButtonsContainer>
        Title = <Heading style={titleStyle}>Detalhes do livro</Heading>
    }

    //Estado do livro
    if (!props.book.available){
        BookStatus = <p>Indisponível</p>
    }
    else if (props.book.borrowed){
        BookStatus = <p>Emprestado para {props.book.borrowing.userName} (Prazo: {props.book.borrowing.deadline})</p>
    }
    else if(props.book.inTransition){
        BookStatus = <p>Em transição</p>
    }
    else{
        BookStatus = <p>Disponível</p>
    }

    return (
        <Fragment>
            <Navbar />
            <CustomSection>
                {Title}
                {ResponseData.message &&
                <Notification color={ResponseData.status == 'success'? "success":"danger"}>{ResponseData.message}</Notification>}
                <Columns style={ColumnsStyle}>
                    <Columns.Column style={CenterColumnStyle}>
                            <BookImage src={props.book.image_url} alt="Book Image"/>
                            <BookStatusTag
                            available={props.book.available}
                            borrowed={props.book.borrowed}
                            inTransition={props.book.inTransition} />
                    </Columns.Column>
                    <Columns.Column style={CenterColumnStyle}>
                        <Container>
                            <BookInfo>
                                <h6 style={{fontWeight: "bold"}}>Nome:</h6> 
                                <h6 style={{marginLeft: "0.5vw"}}>{props.book.name}</h6>
                            </BookInfo>
                            <BookInfo>
                                <h6 style={{fontWeight: "bold"}}>Autor:</h6> 
                                <h6 style={{marginLeft: "0.5vw"}}>{props.book.author}</h6>
                            </BookInfo>
                            <BookInfo>
                                <h6 style={{fontWeight: "bold"}}>Edição:</h6> 
                                <h6 style={{marginLeft: "0.5vw"}}>{props.book.edition}</h6>
                            </BookInfo>
                            <BookInfo>
                                <h6 style={{fontWeight: "bold"}}>Ano:</h6> 
                                <h6 style={{marginLeft: "0.5vw"}}>{props.book.year}</h6>
                            </BookInfo>
                            <BookInfo>
                                <h6 style={{fontWeight: "bold"}}>Categoria:</h6> 
                                <h6 style={{marginLeft: "0.5vw"}}>{props.book.category}</h6>
                            </BookInfo>
                            <BookInfo>
                                <h6 style={{fontWeight: "bold"}}>Dono:</h6>
                                <h6 style={OwnerNameStyle} onClick={() => setShow(true)}>{props.book.owner}</h6>
                            </BookInfo>
                            <BookInfo>
                                <h6 style={{fontWeight: "bold"}}>Status:</h6> 
                                <h6 style={{marginLeft: "0.5vw"}}>{BookStatus}</h6>
                            </BookInfo>
                            {Buttons}
                        </Container>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column style={{marginRight: "120px", marginTop: "10px"}}>
                        <CustomButton className="is-rounded is-large" style={{width: "200px"}} onClick={history.goBack}>
                            Voltar
                        </CustomButton>
                    </Columns.Column>
                </Columns>
            </CustomSection>
            <UserModel id={props.ownerId} show={Show} setShow={setShow} />
        </Fragment>
    )
}

export default Book;