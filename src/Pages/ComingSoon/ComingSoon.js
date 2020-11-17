import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ComingSoon.scss"
import { BsArrowLeft } from "react-icons/bs"

const ComingSoon = () => {
    return (
        <>
            <section className="coming-soon d-flex align-items-center justify-content-center bg-li">
                <div className="text-center">
                    <h2 className="display-2">Coming Soon...</h2>
                    <Link className='btn btn-lg btn-primary mt-3' to="/"><BsArrowLeft /> Go Back</Link>
                </div>
            </section>
        </>
    );
};

export default ComingSoon;