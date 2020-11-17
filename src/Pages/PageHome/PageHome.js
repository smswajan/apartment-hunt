import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import "./PageHome.scss"
import { connect } from 'react-redux';
import { fetchApartments } from '../../Redux/ActionCreators';


const PageHome = () => {

    return (
        <>

        </>
    );
};

// const mapDispatchToProps = (dispatch) => ({
//     fetchApartments: () => { dispatch(fetchApartments()) }
// });

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageHome));

export default PageHome;