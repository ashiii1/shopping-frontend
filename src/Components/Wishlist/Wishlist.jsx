import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import './Wishlist.css';

const Wishlist = () => {
    const { wishlistItems, all_product, removeFromWishlist } = useContext(ShopContext);

    return (
        <div className="wishlist">
            <h1>Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty</p>
            ) : (
                <div className="wishlist-items">
                    {wishlistItems.map((itemId) => {
                        const product = all_product.find((product) => product.id === itemId);
                        return (
                            <div key={product.id} className="wishlist-item">
                                <img src={product.image} alt={product.name} />
                                <div className="wishlist-item-details">
                                    <Link to={`/product/${product.id}`}><h2>{product.name}</h2></Link>
                                    <p>${product.new_price}</p>
                                    <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
