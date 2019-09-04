import React from "react";
import ButtonNewGame from './ButtonNewGame'

export default function Won(props) {
  const { setIsStarted, setIsOver, state, dispatch } = props;

  return (
    <div className="rules-container">
      <h2 className="hello">You won, Professor!</h2>
      <h2>You've got {state.money}€</h2>
      <h2>Your team spent {state.daysInside} days inside!</h2>
      <ButtonNewGame dispatch={dispatch} setIsStarted={setIsStarted} setIsOver={setIsOver}/>
    </div>
  );
}
