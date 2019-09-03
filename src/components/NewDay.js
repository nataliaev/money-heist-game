import React from "react";

export default function NewDay(props) {
  const { dispatch, setNewDay, setIsOver, setNewMessage, openingVault } = props;

  return (
    <div className="new-days-container">
      <h2>It's a new day, Professor. Tell your team what to do today!</h2>
      <h2>Choose one from:</h2>
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
          <h3>You can print 100'000$ today</h3>
        </button>
        <button
          className="variant-button"
          onClick={() => {
            dispatch({ type: "ADD_DAYONVAULT", payload: 1 });
            openingVault();
            setNewDay(false);
            setNewMessage(true);
          }}
        >
          <h2>Open Vault</h2>
          <h3>
            If you spent 3 more days on opening the Vaut, you will get 500'000$
          </h3>
        </button>
      </div>
      <div>
        <h2>Leave</h2>
        <button
          onClick={() => {
            setIsOver(true);
            setNewDay(false);
          }}
        >
          Go inside
        </button>
        <button
          onClick={() => {
            setIsOver(true);
            setNewDay(false);
          }}
        >
          Go inside
        </button>
        <button
          onClick={() => {
            setIsOver(true);
            setNewDay(false);
          }}
        >
          Go inside
        </button>
      </div>
    </div>
  );
}
