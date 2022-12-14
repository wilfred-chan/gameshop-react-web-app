import React, {useContext, useEffect} from "react"
import {UserContext} from "../../context/user";

const CustomerCart = ({}) => {
    const {user} = useContext(UserContext);

    return (
        <>
            <div>
                <div className="user-detail height-auto mt-5">
                    <h3>User's Cart</h3>
                    <div>
                        {user.cart && user.cart.map((game) => (
                            <div className="p-3 mb-2 bg-light text-dark" key={game._id}>
                                <h4> {game}</h4>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
export default CustomerCart
