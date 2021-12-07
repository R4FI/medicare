import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
//
import menuLogo from '../../../images/logo.jpg'
//
import './Header.css';


const Header = () => {
    const { user, logout } = useAuth();
    const {admin} = useAuth()
    return (
        <>
            {/* bg="dark" variant="dark" */}
            <Navbar className="navigation" collapseOnSelect expand="lg" fixed = "top">
                <Container>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="menu-logo me-2">
                            <img src={menuLogo} className="" alt="" />
                        </div>
                        <Navbar.Brand href="#home" className="title text-white"><span className="title-color">Medi</span>Care</Navbar.Brand>
                    </div>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link
                            as={Link}
                            to="/home"
                            className="item"
                        >Home</Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/services"
                            className="item"
                        >Services</Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/appointment"
                            className="item"
                        >Appointment</Nav.Link>
                       { admin &&
                       <Nav.Link
                            as={Link}
                            to="/dashboard"
                            className="item"
                        >Dashboard</Nav.Link>
                    }

                       
                        <Nav.Link
                            as={Link}
                            to="/register"
                            className="item"
                        >Register</Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/about"
                            className="item"
                        >About</Nav.Link>

                            {user?.email ?

                            <button
                                onClick={logout}
                                className="btn btn-secondary me-2">LogOut</button>

                            : <Nav.Link
                                as={Link}
                                to="/login"
                                className="item"
                            >Login</Nav.Link>
                            }

                        <Navbar.Text>
                            {user?.email &&
                                <span className="user">Signed in as <a href="#login">{user?.displayName}</a></span>
                            }
                            <img src={user?.photoURL} className="profile" alt="" />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;

