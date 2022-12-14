import React, {useContext, useEffect} from 'react'
import CustomerCardEditProfile from './CustomerCardEditProfile'
import EditProfileItem from "./editProfileItem";
import { UserContext } from "../../context/user";
import './edit.css'
import {Link} from "react-router-dom";

const EditProfile = () => {

    const {user} = useContext(UserContext);

    return (
        <>
            <div>
                <header>
                    <Link to="/profile"><button className="btn btn-secondary">Back to Profile</button></Link>
                </header>
                <section className="header height-auto">
                    <div className="edit-page">
                        <div className="row">
                            <div className="col-5">
                                <CustomerCardEditProfile profile={user}/>
                            </div>
                            <div className="col-7">
                                <EditProfileItem profile={user}/>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}
export default EditProfile