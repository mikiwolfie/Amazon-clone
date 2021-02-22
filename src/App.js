import React from "react";
import './App.css';
import Header from './Header.js'
import Home from "./Home.js"


function App() {
    return (
      // BEM
      <Router>
      <div className = "app" >
      <Switch>
       <Header />
       <Home />
      </Switch>
      </div>
      </Router>
    );
}

export default App;
