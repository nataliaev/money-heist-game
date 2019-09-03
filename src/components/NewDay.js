import React from "react";

export default function NewDay(props) {
  const [addMoney, addDayOnVault, setNewDay, setIsOver, setNewMessage, openingVault] = props;

  return (
    <div>
      <h2>It's a new day, Professor. Tell your team what to do today!</h2>
      <h2>Choose one from:</h2>
      <button
        onClick={() => {
          addMoney(100000)
          setNewDay(false)
          setNewMessage(true)
        }}
      >
        Print money
      </button>
      <button
        onClick={() => {
          addDayOnVault()
          openingVault()
          setNewDay(false)
          setNewMessage(true)
        }}
      >
        Open Vault
      </button>
      <div>
        <h2>Leave</h2>
        <button
          onClick={() => {
            setIsOver(true)
            setNewDay(false);
          }}
        >
          Go inside
        </button>
        <button
          onClick={() => {
            setIsOver(true)
            setNewDay(false);
          }}
        >
          Go inside
        </button>
        <button
          onClick={() => {
            setIsOver(true)
            setNewDay(false);
          }}
        >
          Go inside
        </button>
      </div>
    </div>
  );
}
