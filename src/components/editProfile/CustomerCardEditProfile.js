import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import './edit.css'

const CustomerCardEditProfile = ({ profile }) => {


    return (
        <>
            <div className="user-card user-card-flex">
                <div className="m-5">

                    <div className="avatar-position">
                        <img src={profile.image_url} alt=""/>
                    </div>
                    <h3 className="user-card-name text-white"><span>{profile.firstname}</span> <span>{profile.lastname}</span>
                    </h3>
                    <p className="text-white">{profile.bio}</p>

                    <Link
                        className="btn btn-outline-white"
                        to="/profile">
                        Back
                    </Link>
                </div>
            </div>
        </>
    )
}
export default CustomerCardEditProfile