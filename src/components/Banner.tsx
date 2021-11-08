import React from "react";
import "../styles/Banner.css";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const title = "La maison jungle";
  return (
    <div className="lmj-banner">
      <ul className="lmj-nav">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="link">
            Shop
          </Link>
        </li>
      </ul>
      <div className="lmj-bnr-container">
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
