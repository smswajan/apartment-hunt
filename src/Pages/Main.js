import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import MainNavbar from '../Components/Shared/MainNavbar/MainNavbar';
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
                        <Route exact path="/apartments/:id">
                            <MainNavbar />
                            <PageHomeDetails />
                            <Footer />
                        </Route>
                        <Route exact path="/my-bookings">
                            <MainNavbar />
                            <PageMyBookings />
                            <Footer />
                        </Route>
                        {/* Dashboard */}
                        <Route exact path="/dashboard">
                            <DashboardBookingList />
                        </Route>
                        <Route exact path="/dashboard/booking-list">
                            <DashboardBookingList />
                        </Route>
                        <Route exact path="/dashboard/add-apartment">
                            <DashboardAddHouse />
                        </Route>
                        <Route exact path="/login">
                            <LoginPage />
                        </Route>
                    </Switch>
                </main>
            </Router>

        </>
    );
};

export default Main;