import React, { Fragment, useEffect, useState } from 'react';
import { Menu, Container, Content, Columns, Heading } from 'react-bulma-components';
import styled from 'styled-components';
import { UserService } from '../../services/index';
import './style.scss';

const CustomDiv = styled.div`
    display: flex;
    width: 30%;
    width: 28vw;
`
const CustomContainer = styled(Container)`
    width: 100%;
    margin: 2vh 5vw 0 5vw;
    align-items: center;
`

// const CustomContainer = styled(Container)`
//     max-width: 250px;
//     width: 20%;
//     margin: 2vh 5vw 0 5vw;
//     align-items: center;
// `

const UserImage = styled.img`
    border: 5px solid #536DFE;
    border-radius: 50%;
    width: 180px;
    height: 180px;
    margin: 0 auto 10px;
`

const UserWithoutImage = styled.div`
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

const DividerDivStyle = {
    backgroundColor: "#FFA500",
    minHeight: "100vh",
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
            <CustomDiv>
                <CustomContainer>
                    <Columns>
                        <Columns.Column>
                            <Heading className="has-text-centered is-4">
                                Perfil
                            </Heading>
                            {User.photo_url ? <UserImage src={User.photo_url} className="image"/>:<UserWithoutImage id="userNoPhoto"/>}
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
                                    <Menu.List.Item href="/users/edit" className={props.edit? "is-active":""}>
                                        Editar dados
                                    </Menu.List.Item>
                                    <Menu.List.Item href="/users/confirmations" className={props.confirmations? "is-active":""}>
                                        Confirmar recebimento
                                    </Menu.List.Item>
                                </Menu.List>
                            </Menu>
                        </Columns.Column>
                    </Columns>
                </CustomContainer>
                <div style={DividerDivStyle}></div>
            </CustomDiv>
        </Fragment>
    )
}

export default UserMenu;