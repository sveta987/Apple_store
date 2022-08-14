import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom';
import Login from '../buttons/Login';
import Signup from '../buttons/Signup';
import CartBtn from '../buttons/CartBtn';

import { Container, Nav, Navbar, Button } from 'react-bootstrap';

import './header.css'


const Header = () => {

  return (
    <>
      <Navbar expand="lg" className= "navbar">
        <Container className="container">
          <Navbar.Toggle  />
          <Navbar.Collapse id="basic-navbar-nav">
          <NavLink className="navbar-brand" to="/">APPLE STORE</NavLink>
            <Nav >
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/products">Product</NavLink>
              <NavLink className="nav-link" to="/about">About</NavLink>
              <NavLink className="nav-link contact-link" to="/contact">Contact</NavLink>
            </Nav>


            <div className="buttons">
              <Login />
              <Signup />
              <CartBtn />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </> 
  )
}

export default Header