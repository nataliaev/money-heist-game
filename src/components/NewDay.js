import React from "react";

export default function NewDay(props) {
  const {
    state,
    dispatch,
    setNewDay,
    setIsOver,
    setNewMessage,
    openingVault
  } = props;

  return (
    <div className="new-days-container">
      <h2>Professor, tell your team what to do today!</h2>
      <div className="variants-block">
        <button
          className="variant-button"
          onClick={() => {
            dispatch({ type: "ADD_MONEY", payload: 100000 });
            setNewDay(false);
            setNewMessage(true);
          }}
        >
          <h2>Print money</h2>
          <h3>You can print 100'000€ today</h3>
        </button>
        <button
          className="variant-button"
          disabled={state.daysOnVault === 3}
          onClick={() => {
            dispatch({ type: "ADD_DAYONVAULT", payload: 1 });
            openingVault();
            setNewDay(false);
            setNewMessage(true);
          }}
        >
          {state.daysOnVault === 3 ? (
            <h2>You already opend the Vault</h2>
          ) : (
            <div>
              <h2>Open Vault</h2>
              <h3>
                If you spent 3 more days on opening the Vaut, you will get
                500'000€
              </h3>
            </div>
          )}
        </button>

        <div className="leave-block">
          <h2 className="leave-h2">Leave:</h2>
          <button
            className="leave-variants"
            disabled={!state.people.includes(1)}
            onClick={() => {
              setIsOver(true);
              setNewDay(false);
            }}
          >
            <h2>Use a car</h2>
            <h3>You need to have a Racer in your team</h3>
          </button>
          <button
            className="leave-variants"
            disabled={state.daysInside < 10}
            onClick={() => {
              setIsOver(true);
              setNewDay(false);
            }}
          >
            <h2>Use a tunnel</h2>
            <h3>{10 - state.daysInside} Days left for tunnel be ready</h3>
          </button>
          <button
            className="leave-variants"
            onClick={() => {
              setIsOver(true);
              setNewDay(false);
            }}
          >
            <h2>Leave with hostages</h2>
            <h3>You can't take money with you!</h3>
          </button>
        </div>
      </div>
    </div>
  );
}
