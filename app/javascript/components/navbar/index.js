import React, { Fragment, useState, useEffect } from 'react';
import { Navbar } from 'react-bulma-components';
import logoImage from '../../../assets/images/Logo.png';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { GiOpenBook, GiBookshelf, GiAbstract114 } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import SearchBar from "../search_bar";
import UserModel from '../user_modal';
import { UserService } from '../../services/index';
import './style.scss'

const CustomNavbar = styled(Navbar)`
    background-color: #FFA500;
    padding: 20px 20px 0;
    height: 170px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex-direction: column;
`

const NavbarButton = styled(Navbar.Item)`
    .navbar-link:not(.is-arrowless):after {
        border-color: black;
    }
    width: 180px;
    justify-content: center;
    font-size: 18px;
`

const NavbarLink = styled(Navbar.Link)`
    width: 180px;
    justify-content: center;
`

const logoStyle = {
    width: "313px",
    minHeight: "87px",
    marginLeft: "30px"
}

// 940x260

const navbarMenuStyle = {
    alignItems: "flex-end",
    marginLeft: "20vw"
}

const BrandStyle = {
    alignItems: "center",
    justifyContent: "space-between"
}

const UserIconStyle = {
    maxWidth: "100px",
    maxHeight: "50px",
    marginRight: "60px"
}

const MenuTextStyle = {
    paddingLeft: "5px"
}

const navbar = () => {
    const [User, setUser] = useState([]);
    const [Show, setShow] = useState(false);
    const [Loaded, setLoaded] = useState(false);

    async function fetchUser(){
        const response = await UserService.index();
        setUser(response.data['user']);
        setLoaded(true);
    }

    useEffect(() => {
        fetchUser();
    }, [])
    
    return (
        <Fragment>
            <CustomNavbar>
                <Navbar.Brand style={BrandStyle}>
                    <Navbar.Item renderAs="a" href="/home">
                        <img src={logoImage} style={logoStyle} desktop={{size: 'half'}} mobile={{size: 'two-thirds'}}/>
                    </Navbar.Item>
                    <Navbar.Item renderAs ="div" className="navbar-end">
                        <Navbar.Item renderAs ="div">
                            <SearchBar/>
                        </Navbar.Item>
                        <Navbar.Item renderAs ="div" id="currentUserInfo">
                            <Navbar.Item>
                                <strong onClick={() => setShow(true)}>Olá, {User.name}</strong>
                            </Navbar.Item>
                            <NavbarButton id="user" className="UserDropdown" dropdown hoverable style={UserIconStyle}
                            onClick={() => document.querySelectorAll('.UserDropdown').forEach(item => item.classList.toggle('is-active'))}>
                                <NavbarLink>
                                    <FaUserCircle size="2em"/>
                                </NavbarLink>
                                <Navbar.Dropdown>
                                    <Navbar.Item href="/users/edit">
                                        Meu Perfil
                                    </Navbar.Item>
                                    <Navbar.Divider/>
                                    <Navbar.Item href="/users/sign_out">
                                        Sair
                                    </Navbar.Item>
                                </Navbar.Dropdown>
                            </NavbarButton>
                        </Navbar.Item>
                    </Navbar.Item>
                </Navbar.Brand>
                <Navbar.Burger onClick={() => document.querySelector('#mainNavbar').classList.toggle('is-active')}>
                </Navbar.Burger>
                    <Navbar.Menu id="mainNavbar">
                        <Navbar.Container style={navbarMenuStyle}>
                            <NavbarButton href="/home">
                                <AiFillHome/>
                                <p style={MenuTextStyle}>Home</p>
                            </NavbarButton>
                            <NavbarButton dropdown hoverable href="#">
                                <NavbarLink>
                                    <GiOpenBook/>
                                    <p style={MenuTextStyle}>Meus Livros</p>
                                </NavbarLink>
                                <Navbar.Dropdown>
                                    <Navbar.Item href="/users/books">
                                        Livros
                                    </Navbar.Item>
                                    <Navbar.Divider/>
                                    <Navbar.Item href="/users/borrowings">
                                        Empréstimos
                                    </Navbar.Item>
                                    <Navbar.Divider/>
                                    <Navbar.Item href="/users/interests">
                                        Interesses
                                    </Navbar.Item>
                                </Navbar.Dropdown>
                            </NavbarButton>
                            <NavbarButton href="/books">
                                <GiBookshelf/>
                                <p style={MenuTextStyle}>Livros</p>
                            </NavbarButton>
                            <NavbarButton href="/categories">
                                <GiAbstract114/>
                                <p style={MenuTextStyle}>Categorias</p>
                            </NavbarButton>
                        </Navbar.Container>
                    </Navbar.Menu>
            </CustomNavbar>
            {Loaded && <UserModel id={User.id} show={Show} setShow={setShow} />}
        </Fragment>
    )
}

export default navbar;
