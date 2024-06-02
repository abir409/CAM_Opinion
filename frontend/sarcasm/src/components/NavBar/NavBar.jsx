import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';


const NavBar = () => {
  return (
    <div>




    <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav ml-auto">
                    <Link to={`/`} className="btn">Home</Link>
                    <Link to={`/create-post`} className="btn">Post</Link>
                </div>
            </div>
        </div>
    </nav>

    
    </div>
  )
}

export default NavBar;