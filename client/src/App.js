import React from "react";
import { Route, Switch,HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Tutorial from "./Tutorial";
import Tutoriallist from "./Tutoriallist"

import Header from "./includes/Header"
import Register from "./Register"
function App() {
  return (
 
	 <div id="wrapper">
        <HashRouter>
        <Header>
          <Switch>
            <Route path ="/" exact component={Tutorial} />
            <Route path ="/Register" exact component={Register} />
            <Route path ="/Tutoriallist" exact component={Tutoriallist} />
          </Switch>
          </Header>
        </HashRouter>
      </div>
  );
}

export default App;
