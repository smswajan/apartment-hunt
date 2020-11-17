import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./Footer.scss"
import { FaMapMarkerAlt } from "react-icons/fa"
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai"
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer className="bg-primary py-5 text-white" >
                <Container>
                    <Row>
                        <div className="col-md-5 d-flex">
                            <div className="d-block text-white"><FaMapMarkerAlt /></div>
                            <div>
                                <p className="text-white pl-3">
                                    H#340 (4th Floor), Road #24, <br />
                                    New DOHS, Mohakhali, Dhaka, Bangladesh <br />
                                    Phone: 018XXXXXXXX <br />
                                    E-mail: info@company.com <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h6>Company</h6>
                            <Link to="/about" className="text-white d-block">About</Link>
                            <Link to="/about" className="text-white d-block">Sitemap</Link>
                            <Link to="/about" className="text-white d-block">Support Center</Link>
                            <Link to="/about" className="text-white d-block">Terms and conditions</Link>
                            <Link to="/about" className="text-white d-block">Submit Listing</Link>
                        </div>
                        <div className="col-md-2">
                            <h6>Quick Links</h6>
                            <Link to="/Rentals" className="text-white d-block">Rentals</Link>
                            <Link to="/Sales" className="text-white d-block">Sales</Link>
                            <Link to="/Contact" className="text-white d-block">Contact</Link>
                            <Link to="/blog" className="text-white d-block">Our Blog</Link>
                        </div>
                        <div className="col-md-3">
                            <h6>About Us</h6>
                            <p>We are the top real estate
                            agency in Sydney, with agents
                            available to answer any question 24/7.</p>
                            <div className="d-flex">
                                <div className="social-icon"><AiFillFacebook /> </div>
                                <div className="social-icon"><AiFillLinkedin /> </div>
                                <div className="social-icon"><AiFillInstagram /> </div>
                                <div className="social-icon"><AiFillYoutube /> </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;