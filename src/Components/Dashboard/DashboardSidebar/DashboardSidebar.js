import React from 'react';
import { Link } from 'react-router-dom';
import adminSidebarItems from './adminSidebarData';
import "./DashboardSidebar.scss"

const DashboardSidebar = ({ sideBarItems }) => {
    return (
        <div className="width-100 px-5 pt-5 bg-white" >
            {
                sideBarItems.map(item => (
                    <Link to={item.url} className={"d-block sidebar-item py-2 " + item.status} >
                        {item.icon} <p className="ml-1 d-inline-block font-weight-bold">{item.text} </p>
                    </Link>
                ))
            }
        </div>
    );
};

export default DashboardSidebar;