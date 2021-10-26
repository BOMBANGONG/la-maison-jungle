import React from "react";
import "../styles/Home.css";

const Home = () => {
  const imageFilePath = "../img/monstera.jpeg";
  return (
    <div style={{ backgroundImage: `url("file:${imageFilePath}")` }}>
      <p>Feel free to buy anything</p>
    </div>
  );
};

export default Home;
