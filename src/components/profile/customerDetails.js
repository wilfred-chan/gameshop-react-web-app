import React from "react";
import { useContext } from 'react';
import { UserContext } from '../../context/user';

const CustomerDetail = () => {
    const {user} = useContext(UserContext);
    return(
        <>
            <div className="flex">
                <div >
                    <h3>Username: {user.username}</h3>
                    <div className="">
                        <div className="">
                            <span><i className="fa fa-book"/></span>
                            <span> {user.bio}</span>
                        </div>
                        <div className="">
                            <span><i className="fa fa-location-dot"/></span>
                            <span> {user.location}</span>
                        </div>
                        <div className="">
                            <span><i className="fa-solid fa-person"/></span>
                            <span> {user.role}</span>
                        </div>
                        <div className="">
                            <span><i className="fa-solid fa-envelope"/></span>
                            <span> {user.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CustomerDetail;