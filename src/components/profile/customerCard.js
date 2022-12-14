import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/user';
import './index.css'
import {Link} from "react-router-dom";

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
          <h3>{user.username}</h3>
          <span className="badge badge-success">{user.role}</span>
          <p className="text-black">{user.bio}</p>
          <Link to="/edit_profile"><button className="btn btn-secondary">Edit Profile</button></Link>
        </div>
      </div>
    </>
  );
};
export default CustomerCard;
