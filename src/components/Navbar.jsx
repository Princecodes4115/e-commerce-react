import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.svg"
import { Button } from 'react-bootstrap';
import styled from "styled-components"

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5 sticky-top " style={{fontFamily:"poppins-medium", color:"white"}}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">Products</Link>
          </li>
        </ul>
        <Link to="/cart" className="ms-auto ">
          <Button>
            <li className="fas fa-cart-plus" />
            cart
          </Button>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: var(--color-primary);
`
