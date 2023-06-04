import React, { Suspense, Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import { Route, Routes, } from 'react-router-dom';


const Navbar = React.lazy(() => import("./components/Navbar"));
const ProductList = React.lazy(() => import("./components/ProductList"));
const Details = React.lazy(() => import("./components/Details"));
const Cart = React.lazy(() => import("./components/Cart/Cart"));
const ErrorPage = React.lazy(() => import("./components/ErroPage"));
const Modal = React.lazy(() => import("./components/Modal"));

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Suspense
          fallback={
            <center style={{ marginTop: "30%" }}>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </center>
          }
        >
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route path="/details" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Modal/>
        </Suspense>
      </React.Fragment>
    );
  }
}

