import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../Hooks/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <Navbar collapseOnSelect expand="lg" className="header-style">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src="https://i.ibb.co/Cscq990/logo.png" className='img-fluid' style={{ width: "250px" }} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <CustomLink className='nav-link-Style px-3 py-2 text-decoration-none rounded' as={Link} to="/home">Home</CustomLink>
                        <CustomLink className='nav-link-Style px-3 py-2 text-decoration-none rounded' as={Link} to="/about">About</CustomLink>
                        <CustomLink className='nav-link-Style px-3 py-2 text-decoration-none rounded' as={Link} to="/blogs">Blogs</CustomLink>
                        {
                            user && <>
                                <CustomLink className='nav-link-Style px-3 py-2 text-decoration-none rounded' as={Link} to="/manageInventory">Manage Items</CustomLink>
                                <CustomLink className='nav-link-Style px-3 py-2 text-decoration-none rounded' as={Link} to="/addItems">Add Items</CustomLink>
                                <CustomLink className='nav-link-Style px-3 py-2 text-decoration-none rounded' as={Link} to="/myItems">My Items</CustomLink>
                            </>
                        }
                    </Nav>
                    <Nav>

                        {
                            user
                                ?
                                <Nav.Link className='main-button' onClick={() => signOut(auth)}>SIGN OUT</Nav.Link>
                                :
                                <Nav.Link className='main-button' as={Link} to="/signIn">SIGN IN</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;