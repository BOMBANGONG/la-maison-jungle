// import { useState } from "react";
import Button from "./Button";
import "../styles/Footer.css";
import Textfield from "./Textfield";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function Footer() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <Textfield />
      <Button onClick={toggleTheme}>Change mode</Button>
    </footer>
  );
}

export default Footer;
