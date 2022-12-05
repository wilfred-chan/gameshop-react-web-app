import React from 'react';
import './index.css'

const CustomerCard = ({
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
  },
}) => {
  return (
    <>
      <div className="customer-card-flex">
        <div>
          <div>
            <img src={profile.image_url} alt="" />
          </div>
          <h3>{profile.username}</h3>
          <span>{profile.role}</span>
          <p>{profile.bio}</p>
          <button>Edit Profile</button>
        </div>
      </div>
    </>
  );
};
export default CustomerCard;
