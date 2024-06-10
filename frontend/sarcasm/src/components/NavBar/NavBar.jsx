import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Leads from '../../images/Leads_logo.png';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={Leads} alt="Logo" className="navbar-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ml-auto">
              <Link to="/" className="btn">Home</Link>
              <Link to="/create-post" className="btn">Post</Link>
              <Link to="/Aboutus" className="btn">About us</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
