import React, {useEffect} from 'react';
import CustomerCard from './customerCard';
import CustomerDetails from "./customerDetails";
import { Link } from 'react-router-dom';
import CustomerCart from "../cart/customerCart";
import OtherCustomerFavoritesList from "./otherCustomerFavoritesList";

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
                    </div>
                    <div>
                        <CustomerCart />
                    </div>
                    <div>
                        <OtherCustomerFavoritesList />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomerProfile;

