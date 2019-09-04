import React from "react";
import LeaveBlock from "./LeaveBlock";

export default function NewDay(props) {
  const {
    state,
    dispatch,
    setNewDay,
    setIsOver,
    setNewMessage,
    printMoney,
    openVault,
    amountOfMoneySliced
  } = props;

  return (
    <div className="new-days-container">
      <h2 className="new-day">Professor, tell your team what to do today!</h2>
      <div className="variants-block">
        <button className="variant-button" onClick={printMoney}>
          <img
            className="vault"
            src="https://a.mytrend.it/prp/2013/02/448425.jpg"
            alt="print money"
          />
          <h2>Print money</h2>
          <h2>{amountOfMoneySliced}€</h2>
        </button>
        <button
          className="variant-button"
          disabled={state.daysOnVault === 3}
          onClick={openVault}
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
              <h2>500'000€ / {3 - state.daysOnVault} more days</h2>
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
