import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import MainNavbar from '../Components/Shared/MainNavbar/MainNavbar';
import { PrivateRoute } from '../Hooks/useAuth';
import ComingSoon from './ComingSoon/ComingSoon';
import DashboardAddHouse from './Dashboard/DashboardAddHouse';
import DashboardBookingList from './Dashboard/DashboardBookingList';
import LoginPage from './LoginPage';
import PageHome from './PageHome/PageHome';
import PageHomeDetails from './PageHomeDetails/PageHomeDetails';
import PageMyBookings from './PageMyBookings/PageMyBookings';

const Main = () => {
    return (
        <>
            <Router>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <MainNavbar />
                            <PageHome />
                            <Footer />
                        </Route>
                        <PrivateRoute exact path="/apartments/:id">
                            <MainNavbar />
                            <PageHomeDetails />
                            <Footer />
                        </PrivateRoute>
                        <PrivateRoute exact path="/my-bookings">
                            <PageMyBookings />
                        </PrivateRoute>
                        {/* Dashboard */}
                        <PrivateRoute exact path="/dashboard">
                            <DashboardBookingList />
                        </PrivateRoute>
                        <PrivateRoute exact path="/dashboard/booking-list">
                            <DashboardBookingList />
                        </PrivateRoute>
                        <PrivateRoute exact path="/dashboard/add-apartment">
                            <DashboardAddHouse />
                        </PrivateRoute>
                        <Route exact path="/login">
                            <LoginPage />
                        </Route>
                        <Route path="*">
                            <MainNavbar />
                            <ComingSoon />
                            <Footer />
                        </Route>
                    </Switch>
                </main>
            </Router>

        </>
    );
};

export default Main;