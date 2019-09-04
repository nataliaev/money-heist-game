import React from "react";
import Stats from "./Stats";
import Team from "./Team";
import LeaveBlock from "./LeaveBlock";
import { messages } from "./messages";

export default function MessageContainer(props) {
  const {
    setNewDay,
    setIsOver,
    setNewMessage,
    state,
    dispatch,
    randomNumber,
    newRiskLevel,
    continueGame,
    distraction
  } = props;

  return (
    <div className="rules-container">
      <div className="top-block">
        <Team people={state.people} />
        <Stats state={state} />
      </div>
      <div className="message-container">
        <div className="note-box">
          <img
            className="note"
            src="https://png2.cleanpng.com/sh/85b1013a1e929c195b68d784f1629b03/L0KzQYi4UsE4N2g2TpGAYUO5RLWBUcY3bZM6SpC5NUm3QoO6WME2OWQ6SKo7MkW3QoK9TwBvbz==/5a364d8166eb52.0594223815135082254216.png"
            alt="note"
          />
          <h2 className="message">{messages[randomNumber].message}</h2>
        </div>
        <div className="message-variants-block">
          <button className="message-variant-button" onClick={continueGame}>
            <h2>Pray and go to sleep</h2>
            <h3>Risk level for tomorrow will be</h3>
            <h2>{newRiskLevel}%</h2>
          </button>
          <button
            className="message-variant-button"
            disabled={state.people.length === 1}
            onClick={distraction}
          >
            {state.people.length === 1 ? (
              <h3>You don't have enough people to distract the police</h3>
            ) : (
              <div>
                <h2>Distract the police</h2>
                <h3>
                  You will lose one of your team members and risk level for
                  tomorrow will be
                </h3>
                <h2>{state.risk - 10}%</h2>
              </div>
            )}
          </button>
        </div>
        <LeaveBlock
          state={state}
          dispatch={dispatch}
          setIsOver={setIsOver}
          setNewDay={setNewDay}
          setNewMessage={setNewMessage}
        />
      </div>
    </div>
  );
}
