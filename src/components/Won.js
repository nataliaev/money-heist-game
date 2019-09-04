import React from "react";
import ButtonNewGame from './ButtonNewGame'

export default function Won(props) {
  const { setIsStarted, setIsOver, setNewMessage, setIsDistracting, state, dispatch } = props;

  return (
    <div className="rules-container">
      <h2 className="hello">You won, Professor!</h2>
      <h2>You've got {state.money}€</h2>
      <h2>Your team spent {state.daysInside} days inside!</h2>
      <img className="end-game-img" src="https://www.pausefun.com/wp-content/uploads/2018/04/denver-cover.jpg" alt="won" />
      <ButtonNewGame dispatch={dispatch} setIsStarted={setIsStarted} setIsOver={setIsOver} setNewMessage={setNewMessage} setIsDistracting={setIsDistracting}/>
    </div>
  );
}
