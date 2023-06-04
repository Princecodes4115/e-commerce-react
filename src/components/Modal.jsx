import React, { Component } from "react";
import styled from "styled-components";
import { Button, Alert } from "react-bootstrap";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { id, title, price, img } = value.modalProduct;

          //   console.log(typeof modalOpen);
        //   console.log(value); 

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container" style={{fontFamily:"poppins-regular"}}>
                  <div className="row">
                    <div
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                      id="modal"
                    >
                      <Alert>added to card!</Alert>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price: ${price}</h5>
                        <Link to="">
                          <Button onClick={() => closeModal()}>
                            Store
                          </Button>
                        </Link>
                        <Link to="/cart">
                          <Button
                            onClick={() => closeModal()}
                            className="mx-2 btn btn-warning"
                          >
                            Checkout
                          </Button>
                        </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background-color: white;
  }
`;
