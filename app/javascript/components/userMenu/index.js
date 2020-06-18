import React, { Fragment, useEffect, useState } from 'react';
import { Menu, Container, Columns, Image, Heading } from 'react-bulma-components';
import styled from 'styled-components';
import UserService from '../../services/user';
import './index.scss';

const CustomContainer = styled(Container)`
    max-width: 250px;
    width: 20%;
    margin: 2vh 5vw 0 5vw;
    align-items: center;
`

const UserImage = styled.img`
    border: 5px solid #536DFE;
    border-radius: 50%;
    width: 180px;
    height: 180px;
    margin: 0 auto 10px;
`

const LogOut = styled.a`
    color: #536DFE;
    display: block;
    text-align: center;
`

const teste = {
    backgroundColor: "#FFA500",
    minHeight: "100%",
    minWidth: "0.5vw",
    borderRadius: "20px"
}

const UserMenu = (props) => {
    const [User, setUser] = useState([]);

    async function fetchUser(){
        const response = await UserService.index();
        console.log(response.data)
        setUser(response.data['user']);
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <Fragment>
            <CustomContainer>
                <Columns>
                    <Columns.Column>
                        <Heading className="has-text-centered is-4">
                            Perfil
                        </Heading>
                        <UserImage src={User.photo_url} className="image"/>
                        <Heading className="has-text-centered is-4" style={{marginBottom: "0"}}>
                            {User.name}
                        </Heading>
                        <LogOut href="/users/sign_out">Sair</LogOut>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column>
                        <Menu>
                            <Menu.List>
                                <Menu.List.Item href="/user" className={props.edit? "is-active":""}>
                                    Editar Dados
                                </Menu.List.Item>
                                <Menu.List.Item href="/user/confirmations" className={props.confirmations? "is-active":""}>
                                    Confirmações de livro
                                </Menu.List.Item>
                            </Menu.List>
                        </Menu>
                    </Columns.Column>
                </Columns>
            </CustomContainer>
            <div style={teste}>
            </div>
        </Fragment>
    )
}

export default UserMenu;