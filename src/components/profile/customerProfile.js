import React from 'react';
import CustomerCard from './customerCard';
import CustomerDetails from "./customerDetails";
import ProfileCart from "../cart/ProfileCart"
import { Link } from 'react-router-dom';

const CustomerProfile = () => {
  return (
    <div>
      <header>
        <Link to="/"><button className="btn btn-secondary">Back to Home</button></Link>
      </header>
      <section>
        <div>
          <div>
            <CustomerCard />
          </div>
          <div>
            <CustomerDetails />
            {/*<ProfileCart />*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerProfile;
