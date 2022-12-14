import React from "react";
import { useContext } from 'react';
import { UserContext } from '../../context/user';
import './index.css'

const CustomerDetail = () => {
    const {user} = useContext(UserContext);
    return(
        <>
            <div >
                <div className="user-detail height-auto mt-5">
                    <h3>Username: {user.username}</h3>
                    <div>
                        <div className="p-3 mb-2 bg-light text-dark">
                            <span><i className="fa fa-book"/></span>
                            <span> {user.bio}</span>
                        </div>
                        <div className="p-3 mb-2 bg-light text-dark">
                            <span><i className="fa fa-location-dot"/></span>
                            <span> {user.location}</span>
                        </div>
                        <div className="p-3 mb-2 bg-light text-dark">
                            <span><i className="fa-solid fa-person"/></span>
                            <span> {user.role}</span>
                        </div>
                        <div className="p-3 mb-2 bg-light text-dark">
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