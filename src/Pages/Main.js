import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavbar from '../Components/Shared/MainNavbar/MainNavbar';
import DashboardAddHouse from './Dashboard/DashboardAddHouse';
import DashboardBookingList from './Dashboard/DashboardBookingList';
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
                        </Route>
                        <Route exact path="/apartments/:id">
                            <MainNavbar />
                            <PageHomeDetails />
                        </Route>
                        <Route exact path="/my-bookings">
                            <MainNavbar />
                            <PageMyBookings />
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
                    </Switch>
                </main>
            </Router>

        </>
    );
};

export default Main;