import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';


const MainNavbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="" className="py-3" >
                <Container className="d-flex align-items-center">
                    <Navbar.Brand className="mr-auto" href="/">
                        Apartment Hunt
                        {/* <img src={LogoBrand} alt="" className="logo-brand" /> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="agency-navbar" />
                    <Navbar.Collapse id="agency-navbar">
                        <Nav className="ml-auto text-center">
                            <Nav.Link href="/" className="navbar-link-item mr-3" >Home</Nav.Link>
                            <Nav.Link href="/orders" className="navbar-link-item mr-3" >Order New</Nav.Link>
                            <Nav.Link href="/services" className="navbar-link-item mr-3" >My Services</Nav.Link>
                            <Nav.Link href="/reviews" className="navbar-link-item mr-3" >Add Review</Nav.Link>
                            <Button href="/admin/service-list" className="px-4 mr-3">Admin</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MainNavbar;