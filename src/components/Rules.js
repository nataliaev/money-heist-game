import React from "react";
import Team from './Team'

export default function Rules(props) {
  return (
    <div className="rules-container">
      <h1 className="hello">Hello Professor!</h1>
      <h2 className="rules-text">
        Today is the main day of your life. <br></br> Your team is inside of the Money
        Heist. <br></br> You can comunicate with them once a day to give them tasks to:
      </h2>

      <h2 className="hello">- print money</h2>
      <h2 className="hello">- open the vault</h2>
      <h2 className="hello">- leave</h2>

      <h2 className="rules-text">Different tasks needs different skills. So meet your team:</h2>
      <Team people={props.people} />
      <h2 className="rules-text">
        Things happen. So you can expect getting some urgent messages. Response
        to them carefully. <br></br> If you will choose diversion, to catch attention of
        police, than you will lose one person from your team.
      </h2>
      <h2 className="rules-text">
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
