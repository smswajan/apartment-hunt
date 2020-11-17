import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ImgAp from "./hero-bg01.png"
import "./PageHomeDetails.scss"
import { useForm } from 'react-hook-form';
import { baseURL } from '../../shared/baseURL';

const PageHomeDetails = () => {
    const { id } = useParams();
    const [houseDetails, setHouseDetails] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:4000/apartments', { method: 'GET' })
            .then(response => response.json())
            .then(result => {
                const apartment = result.find(item => item._id === id);
                setHouseDetails(apartment);
                setLoading(false)
            })
    }, [])
    const { register, handleSubmit } = useForm();
    const handleFormSubmit = (data, e) => {
        console.log(data);
        data.status = "Pending";
        if (houseDetails) {
            data.apartment = houseDetails;
            console.log(data);
        }
        fetch(`${baseURL}/add-booking`, {
            headers: { "Content-Type": "application/json" },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                e.target.reset()
            })
            .catch(err => console.log(err))
    }
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
                        <form onSubmit={handleSubmit(handleFormSubmit)} className="py-5 bg-li p-4">
                            <input name="fullName" type="text" className="form-control mb-3" placeholder="Full Name" ref={register({ required: true })} />
                            <input name="phone" type="tel" className="form-control mb-3" placeholder="Phone No" ref={register({ required: true })} />
                            <input name="email" type="email" className="form-control mb-3" placeholder="Email Address" ref={register({ required: true })} />
                            <textarea name="description" className="form-control mb-3" cols="30" rows="5" placeholder="Description" ref={register({ required: true })} ></textarea>
                            <button type="submit" className="btn btn-primary btn-block">Request Booking</button>
                        </form>

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PageHomeDetails;