import React from 'react';
import CustomerCard from './customerCard';
import CustomerDetails from "./customerDetails";
import ProfileCart from "../cart/ProfileCart"

const CustomerProfile = () => {

  return (
    <div>
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
