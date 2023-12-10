import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  return (
    <div className="navbar"> {/* Apply the 'navbar' class */}
      <Link to="/">login</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/team">Team</Link>
      

    </div>
  );
};

export default Navbar;
