import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../Components/Shared/Footer/Footer';
import MainNavbar from '../../Components/Shared/MainNavbar/MainNavbar';
import BookingCard from './BookingCard';

const PageMyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState();
    useEffect(() => {
        fetch('https://apartment-hunt-online.herokuapp.com/bookings', { method: 'GET' })
            .then(response => response.json())
            .then(result => {
                setBookings(result);
                console.log(result);
                setLoading(false)
            })
    }, [])

    return (
        <>
            <MainNavbar />
            <div className="hero-apartment">
                <h2 className="text-center mb-0 text-white">My Bookings</h2>
            </div>
            <section className="bg-li py-5">
                <Container>
                    <Row>
                        {!loading && bookings.map(item => <BookingCard bookingDetails={item} />)}
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default PageMyBookings;