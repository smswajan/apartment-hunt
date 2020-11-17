import React, { useEffect, useState } from 'react';
import DashboardNavbar from '../../Components/Dashboard/DashboardNavbar/DashboardNavbar';
import DashboardSidebar from '../../Components/Dashboard/DashboardSidebar/DashboardSidebar';
import { useForm } from 'react-hook-form';
import fireApp from '../../Firebase/fire-app';
import adminSidebarItems from '../../Components/Dashboard/DashboardSidebar/adminSidebarData';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import InputWrapper from '../../Components/Shared/InputWrapper';

const DashboardAddHouse = () => {
    const { register, handleSubmit } = useForm();
    // const { currentUser } = useAuth();
    const currentUser = true;
    const [isAdmin, setIsAdmin] = useState(true);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (currentUser) {
            setLoading(true);
            fetch('https://creative-agency-live-api.herokuapp.com/is-admin', {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ email: currentUser.email })
            })
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data)
                    setLoading(false)
                })
        }

    }, [])
    const serviceStorageRef = fireApp.storage().ref().child('apartments');
    const sideBarItems = adminSidebarItems;
    // sideBarItems[1].status = " active"
    const handleFormSubmit = (data, e) => {
        console.log(data);
        const iconFile = data.icon[0];
        const imgRef = serviceStorageRef.child(iconFile.name);
        imgRef.put(iconFile).then(res => {
            imgRef.getDownloadURL().then(res => {
                data.icon = res;
                fetch('http://localhost:4000/add-house', {
                    headers: { "Content-Type": "application/json" },
                    method: 'POST',
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then(result => {
                        e.target.reset()
                    })
            }).catch(err => console.log(err))

        })

    }
    return (
        <>
            <DashboardNavbar pageTitle="Add New Apartment" />
            <div className="d-flex">
                <div className="width-side">
                    <DashboardSidebar sideBarItems={sideBarItems} />
                </div>
                <div className="width-main bg-admin px-4 py-4">
                    <div className="bg-white m-4 pt-3 pl-4 circle-form-container">
                        <div className="row">
                            <div className="col-12 p-5">
                                {/* form */}
                                {/* {loading && <SectionSpinner />} */}
                                {/* {!loading && !isAdmin && <h4 className="text-danger">Sorry! You are not admin. Please login with <span className="text-success">"programming.hero.instructor@gmail.com"</span>.</h4>} */}
                                {<form className="" onSubmit={handleSubmit(handleFormSubmit)}>
                                    <div className="row mb-4">
                                        {/* title */}
                                        <InputWrapper label="Title" col={4}>
                                            <input type="text" name="title" className="form-control" ref={register({ required: true })} />
                                        </InputWrapper>
                                        <InputWrapper label="Beds" col="3">
                                            <input type="num" className="form-control" name="bed" ref={register({ required: true })} />
                                        </InputWrapper>
                                        <InputWrapper label="Baths" col="3">
                                            <input type="num" name="bath" className="form-control" ref={register({ required: true })} />
                                        </InputWrapper>
                                        <InputWrapper label="Price" col={3}>
                                            <input type="num" name="price" className="form-control" ref={register({ required: true })} />
                                        </InputWrapper>
                                        <InputWrapper label="Address" col={5}>
                                            <input type="text" className="form-control" name="address" ref={register({ required: true })} />
                                        </InputWrapper>
                                        <div className="col-md-6">
                                            <span className="font-weight-bold mb-3 d-inline-block">Price Details: </span>
                                            <textarea rows="5" type="text" name="priceDetails" className="form-control" ref={register({ required: true })}  >
                                            </textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <span className="font-weight-bold mb-3 d-inline-block">Short Description: </span>
                                            <textarea rows="5" type="text" name="shortDescription" className="form-control" ref={register({ required: true })}  >
                                            </textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <span className="font-weight-bold mt-4 mb-3 d-inline-block">Property Details: </span>
                                            <textarea rows="5" type="text" name="propertyDetails" className="form-control" ref={register({ required: true })}  >
                                            </textarea>
                                        </div>


                                        <div className="col-6">
                                            {/* icon */}
                                            <label className="mb-3 mt-4 font-weight-bold d-block">Upload Image</label>
                                            <div className="upload-btn-wrapper">
                                                <div className="up-btn btn-outline-success py-2 px-5 btn">
                                                    <IconContext.Provider value={{ size: "1.5rem" }}>
                                                        <AiOutlineCloudUpload />
                                                    </IconContext.Provider> upload
                                                    <input type="file" name="icon" ref={register({ required: true })} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary px-5 py-3">Add New Apartment</button>
                                </form>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardAddHouse;