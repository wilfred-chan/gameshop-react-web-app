import React from 'react';
import './index.css'
import {Link} from "react-router-dom";

const OtherCustomerItemCard = ({game}) => {
    return (
        <>
            <div className="other-game-card">
                <div>
                    {/*<div>*/}
                    {/*    <img src={game.cover_image} alt="" />*/}
                    {/*</div>*/}
                    {/*<h4>{game.title}</h4>*/}
                    {/*<div>${game.price}</div>*/}

                    <Link to={`/product/${game}`}>
                        <div className="btn btn-info">
                            {game}
                        </div>
                        {/*<button className="btn btn-info">{game}</button>*/}
                    </Link>

                </div>
            </div>
        </>
    );
};
export default OtherCustomerItemCard;