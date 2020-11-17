import React from 'react';
import ImgT from "../PageHomeDetails/hero-bg01.png"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaBed } from "react-icons/fa"
import { FaBath } from "react-icons/fa"
import { Link } from 'react-router-dom';


const BookingCard = ({ details }) => {
    console.log(details);
    return (
        <>
            <div className="col-md-4 mb-4">
                <div className="house-card">
                    <img className="w-100 cardImg" src={details.icon} alt="" />
                    <div className="px-4 py-3 bg-white">
                        <h5 className="text-dark font-weight-bold">{details.title}</h5>
                        <p className="text-secondary mb-1 mt-3">
                            <FaMapMarkerAlt /> {" "} {details.address}
                        </p>
                        <div className="d-flex justify-content-between text-secondary">
                            <p className="text-left"><FaBed /> {details.bed} Beds </p>
                            <p className="text-right"><FaBath /> {details.bath} Baths </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <h3 className="text-primary">${details.price} </h3>
                            <div>
                                <Link to={`/apartments/${details._id}`} className="btn btn-primary btn-sm">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BookingCard;