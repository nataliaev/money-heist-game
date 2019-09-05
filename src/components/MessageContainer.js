import React from "react";
import { useGlobalState } from "../useGlobalState";
import Message from "./Message";
import { messages } from "./messages";
import randomIndex from "./randomIndex";
import countResult from "./countResult";

export default function MessageContainer(props) {
  const [state, dispatch] = useGlobalState();
  const { setNewDay, setIsOver, setNewMessage, setIsDistracting } = props;

  const randomNumber = randomIndex(messages.length);

  let newRiskLevel = state.risk + messages[randomNumber].riskLevel

  if (newRiskLevel < 0) {
    newRiskLevel = 0
  } else if (newRiskLevel > 100) {
    newRiskLevel = 100
  }

  let riskLevelWithDistraction = state.risk - 10;

  if (riskLevelWithDistraction < 0 ) {
    riskLevelWithDistraction = 0
  } else if (riskLevelWithDistraction> 100) {
    riskLevelWithDistraction = 100
  }

  const continueGame = () => {
    dispatch({
      type: "EDIT_RISK",
      payload: messages[randomNumber].riskLevel
    });
    dispatch({ type: "ADD_DAYINSIDE", payload: 1 });
    countResult(newRiskLevel, dispatch, setIsOver, setNewDay, setNewMessage, setIsDistracting);
    if (newRiskLevel < 70) {
      setNewDay(true);
      setNewMessage(false);
    }
  };

  const distraction = () => {
    dispatch({ type: "EDIT_RISK", payload: -10 });
    dispatch({ type: "ADD_DAYINSIDE", payload: 1 });
    setIsDistracting(true);
    setNewMessage(false);
  };

  return (
    <Message
      setNewDay={setNewDay}
      setNewMessage={setNewMessage}
      setIsOver={setIsOver}
      state={state}
      dispatch={dispatch}
      randomNumber={randomNumber}
      newRiskLevel={newRiskLevel}
      riskLevelWithDistraction={riskLevelWithDistraction}
      continueGame={continueGame}
      distraction={distraction}
    />
  );
}
