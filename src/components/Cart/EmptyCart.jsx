import React from 'react'
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <div className="Container mt-5" style={{ fontFamily: "poppins-medium" }}>
      <div className="row">
        <div className="col-10 mx-auto text-center px-20">
          <h1>your cart is currently empty 🛒</h1>
          <Link to="">
            <button className="btn btn-primary btn-lg">Go To Store</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
