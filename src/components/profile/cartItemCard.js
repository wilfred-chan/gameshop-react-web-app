import React from 'react';
import './index.css'

const CartItemCard = ({
                          game = {
                              game_id: 'the-witcher-3-wild-hunt',
                              title: 'The Witcher 3: Wild Hunt',
                              price: '39.99',
                              image_url: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
                          },
                      }) => {
    return (
        <>
            <div className="cart-card">
                <div>
                    <div>
                        <img src={game.image_url} alt="" />
                    </div>
                    <h4>{game.title}</h4>
                    <div>${game.price}</div>
                    <button className="btn btn-info">Details</button>
                </div>
            </div>
        </>
    );
};
export default CartItemCard;