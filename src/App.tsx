import React, { useContext } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
// import { string } from "prop-types";

function App() {


  const { theme } = useContext(ThemeContext);
  let classes = theme;
  // eslint-disable-next-line no-useless-concat
  classes += " " + "main-container";

  return (
    <div className={classes}>
      <Router>
        <Banner />
        <div className="lmj-layout-inner">
          <Switch>
            <Route path="/shop">
              <Shop />
            </Route>
            <Home path="/" />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
