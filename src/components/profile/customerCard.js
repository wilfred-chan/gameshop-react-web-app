import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/user';
import './index.css'

const CustomerCard = ({

}) => {
  const {user} = useContext(UserContext);
  return (
    <>
      <div className="customer-card-flex">
        <div className="m-5">
          <div>
            <img src={user.image_url} alt="" />
          </div>
          <h3 >{user.username}</h3>
          <span className="badge rounded-pill bg-primary disabled">{user.role}</span>
          <p >{user.bio}</p>
          <button >Edit Profile</button>
        </div>
      </div>
    </>
  );
};
export default CustomerCard;
