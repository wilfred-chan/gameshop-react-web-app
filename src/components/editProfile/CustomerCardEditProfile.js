import React from 'react'
import { Link } from 'react-router-dom'
import './edit.css'

const CustomerCardEditProfile = ({ profile }) => {

    return (
        <>
            <div className="user-card user-card-flex">
                <div className="m-5">
                    <div>
                        <img src={profile.image_url} alt=""/>
                    </div>
                    <h3>
                        <span>{profile.firstname}</span>
                        <span>{profile.lastname}</span>
                    </h3>
                    <p className="text-grey">{profile.bio}</p>

                    <Link
                        className="btn btn-secondary"
                        to="/profile">
                        Back
                    </Link>
                </div>
            </div>
        </>
    )
}
export default CustomerCardEditProfile