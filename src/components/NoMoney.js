import React from "react";
import ButtonNewGame from './ButtonNewGame'

export default function NoMoney(props) {
  const { setIsStarted, setIsOver, setNewMessage, setIsDistracting, state, dispatch } = props;

  return (
    <div className="rules-container">
      <h2 className="hello">Now you are save, Professor!</h2>
      <h2>Your team spent {state.daysInside} days inside...</h2>
      <h2>but they had to leave without money.</h2>
      <h2>May be next time you will be more lucky!</h2>
      <img className="end-game-img" src="https://www.funx.nl/images/2018/11/04_b3_la-casa-de-papel-money-heist-season-3.jpeg" alt="no-money" />
      <ButtonNewGame dispatch={dispatch} setIsStarted={setIsStarted} setIsOver={setIsOver} setNewMessage={setNewMessage} setIsDistracting={setIsDistracting}/>
    </div>
  );
}
