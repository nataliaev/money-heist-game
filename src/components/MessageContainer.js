import React from "react";
import { useGlobalState } from "../useGlobalState";
import Stats from "./Stats";
import Team from "./Team";
import LeaveBlock from "./LeaveBlock";
import { messages } from "./messages";
import randomIndex from "./randomIndex";

export default function MessageContainer(props) {
  const [state, dispatch] = useGlobalState();
  const { setNewDay, setIsOver, setNewMessage, setIsDistracting } = props;

  const gameResult = false;

  const randomNumber = randomIndex(messages.length);

  const newRiskLevel = state.risk + messages[randomNumber].riskLevel;

  return (
    <div className="rules-container">
        <div className="top-block">
          <Team people={state.people} />
          <Stats state={state} />
        </div>
        <div className="message-container">
        <div className="note-box">
          <img className="note" src="https://png2.cleanpng.com/sh/85b1013a1e929c195b68d784f1629b03/L0KzQYi4UsE4N2g2TpGAYUO5RLWBUcY3bZM6SpC5NUm3QoO6WME2OWQ6SKo7MkW3QoK9TwBvbz==/5a364d8166eb52.0594223815135082254216.png" alt="note" />
          <h2 className="message">{messages[randomNumber].message}</h2>
        </div>
        <div className="message-variants-block">
          <button
            className="message-variant-button"
            onClick={() => {
              dispatch({ type: "EDIT_RISK", payload: messages[randomNumber].riskLevel });
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
            <h3>Risk level for tomorrow will be</h3>
            <h2>{newRiskLevel}%</h2>
          </button>
          <button
            className="message-variant-button"
            onClick={() => {
              dispatch({ type: "EDIT_RISK", payload: -10 });
              dispatch({ type: "ADD_DAYINSIDE", payload: 1 });
              if (gameResult === true) {
                setIsOver(true);
              } else {
                setIsDistracting(true);
                setNewMessage(false);
              }
            }}
          >
            <h2>Distract the police</h2>
            <h3>
              You will lose one of your team members and risk level for
              tomorrow will be 
            </h3>
            <h2>{state.risk - 10}%</h2>
          </button>
          
        </div>
        <LeaveBlock
            state={state}
            setIsOver={setIsOver}
            setNewDay={setNewDay}
            setNewMessage={setNewMessage}
          />
      </div>
    </div>
  );
}
