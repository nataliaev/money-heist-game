import React, { useState, useEffect } from "react";
import ResultsTable from "./ResultsTable";
import * as request from "superagent";

export default function ResultsTableContainer(props) {
  const [tableMoney, setTableMoney] = useState(false);

  const {
    state,
    dispatch,
    setIsStarted,
    setIsOver,
    setNewMessage,
    setIsDistracting
  } = props;

  useEffect(() => {
    request
      .get("http://localhost:4000/money")
      .then(response => setTableMoney(response.body.result))
      .catch(console.error);
  }, []);

  return (
    <ResultsTable
      state={state}
      dispatch={dispatch}
      setIsStarted={setIsStarted}
      setIsOver={setIsOver}
      setNewMessage={setNewMessage}
      setIsDistracting={setIsDistracting}
      tableMoney={tableMoney}
    />
  );
}
