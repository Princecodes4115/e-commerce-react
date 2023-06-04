import React, { Component } from 'react'
import { ProductConsumer } from '../Context'
import "../index.css"
import { Link } from 'react-router-dom';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, img, price, title,company, info, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              {/*title */}
              <div className="row">
                <div
                  className="col-10 mx-auto text-center text-slanted text-blue my-5"
                  style={{ fontFamily: "poppins-regular" }}
                >
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}
              {/*product info*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                {/*product text*/}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h4 className="text-uppercase text-muted mt-3 mb-2">
                    Made by: <span> {company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p
                    className="text-capitalize mt-3 mb-0 font-weight-bold"
                    style={{ fontFamily: "poppins-regular" }}
                  >
                    some info about this product
                  </p>
                  <p
                    className="text-muted lead poppins-black"
                    style={{ fontFamily: "poppins-regular" }}
                  >
                    {info}
                  </p>
                  {/* buttons */}
                  <Link to="/">
                    <button className="btn btn-primary text-capitalize">
                      back to products
                    </button>
                  </Link>
                  <Link to="">
                    <button
                      className="btn btn-warning mx-2 text-capitalize"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </button>
                  </Link>
                </div>
              </div>
              {/*end of product info */}
            </div>
          );
        }}
     </ProductConsumer>
    )
  }
}
