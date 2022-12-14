import React, {useContext, useEffect} from "react"
import {UserContext} from "../../context/user";
import { UIContext } from "../../context/ui";

const CustomerCart = ({}) => {
    const { cart } = useContext(UIContext);
    
    return (
        <>
            <div>
                <div className="user-detail height-auto mt-5">
                    <h3>User's Cart</h3>
                    <div>
                        {cart && cart.map((game) => (
                            <div className="p-3 mb-2 bg-light text-dark" key={game._id}>
                                <h4> {game.title}</h4>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
export default CustomerCart
