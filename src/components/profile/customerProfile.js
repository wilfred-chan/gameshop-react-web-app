import React from 'react';
import CustomerCard from './customerCard';

const UserProfile = () => {
  return (
    <div>
      <section>
        <div>
          <div>
            <CustomerCard />
          </div>
          <div>{/*  other list*/}</div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
