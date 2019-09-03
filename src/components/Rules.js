import React from "react";

export default function Rules(props) {
  return (
    <div className="rules-container">
      <h1>Hello Professor!</h1>
      <h2>
        Today is the main day of your life. Your team is inside of the Money
        Heist. You can comunicate with them once a day to make the decisions,
        that will change the risk level of the hole operation. You can choose
        to:
      </h2>

      <h2>print money</h2>
      <h2>open the vault</h2>
      <h2>leave</h2>

      <h2>Different tasks needs different skills. So meet your team:</h2>
      <h2>
        Things happen. So you can expect getting some urgent messages. Response
        to them carefully. If you will choose diversion, to catch attention of
        police, than you will lose one person from your team.
      </h2>
      <h2>
        Make as much money as possible, try to leave with them. If the risk
        level is very high you may be caught by police
      </h2>
      <button
        className="call-your-team-button"
        onClick={() => {
          props.setIsStarted(false);
          props.setNewDay(true);
        }}
      >
        Call your team
      </button>
    </div>
  );
}
