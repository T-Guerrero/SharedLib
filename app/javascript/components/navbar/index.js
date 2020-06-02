import React from 'react';
import { Navbar, Columns, Container, Notification, Heading, Button } from 'react-bulma-components';
import '../../app.scss';
//import '../../debug.scss';
import styled from 'styled-components';
import logoImage from '../../../assets/images/Logo.png';

const paddingStyle = {
        paddingTop: "40px",
        paddingBottom: "40px"
};

const NavBar = () => {
    return (
        <div>
            <div>
                <Navbar className="header">
                    <Navbar.Brand>
                        <Navbar.Item renderAs="a" href="#">
                            <img src={logoImage} alt="blablalba" desktop={{size: 'half'}} mobile={{size: 'two-thirds'}}/>
                        </Navbar.Item>
                        <Navbar.Burger />
                    </Navbar.Brand>
                    <Navbar.Item href="/">
                        Home
                    </Navbar.Item>
                    <Navbar.Item href="/books">
                        Livros
                    </Navbar.Item>
                </Navbar>
            </div>
            <div>
                <h1>Meus Livros</h1>
                <Columns>
                    <Columns.Column>
                        <p>Algorithms: Sedgewick, Robert - Wayne, Kevin </p>
                        <img src=""/>
                        <Button>Disponível</Button>
                    </Columns.Column>
                    <Columns.Column>
                        Livro 2
                    </Columns.Column>
                    <Columns.Column>
                        Livro 3
                    </Columns.Column>
                </Columns>
            </div>
        </div>
    );
};

export default NavBar;
