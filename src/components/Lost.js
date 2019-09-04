import React from "react";
import ButtonNewGame from './ButtonNewGame'

export default function Lost(props) {
  const { setIsStarted, setIsOver, setNewMessage, setIsDistracting, state, dispatch } = props;

  return (
    <div className="rules-container">
      <h2 className="hello">You lost the game, Professor!</h2>
      <h2>Your team spent {state.daysInside} days inside.</h2>
      <ButtonNewGame dispatch={dispatch} setIsStarted={setIsStarted} setIsOver={setIsOver} setNewMessage={setNewMessage} setIsDistracting={setIsDistracting}/>
    </div>
  );
}
