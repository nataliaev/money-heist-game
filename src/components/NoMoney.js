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
      <ButtonNewGame dispatch={dispatch} setIsStarted={setIsStarted} setIsOver={setIsOver} setNewMessage={setNewMessage} setIsDistracting={setIsDistracting}/>
    </div>
  );
}
