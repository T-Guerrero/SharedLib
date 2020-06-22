import React, { Fragment } from 'react';
import { Container, Columns, Button } from 'react-bulma-components';
import styled from 'styled-components';
import { TransitionService } from '../../services/index';

const CustomContainer = styled(Container)`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    width: 60%;
    border-bottom: 4px solid black;
    padding-bottom: 15px;
`

const BookImage = styled.img`
    border-radius: 12px;
    width: 280px;
    height: 20vw;
    @media (max-width: 940px){
        height: 370px;
    }
    border: 3px solid #FFA500;
    margin-bottom: 10px;
`

const BookInfo = styled.div`
    display: flex;
    margin-bottom: 1rem;
`


const ImageColumnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "300px"
}

const BookConfirmation = (props) => {
    // console.log(props)
    async function ConfirmBook(){
        const response = await TransitionService.destroy(props.id);
        console.log(response);
    }

    return(
        <Fragment>
            <CustomContainer>
                <Columns className="is-vcentered">
                    <Columns.Column style={ImageColumnStyle}>
                        <BookImage src={props.image_url} className="image"/>
                        <a href={`/books/${props.book.id}`}>
                            <Button className="is-link is-outlined">Ver Mais</Button>
                        </a>
                    </Columns.Column>
                    <Columns.Column>
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
                            <h6 style={{marginLeft: "0.5vw"}}>{props.category}</h6>
                        </BookInfo>
                        <BookInfo>
                            <h6 style={{fontWeight: "bold"}}>Responsável pelo transporte:</h6> 
                            <h6 style={{marginLeft: "0.5vw"}}>{props.oldUser.name}</h6>
                        </BookInfo>
                        <BookInfo>
                            <h6 style={{fontWeight: "bold"}}>Tempo restante para conclusão do transporte:</h6> 
                            <h6 style={{marginLeft: "0.5vw"}}>{props.deadline}</h6>
                        </BookInfo>
                        <Button 
                        className="is-success is-medium is-rounded is-fullwidth is-outlined"
                        onClick={() => ConfirmBook()}>
                            Confirmar Recebimento
                        </Button>
                    </Columns.Column>
                </Columns>
            </CustomContainer>
        </Fragment>
    )

}

export default BookConfirmation;