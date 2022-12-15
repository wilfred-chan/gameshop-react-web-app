import React from 'react';
import './index.css'
import {Link} from "react-router-dom";

const OtherCustomerItemCard = ({game}) => {
    return (
        <>
            <div className="other-game-card center">
                <div>
                    {/*<div>*/}
                    {/*    <img src={game.cover_image} alt="" />*/}
                    {/*</div>*/}
                    {/*<h4>{game.title}</h4>*/}
                    {/*<div>${game.price}</div>*/}

                    <Link to={`/product/${game}`}>
                        <button><h3>{game}</h3></button>
                    </Link>

                </div>
            </div>
        </>
    );
};
export default OtherCustomerItemCard;