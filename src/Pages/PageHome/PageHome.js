import React, { useEffect, useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import "./PageHome.scss"
import { connect } from 'react-redux';
import { fetchApartments } from '../../Redux/ActionCreators';
import ApartmentCard from './ApartmentCard';


const PageHome = () => {
    const [apartments, setApartments] = useState([]);
    const [loading, setLoading] = useState();
    useEffect(() => {
        fetch('https://apartment-hunt-online.herokuapp.com/apartments', { method: 'GET' })
            .then(response => response.json())
            .then(result => {
                setApartments(result);
                setLoading(false)
            })
    }, [])

    return (
        <>
            <div className="hero-apartment">
                <h2 className="text-center text-white font-weight-bold mb-0">Welcome To Apartment Hunt</h2>
            </div>
            <div className="bg-li py-4">
                <div className="text-center font-weight-bold text-primary">
                    <p>House Rent</p>
                    <h2 className="font-weight-bold">Discover the latest rent <br /> available today</h2>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        {!loading && apartments.map(item => <ApartmentCard details={item} />)}

                    </div>
                </div>
            </div>

        </>
    );
};

// const mapDispatchToProps = (dispatch) => ({
//     fetchApartments: () => { dispatch(fetchApartments()) }
// });

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageHome));

export default PageHome;


