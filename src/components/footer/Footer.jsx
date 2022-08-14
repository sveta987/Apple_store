import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
        <div className="inner">
          <div className="box">
            <h3>ABOUT US</h3>
            <p>Apple Store is an equal opportunity employer that is committed to inclusion and diversity. We take affirmative action to ensure equal opportunity for all applicants.</p>
          </div>
          <div className="box">
            <h3>BRANCH LOCATION</h3>
            <Link to="#">Yerevan</Link>
            <Link to="#">Gyumri</Link>
            <Link to="#">Vanadzor</Link>
            <Link to="#">Kapan</Link>
          </div>
          <div className="box">
            <h3>QUICK LINKS</h3>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="box">
            <h3>FOLLOW US</h3>
            <Link to="#">Facebook</Link>
            <Link to="#">instagram</Link>
            <Link to="#">twitter</Link>
            <Link to="#">linkedin</Link>
          </div>
        </div>
        <h4 className="created">Created by <span>Sveta Antonyan and Ani Hovhannisyan</span> | all rights reserved!</h4>
        </div>
      </div>

    </>
  )
}

export default Footer