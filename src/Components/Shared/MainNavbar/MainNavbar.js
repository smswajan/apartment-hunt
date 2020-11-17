import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import firebase from "firebase";
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Hooks/useAuth';
import { BrandLogo } from '../../../images';
import "./MainNavbar.scss"

const MainNavbar = () => {
    const { currentUser } = useAuth();
    const signOut = () => {
        firebase.auth().signOut().then(res => {
            sessionStorage.removeItem("token");
            window.location = "/"
        }).catch(err => {
            alert(err);
        })
    }
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
                            <Nav.Link href="/my-bookings" className="navbar-link-item mr-3" >My Bookings</Nav.Link>
                            {/* <Nav.Link href="/services" className="navbar-link-item mr-3" >My Services</Nav.Link>
                            <Nav.Link href="/reviews" className="navbar-link-item mr-3" >Add Review</Nav.Link> */}
                            {
                                currentUser ? <Button onClick={signOut} className="btn-danger mr-3">LogOut</Button> : <Nav.Link href="/login" className="mr-3">Login</Nav.Link>
                            }
                            <Link to="/dashboard/" className="btn btn-primary px-4 mr-3">Admin</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MainNavbar;