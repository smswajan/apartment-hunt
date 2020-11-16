import React from 'react';
import { BiShoppingBag } from 'react-icons/bi'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';

const serviceList = <BiShoppingBag className="sidebar-icon" />
const addService = <MdAdd className="sidebar-icon" />
const addAdmin = <AiOutlineUserAdd className="sidebar-icon" />


const adminSidebarItems = [
    {
        id: 1,
        icon: serviceList,
        text: "Booking list",
        url: "/dashboard/booking-list",
    },
    {
        id: 2,
        icon: addService,
        text: "Add House",
        url: "/dashboard/add-apartment",

    },
    {
        id: 3,
        icon: addAdmin,
        text: "My Rent",
        url: "/dashboard/my-rent"
    },
]
export default adminSidebarItems;