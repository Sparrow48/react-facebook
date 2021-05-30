import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import LeftSidebars from "./components/LeftSidebar/Sidebars";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import Main from "./components/MainBody/MainBody";

import classes from "./App.module.css";

function App() {
  return (
    <Router>
      <Route path='/'>
        <div className={classes.app}>
          <Navbar />
          <div className={classes.body}>
            <div className={classes.div1}>
              <Main />
            </div>
            <LeftSidebars />
            <RightSidebar />
          </div>
        </div>
      </Route>
    </Router>
  );
}

export default App;
