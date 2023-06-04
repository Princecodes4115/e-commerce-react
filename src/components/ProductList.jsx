import React, { Component } from "react";
import Product from './Product'
import { Container } from "react-bootstrap";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../Context";
export default class ProductList extends Component {
  state = {
    products: storeProducts,
  };
  render() {
    // console.log(this.state.products);
    return (
      <Container className="py-5">
        <Title name="Our" title="Products" />
        <div className="row">
          <ProductConsumer>
            {value => {
              return value.products.map(product => {
                return <Product key={product.id} product={product} />
              })
          }}
          </ProductConsumer>
        </div>
      </Container>
    );
  }
}
