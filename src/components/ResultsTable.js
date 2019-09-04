import React from "react";
import ButtonNewGame from './ButtonNewGame'

export default function ResultsTable(props) {
  const { money, daysInside, risk } = props.state;

  const {
    setIsStarted,
    setIsOver,
    setNewMessage,
    setIsDistracting,
    dispatch,
    hideTable
  } = props;

  return (
    <div className="rules-container">
      <h2>Money: {money}€</h2>
      <h2>Days inside: {daysInside}</h2>
      <h2>Risk level: {risk}%</h2>
      <ButtonNewGame
          dispatch={dispatch}
          setIsStarted={setIsStarted}
          setIsOver={setIsOver}
          setNewMessage={setNewMessage}
          setIsDistracting={setIsDistracting}
        />
    </div>
  );
}