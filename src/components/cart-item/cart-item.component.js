import React from "react";

import "../cart-item/cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
     
    <div className="item-details">
    <img src={imageUrl} alt="item" />
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x £{price}
      </span>
    </div>
  </div>
);

export default CartItem;
