import React from "react";
import "../assets/styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CarAndHome from "../assets/images/humphrey-muleba-XJ2sq44LkIg-unsplash-1.png";
import Logo from "../assets/images/CRBO-LogoFinal2.png";

function Login() {
  return (
    <div>
      <div id="login-content">
        <div id="login-left">
          <div id="login-logo">
            <img src={Logo} alt="CRBO logo" />
          </div>
          <form>
            <p>Admin Login</p>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="login-input"
              ></input>
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="login-input"
              ></input>
            </div>
            <Link to="/dashboard">
              <button>Sign In</button>
            </Link>
          </form>
        </div>

        <div id="login-right">
          <img src={CarAndHome} alt="car and home" />
        </div>
      </div>
    </div>
  );
}

export default Login;
