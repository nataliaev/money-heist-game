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

  const newRiskLevel = state.risk + messages[randomNumber].riskLevel;

  const continueGame = () => {
    dispatch({
      type: "EDIT_RISK",
      payload: messages[randomNumber].riskLevel
    });
    dispatch({ type: "ADD_DAYINSIDE", payload: 1 });
    countResult(newRiskLevel, dispatch);
    if (state.result === false) {
      setIsOver(true);
    } else {
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
      continueGame={continueGame}
      distraction={distraction}
    />
  );
}
