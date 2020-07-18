import React, { Fragment, useState, useEffect } from 'react';
import { Button, Modal, Section, Footer, Hero, Container } from 'react-bulma-components';
import styled from 'styled-components';
import { UserService } from '../../services/index'
import logoImage from '../../../assets/images/Logo.png';
import './style.scss';

const CustomSection = styled(Section)`
    flex-direction: column;
    background-color: white;
    border-radius: 30px;
    padding: 0px;
`

const UserImage = styled.img`
    border: 5px solid #536DFE;
    border-radius: 50%;
    width: 270px;
    height: 270px;
    margin: 0 auto 20px;
`

const UserWithoutImage = styled.div`
    border: 5px solid #536DFE;
    border-radius: 50%;
    width: 270px;
    height: 270px;
    margin: 0 auto 20px;
`

const UserContainer = styled(Container)`
    padding: 50px;
`

const UserInfo = styled.div`
    display: flex;
    margin-bottom: 10px;
`

const CustomFooter = styled(Footer)`
    border-radius: 0px 0px 30px 30px;
    padding-top: 18px;

`

const logoStyle = {
    width: "313px",
    minHeight: "87px",
    marginLeft: "30px"
}

const heroHeadStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "50px",
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px"
}

const UserModal = (props) => {
    const [User, setUser] = useState([])

    async function fetchUser(){
        const response = await UserService.show(props.id);
        setUser(response.data['user'])
    }

    useEffect(() => {
        fetchUser();
    }, [props.id]);

    return (
        <Fragment>
            <Modal show={props.show} onClose={() => props.setShow(false)} closeOnBlur={true}>
                <Modal.Content>
                    <CustomSection>
                        <Hero>
                            <Hero.Head style={heroHeadStyle} className="header">
                                    <img src={logoImage} style={logoStyle} desktop={{size: 'half'}} mobile={{size: 'two-thirds'}}/>
                            </Hero.Head>
                        </Hero>
                        <UserContainer>
                            {User.photo_url ? <UserImage src={User.photo_url} className="image"/>:<UserWithoutImage id="userNoPhoto"/>}
                            <Container style={{marginLeft: "30px"}}>
                                <UserInfo>
                                    <h6 style={{fontWeight: "bold"}}>Nome:</h6>
                                    <h6 style={{marginLeft: "0.5vw"}}>{User.name}</h6>
                                </UserInfo>
                                <UserInfo>
                                    <h6 style={{fontWeight: "bold"}}>Email:</h6>
                                    <h6 style={{marginLeft: "0.5vw"}}>{User.email}</h6>
                                </UserInfo>
                                <UserInfo>
                                    <h6 style={{fontWeight: "bold"}}>Celular:</h6>
                                    <h6 style={{marginLeft: "0.5vw"}}>{User.phone}</h6>
                                </UserInfo>
                            </Container>
                        </UserContainer>
                        <CustomFooter />
                    </CustomSection>
                </Modal.Content>
            </Modal>
        </Fragment>
    )
}

export default UserModal;
