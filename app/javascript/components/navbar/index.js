import React, { Fragment } from 'react';
import { Navbar } from 'react-bulma-components';
import logoImage from '../../../assets/images/Logo.png';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { GiOpenBook, GiBookshelf } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'

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

const navbar = () => {
    return (
        <Fragment>
            <CustomNavbar>
                <Navbar.Brand style={BrandStyle}>
                    <Navbar.Item renderAs="a" href="/home">
                        <img src={logoImage} style={logoStyle} desktop={{size: 'half'}} mobile={{size: 'two-thirds'}}/>
                    </Navbar.Item>
                    <NavbarButton dropdown hoverable className="navbar-end" style={UserIconStyle}>
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
                </Navbar.Brand>
                <Navbar.Burger onClick={() => document.querySelectorAll('#mainNavbar').forEach(item => item.classList.toggle('is-active'))}/>
                    <Navbar.Menu id="mainNavbar">
                        <Navbar.Container style={navbarMenuStyle}>
                            <NavbarButton href="/home">
                                <AiFillHome/>
                                Home
                            </NavbarButton>
                            <NavbarButton dropdown hoverable href="#">
                                <NavbarLink>
                                    <GiOpenBook/>
                                    Meus Livros
                                </NavbarLink>
                                <Navbar.Dropdown>
                                    <Navbar.Item href="/my_books">
                                        Meus Livros
                                    </Navbar.Item>
                                    <Navbar.Divider/>
                                    <Navbar.Item href="#">
                                        Empréstimos
                                    </Navbar.Item>
                                    <Navbar.Divider/>
                                    <Navbar.Item href="#">
                                        Interesses
                                    </Navbar.Item>
                                </Navbar.Dropdown>
                            </NavbarButton>
                            <NavbarButton href="/books">
                                <GiBookshelf/>
                                Livros
                            </NavbarButton>
                        </Navbar.Container>
                    </Navbar.Menu>
            </CustomNavbar>
        </Fragment>
    )
}

export default navbar;
