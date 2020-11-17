import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import "./PageHome.scss"
import { connect } from 'react-redux';
import { fetchApartments } from '../../Redux/ActionCreators';


const PageHome = () => {

    return (
        <>
            <Jumbotron>
                <h2 className="text-center">HomePage</h2>
            </Jumbotron>
        </>
    );
};

// const mapDispatchToProps = (dispatch) => ({
//     fetchApartments: () => { dispatch(fetchApartments()) }
// });

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageHome));

export default PageHome;