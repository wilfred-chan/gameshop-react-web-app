import React, {useContext, useEffect} from "react"
import {UserContext} from "../../context/user";
import { UIContext } from "../../context/ui";
import CartItemCard from "./cartItemCard";

const CustomerCart = ({}) => {
    const { cart } = useContext(UIContext);
    
    return (
        <>
            <div>
                <div className="user-detail height-auto mt-5">
                    <h3>User's Cart</h3>
                    <div className="row">
                        {cart && cart.map((game) => (
                            <div className="col-sm-3 p-3 w-25 mb-2 bg-light text-dark" key={game._id}>
                                <CartItemCard game={game}/>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
export default CustomerCart
