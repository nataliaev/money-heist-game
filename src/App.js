import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "./useGlobalState";
import reducer from "./reducers";
import Game from "./components/Game";
import "./App.css";

function App() {
  
  const initialState = {
    daysInside: 1,
    daysOnVault: 0,
    money: 0,
    people: ["Racer", "Hacker", "Demolition", "Strongman", "Counterfeiter", "Negotiator"],
    risk: 50
  };

  return (
    <Provider reducer={reducer} initialState={initialState}>
      <div className="App">
        <Route exact path="/" component={Game} />
      </div>
    </Provider>
  );
}

export default App;
