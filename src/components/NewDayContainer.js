import React from "react";
import { useGlobalState } from "../useGlobalState";
import NewDay from "./NewDay";
import Stats from "./Stats";
import Team from "./Team";

export default function NewDayContainer(props) {
  const [state, dispatch] = useGlobalState();

  const openingVault = () => {
    if (state.daysOnVault === 2) {
      dispatch({ type: "ADD_MONEY", payload: 500000 });
    }
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
        setNewDay={props.setNewDay}
        setIsOver={props.setIsOver}
        setNewMessage={props.setNewMessage}
        openingVault={openingVault}
      />
    </div>
  );
}
