import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark test">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="/Assets/Images/arm.png"
            alt="Logo"
            width={30}
            height={30}
            className="d-inline-block align-text-top"
          />
          <span> </span>Gymo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto p-2 bd-highlight">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
