import React from "react";
import { Route } from "react-router-dom";
import Game from './components/Game'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Game} />
    </div>
  );
}

export default App;
