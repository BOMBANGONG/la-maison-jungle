import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
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
