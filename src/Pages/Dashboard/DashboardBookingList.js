import React, { useState } from 'react';
import DashboardNavbar from '../../Components/Dashboard/DashboardNavbar/DashboardNavbar';
import adminSidebarItems from '../../Components/Dashboard/DashboardSidebar/adminSidebarData';
import DashboardSidebar from '../../Components/Dashboard/DashboardSidebar/DashboardSidebar';
import SectionSpinner from '../../Components/SectionSpinner/SectionSpinner';
import { useAuth } from '../../Hooks/useAuth';

const DashboardBookingList = () => {
    const [bookings, setBookings] = useState([]);
    // const { currentUser } = useAuth();
    const [isAdmin, setIsAdmin] = useState(true);
    const [loading, setLoading] = useState(false);
    const sideBarItems = adminSidebarItems;
    sideBarItems[0].status = " active";

    return (
        <>
            <DashboardNavbar pageTitle="Booking List" />
            <div className="d-flex">
                <div className="width-side">
                    <DashboardSidebar sideBarItems={sideBarItems} />
                </div>
                <div className="width-main bg-admin px-4 py-4">
                    <div className="bg-white m-4 pt-3 pl-4 circle-form-container">
                        <div className="row">
                            <div className="col-12 p-5">
                                {loading && <SectionSpinner />}
                                {!loading && !isAdmin && <h4 className="text-danger">Sorry! You are not admin. Please login with <span className="text-success">"programming.hero.instructor@gmail.com"</span>.</h4>}
                                {isAdmin && <div className="row bg-admin py-3 px-3 mb-3" style={{ borderRadius: "10px" }}>
                                    <div className="col-2"><span className="text-secondary">Name</span> </div>
                                    <div className="col-3"><span className="text-secondary">Email ID</span> </div>
                                    <div className="col-2"><span className="text-secondary">Service</span> </div>
                                    <div className="col-3"><span className="text-secondary">Product Details</span> </div>
                                    <div className="col-2"><span className="text-secondary">Status</span> </div>
                                </div>}
                                {/* {orders && orders.map(item => <AdminServiceListItem orderDetails={item} key={item._id} />)} */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DashboardBookingList;