import React from 'react';
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import ImgAp from "./hero-bg01.png"
import "./PageHomeDetails.scss"
const PageHomeDetails = () => {
    return (
        <>
            <div className="hero-apartment">
                <h2 className="text-center mb-0 text-white">Home Details Page</h2>
            </div>
            <Container className="mt-3">
                <Row>
                    <Col md="8">
                        <img src={ImgAp} alt="" className="img-fluid mb-3" />
                        <div className="d-flex justify-content-between">
                            <h3 className="text-primary font-weight-bold">Family Apartment Three</h3>
                            <h3 className="text-primary">565</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis itaque quis sint tempora animi, inventore dolore nesciunt natus dolorem, at porro hic labore sequi eum maxime similique optio consequatur illo.</p>
                        <h4 className="text-primary mt-4">Price Details - </h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quidem corporis deleniti maxime voluptatem, autem incidunt. In eligendi molestias, eos culpa quo perspiciatis reiciendis quaerat totam voluptatum dolore nesciunt sed!</p>
                        <h4 className="text-primary mt-4">Property Details - </h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae modi, fugit aliquid, inventore provident, voluptatem ex perspiciatis error sequi nobis earum fuga sed accusantium eos fugiat qui tempore laboriosam neque.
</p>
                    </Col>
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