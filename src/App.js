import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchQuery from "./components/SearchQuery/SearchQuery";
import Home from "./components/Home/Home";

function App() {
 

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>       
          <Route path="/:query" component={SearchQuery}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
