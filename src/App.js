import React from "react";
import GameContainer from './components/GameContainer'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={GameContainer} />
    </div>
  );
}

export default App;
