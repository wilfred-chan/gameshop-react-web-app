import React from 'react';

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
            <div>
                <div>
                    <h4>{game.title}</h4>
                    <div>
                        <img src={game.image_url} alt="" />
                    </div>
                    <span>{game.price}</span>
                    <button>Details</button>
                </div>
            </div>
        </>
    );
};
export default CartItemCard;