import React from "react";

export default function ButtonNewGame(props) {
  const {
    dispatch,
    setIsOver,
    setIsStarted,
    setNewMessage,
    setIsDistracting
  } = props;

  return (
    <div>
      <button
        className="call-your-team-button"
        onClick={() => {
          dispatch({ type: "DELETE_MONEY", payload: 0 });
          dispatch({ type: "SET_DAYSINSIDE", payload: 1 });
          dispatch({ type: "SET_RISK", payload: 40 });
          dispatch({
            type: "SET_PEOPLE",
            payload: [
              "Racer",
              "Hacker",
              "Demolition",
              "Strongman",
              "Counterfeiter",
              "Negotiator"
            ]
          });
          dispatch({ type: "SET_DAYONVAULT", payload: 0 });
          dispatch({ type: "SET_RESULT", payload: true })
          setIsStarted(false);
          setIsOver(false);
          setNewMessage(false);
          setIsDistracting(false);
        }}
      >
        Start new game
      </button>
    </div>
  );
}
