import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import "./PageHome.scss"

const PageHome = () => {
    return (
        <>
            <Jumbotron>
                <h2 className="text-center">HomePage</h2>
                <h5 className="text-center">Test</h5>
                <h5 className="text-center">Test 2</h5>
            </Jumbotron>
        </>
    );
};

export default PageHome;