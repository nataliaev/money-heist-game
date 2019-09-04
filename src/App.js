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
    people: [{name: "Racer", url: "/images/racer.jpg"}, {name: "Hacker", url: "/images/hacker.jpg"}, {name: "Demolition", url: "/images/demolition.jpg"}, {name: "Strongman", url: "/images/strongman.jpg"}, {name: "Counterfeiter", url: "/images/counterfeiter.jpg"}, {name: "Negotiator", url: "/images/negotiator.jpg"}],
    risk: 40,
    result: true
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
