import React from "react";
import { useGlobalState } from "../useGlobalState";
import NewDay from "./NewDay";
import Stats from "./Stats";

export default function NewDayContainer(props) {
  const [state, dispatch] = useGlobalState();

  const openingVault = () => {
    if (state.daysOnVault === 3) {
      dispatch({ type: "ADD_MONEY", payload: 500000 });
    }
  };

  return (
    <div>
      <Stats state={state} />
      <button onClick={() => dispatch({ type: "EDIT_RISK", payload: 10 })}>
        Set risk
      </button>
      {/* <Team /> */}
      {/* <Stats /> */}
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
