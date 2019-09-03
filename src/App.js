import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "./useGlobalState"
import reducer from './reducers';
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <Provider reducer={reducer} initialState={{
      daysInside: 0,
      daysOnVault: 0,
      money: 0,
      people: [1, 2, 3, 4, 5, 6],
      risk: 50
    }}>
      <div className="App">
        <Route exact path="/" component={Game} />
      </div>
    </Provider>
  );
}

export default App;
