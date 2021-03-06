import React from "react";
import { useGlobalState } from "../useGlobalState";
import NewDay from "./NewDay";
import Stats from "./Stats";
import Team from "./Team";

export default function NewDayContainer(props) {
  const [state, dispatch] = useGlobalState();
  const { setNewDay, setNewMessage, setIsOver } = props;

  const amountOfMoney = 40000 + 10000 * state.people.length;

  const amountOfMoneyToString = amountOfMoney.toString()

  const amountOfMoneySliced = amountOfMoneyToString.slice(0, (amountOfMoneyToString.length - 3)) + "'000"

  const printMoney = () => {
    dispatch({ type: "ADD_MONEY", payload: amountOfMoney });
    setNewDay(false);
    setNewMessage(true);
  };

  const openVault = () => {
    dispatch({ type: "ADD_DAYONVAULT", payload: 1 });
    if (state.daysOnVault === 2) {
      dispatch({ type: "ADD_MONEY", payload: 500000 });
    }
    setNewDay(false);
    setNewMessage(true);
  };

  return (
    <div className="rules-container">
      <div className="top-block">
        <Team people={state.people} />
        <Stats state={state} />
      </div>
      <NewDay
        state={state}
        dispatch={dispatch}
        setNewDay={setNewDay}
        setIsOver={setIsOver}
        setNewMessage={setNewMessage}
        printMoney={printMoney}
        openVault={openVault}
        amountOfMoneySliced={amountOfMoneySliced}
      />
    </div>
  );
}
