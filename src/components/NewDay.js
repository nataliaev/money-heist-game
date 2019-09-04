import React from "react";
import LeaveBlock from "./LeaveBlock";

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
          <img
            className="vault"
            src="https://a.mytrend.it/prp/2013/02/448425.jpg"
            alt="print money"
          />
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
          <img
            className="vault"
            src="https://www.stacresearch.com/images/vault_image.jpg"
            alt="vault"
          />
          {state.daysOnVault === 3 ? (
            <h2>You already opend the Vault</h2>
          ) : (
            <div>
              <h2>Open Vault</h2>
              <h3>
                If you spent {3 - state.daysOnVault} more days on opening the
                Vaut, you will get 500'000€
              </h3>
            </div>
          )}
        </button>
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
