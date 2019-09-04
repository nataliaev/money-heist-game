import React from "react";
import ResultsTable from "./ResultsTable";

export default function ResultsTableContainer(props) {
  const { money, daysInside, risk } = props.state;

  const {
    state,
    dispatch,
    setIsStarted,
    setIsOver,
    setNewMessage,
    setIsDistracting,
    hideTable
  } = props;

  return (
    <ResultsTable
      dispatch={dispatch}
      setIsStarted={setIsStarted}
      setIsOver={setIsOver}
      setNewMessage={setNewMessage}
      setIsDistracting={setIsDistracting}
    />
  );
}
