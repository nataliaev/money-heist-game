import React, { useState, useEffect } from "react";
import ResultsTable from "./ResultsTable";
import * as request from "superagent";

export default function ResultsTableContainer(props) {
  const [tableMoney, setTableMoney] = useState(false);
  const [offset, setOffset] = useState(0)

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
      .get(`http://localhost:4000/money?offset=${offset}&limit=10`)
      .then(response => setTableMoney(response.body.result))
      .catch(console.error);
  }, [offset]);

  const nextPage = () => {
    setOffset(offset + 10)
  }

  const previousPage = () => {
    setOffset(offset - 10)
  }

  return (
    <ResultsTable
      state={state}
      dispatch={dispatch}
      setIsStarted={setIsStarted}
      setIsOver={setIsOver}
      setNewMessage={setNewMessage}
      setIsDistracting={setIsDistracting}
      tableMoney={tableMoney}
      nextPage={nextPage}
      previousPage={previousPage}
    />
  );
}
