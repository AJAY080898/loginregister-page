import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // If you have CSS styling for your navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MyApp</Link> {/* Update with your app name */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
