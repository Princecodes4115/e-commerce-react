import React from 'react'
import CartItem from './CartItem';
// import {ProductConsumer} from "../../Context"

export default function CartList({ value}) {
    const { cart } = value;
    // console.log(value, cart);

  return (
    <div className="container-fluid" style={{ fontFamily: "poppins-regular" }}>
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}
