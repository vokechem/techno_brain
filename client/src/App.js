import React from "react";
import { Route, Switch,HashRouter } from "react-router-dom";
import Tutorial from "./Tutorial"

import Header from "./includes/Header"
function App() {
  return (
 
	 <div id="wrapper">
        <HashRouter>
        <Header>
          <Switch>
            <Route path ="/" exact component={Tutorial} />
             
          </Switch>
          </Header>
        </HashRouter>
      </div>
  );
}

export default App;
