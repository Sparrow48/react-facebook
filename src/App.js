import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Sidebars from "./components/Sidebar/Sidebars";

import classes from "./App.module.css";

function App() {
  return (
    <Router>
      <Route path='/'>
        <div className={classes.app}>
          <Navbar />
          <div className={classes.body}>
            <div className={classes.div3}>
              <Sidebars />
            </div>
            <div className={classes.div1}>
              <h3>I am main body</h3>
              <h3>I am main body</h3>
              <h3>I am main body</h3>
              <h3>I am main body</h3>
              <h3>I am main body</h3>
              <h3>I am main body</h3>
              <h3>I am main body</h3>
              <h3>I am main body</h3>
            </div>
            <div className={classes.div2}>
              <h3>I am Right Sidebar</h3>
            </div>
          </div>
        </div>
      </Route>
    </Router>
  );
}

export default App;
