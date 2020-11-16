import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../../../images';
import "./MainNavbar.scss"

const MainNavbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="" className="" >
                <Container className="d-flex align-items-center">
                    <Navbar.Brand className="mr-auto" href="/">
                        <img src={BrandLogo} alt="" className="brand-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="agency-navbar" />
                    <Navbar.Collapse id="agency-navbar">
                        <Nav className="ml-auto text-center">
                            <Nav.Link href="/" className="navbar-link-item mr-3" >Home</Nav.Link>
                            <Nav.Link href="/home-details" className="navbar-link-item mr-3" >Single Home Details</Nav.Link>
                            {/* <Nav.Link href="/services" className="navbar-link-item mr-3" >My Services</Nav.Link>
                            <Nav.Link href="/reviews" className="navbar-link-item mr-3" >Add Review</Nav.Link> */}
                            <Link to="/dashboard/" className="btn btn-primary px-4 mr-3">Admin</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MainNavbar;