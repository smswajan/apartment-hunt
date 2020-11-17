import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import BookingCard from './BookingCard';

const PageMyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState();
    useEffect(() => {
        fetch('http://localhost:4000/bookings', { method: 'GET' })
            .then(response => response.json())
            .then(result => {
                setBookings(result);
                console.log(result);
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <div className="hero-apartment">
                <h2 className="text-center mb-0 text-white">My Bookings</h2>
            </div>
            <section className="bg-li py-5">
                <Container>
                    <Row>
                        {!loading && bookings.map(item => <BookingCard details={item} />)}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default PageMyBookings;