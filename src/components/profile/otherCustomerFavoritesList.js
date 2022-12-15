import React, {useContext, useEffect, useState} from "react"
import axios from "axios";
import OtherCustomerCard from "./otherCustomerCard";
import OtherCustomerItemCard from "./otherCustomerItemCard";

const OtherCustomerFavoritesList = () => {
    const [userDetails, setUserDetails] = useState([]);
    useEffect(
        ()=>{
            const getUsersDetails = async () => {
                const response = await axios.get("https://gameshop.herokuapp.com/api/users");
                setUserDetails(response.data);
            };

            try {
                getUsersDetails();
            } catch (error) {
                console.log(error);
            }},[]);
    return (

        <>
            <div>
                <div className="user-detail height-auto mt-5">
                    <h3>Other Customer's Favorites List</h3>
                    <div className="row">
                        {userDetails && userDetails.map((user) => (
                            // <p>{user.username}</p>
                            <div className="row p-3 w-25 mb-2 bg-light text-dark" key={user.username}>
                                <OtherCustomerCard className="col-4" user={user}/>
                                <div className="col-8">
                                    {user.favorites.map(game => <OtherCustomerItemCard game={game} />)}
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default OtherCustomerFavoritesList