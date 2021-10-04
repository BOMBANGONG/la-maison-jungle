import React from "react";
import "../styles/Banner.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const title = "La maison jungle";
  return (
    <div className="lmj-banner">
      <ul className="lmj-nav">
        <Link to="/">Home</Link>
        <Link to="/list">Shop</Link>
      </ul>
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
      <h1 className="lmj-title">{title}</h1>
    </div>
  );
};

export default Banner;
