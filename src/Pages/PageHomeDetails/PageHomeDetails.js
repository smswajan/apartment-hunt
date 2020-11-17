import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ImgAp from "./hero-bg01.png"
import "./PageHomeDetails.scss"
const PageHomeDetails = () => {
    const { id } = useParams();
    const [houseDetails, setHouseDetails] = useState({});
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:4000/apartments', { method: 'GET' })
            .then(response => response.json())
            .then(result => {
                const apartment = result.find(item => item._id === id);
                setHouseDetails(apartment);
                setLoading(false)
            })
    }, [])
    return (
        <>
            <div className="hero-apartment">
                <h2 className="text-center mb-0 text-white">Apartment</h2>
            </div>
            <Container className="mt-4">
                <Row>
                    {!loading && <Col md="8">
                        <img src={houseDetails.icon} alt="" className="img-fluid mb-3" />
                        <div className="d-flex justify-content-between">
                            <h3 className="text-primary font-weight-bold">{houseDetails.title} </h3>
                            <h3 className="text-primary">${houseDetails.price} </h3>
                        </div>
                        <p>{houseDetails.shortDescription} </p>
                        <h4 className="text-primary mt-4">Price Details: </h4>
                        <p>{houseDetails.priceDetails} </p>
                        <h4 className="text-primary mt-4">Property Details: </h4>
                        <p>{houseDetails.propertyDetails} </p>
                    </Col>}
                    <Col md="4" className="">
                        <form className="py-5 bg-li p-4">
                            <input type="text" className="form-control mb-3" placeholder="Full Name" />
                            <input type="tel" className="form-control mb-3" placeholder="Phone No" />
                            <input type="email" className="form-control mb-3" placeholder="Email Address" />
                            <textarea name="" className="form-control mb-3" cols="30" rows="5" placeholder="Message"></textarea>
                            <button className="btn btn-primary btn-block">Request Booking</button>
                        </form>

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PageHomeDetails;