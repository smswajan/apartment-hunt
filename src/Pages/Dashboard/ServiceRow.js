import React, { useState } from 'react';
import { baseURL } from '../../shared/baseURL';

const ServiceRow = ({ bookingDetails }) => {
    const { _id, description, phone, email, fullName, status, apartment } = bookingDetails;
    const [orderStatus, setOrderStatus] = useState(status)
    const textClass = orderStatus === "Pending" ? "danger" : orderStatus === "OnGoing" ? "warning" : "success"
    const updateOrder = (e) => {
        const currentStatus = e.target.value
        setOrderStatus(currentStatus);
        fetch(`${baseURL}/update-booking/` + _id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ currentStatus })
        }).then(res => res.json())
            .then(result => {
                console.log("Done");
            })
    }
    return (
        <>
            <div className="row py-2 px-3 mb-3" style={{ borderRadius: "10px" }}>
                <div className="col-2"><span className="">{fullName}</span> </div>
                <div className="col-3"><span className="">{email} </span> </div>
                <div className="col-2"><span className="">{apartment.title} </span> </div>
                <div className="col-3"><span className="">{description} </span> </div>
                <div className="col-2">
                    <select name="status" className={"custom-select text-" + textClass} onChange={(e) => updateOrder(e)} >
                        <option value={status} className={"text-" + textClass} >{status}</option>
                        <option value="Pending" className="text-danger">Pending</option>
                        <option value="OnGoing" className="text-warning">OnGoing</option>
                        <option value="Done" className="text-success">Done</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default ServiceRow;