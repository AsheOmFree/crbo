import React from "react";
import "../assets/styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "../assets/images/CRBO-LogoFinal2.png";

function Header() {
  return (
    <div>
      <div></div>

      <header>
        <img src={Logo} alt="CRBO logo" className="header-logo" />
        <div id="signed-in-user">
          <span>Bryan Holland</span>
          <img src={Logo} alt="CRBO logo" id="user-picture" />
        </div>
      </header>

      <nav>
        <ul>
          <li>
            <Link to="/dashboard" className="nav-item">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin" className="nav-item">
              Admin
            </Link>
          </li>
          <li>
            <Link to="/users" className="nav-item">
              Users
            </Link>
          </li>
          <li>
            <Link to="/vehicles" className="nav-item">
              Vehicles
            </Link>
          </li>
          <li>
            <Link to="/reports" className="nav-item">
              Reports
            </Link>
          </li>
          <li>
            <Link to="/reviews" className="nav-item">
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
