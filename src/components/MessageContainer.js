import React from "react";
import { useGlobalState } from "../useGlobalState";
import Stats from "./Stats";
import Team from "./Team";
import LeaveBlock from "./LeaveBlock";

export default function MessageContainer(props) {
  const [state, dispatch] = useGlobalState();
  const { setNewDay, setIsOver, setNewMessage } = props;

  const messages = [""];

  const gameResult = false;

  const newRiskLevel = state.risk + 10;

  function randomIndex(dataLength) {
    if (dataLength < 1 || dataLength === undefined) return -1;

    return Math.floor(Math.random() * dataLength);
  }

  return (
    <div>
      <div className="rules-container">
        <div className="top-block">
          <Team people={state.people} />
          <Stats state={state} />
        </div>
        <div>
          <h2 className="hello">You've got one new message...</h2>
          <h3>{messages[randomIndex(messages.length)]}</h3>
        </div>
        <div className="variants-block">
          <button
            className="variant-button"
            onClick={() => {
              dispatch({ type: "EDIT_RISK", payload: 10 });
              dispatch({ type: "ADD_DAYINSIDE", payload: 1 });
              if (gameResult === true) {
                setIsOver(true);
              } else {
                setNewDay(true);
                setNewMessage(false);
              }
            }}
          >
            <h2>Pray and go to sleep</h2>
            <h3>Risk level for tomorrow will be {newRiskLevel}%</h3>
          </button>
          <button
            className="variant-button"
            onClick={() => {
              dispatch({ type: "EDIT_RISK", payload: -10 });
              dispatch({ type: "ADD_DAYINSIDE", payload: 1 });
              if (gameResult === true) {
                setIsOver(true);
              } else {
                setNewDay(true);
                setNewMessage(false);
              }
            }}
          >
            <h2>Distract the police</h2>
            <h3>
              You will lose one of your team members, but risk level for tomorrow will be {state.risk - 10}%
            </h3>
          </button>
          <LeaveBlock
            state={state}
            setIsOver={setIsOver}
            setNewDay={setNewDay}
            setNewMessage={setNewMessage}
          />
        </div>
      </div>
    </div>
  );
}
