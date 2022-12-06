import React from "react";

const CustomerDetail = ({
                            profile = {
                            _id: '',
                            username: 'Game Seeker',
                            firstname: 'Ali',
                            lastname: 'Bob',
                            email: 'gameseeker@134.com',
                            role: 'customer',
                            bio: 'P5 is No.1!',
                            location: 'San Jose',
                            image_url: '/images/avatar/avatar.jpeg',
                        }
                    }) => {
    return(
        <>
            <div className="flex">
                <div >
                    <h3>Username: {profile.username}</h3>
                    <div className="">
                        <div className="">
                            <span><i className="fa fa-book"/></span>
                            <span> {profile.bio}</span>
                        </div>
                        <div className="">
                            <span><i className="fa fa-location-dot"/></span>
                            <span> {profile.location}</span>
                        </div>
                        <div className="">
                            <span><i className="fa-solid fa-person"/></span>
                            <span> {profile.role}</span>
                        </div>
                        <div className="">
                            <span><i className="fa-solid fa-envelope"/></span>
                            <span> {profile.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CustomerDetail;