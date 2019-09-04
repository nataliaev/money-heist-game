import React, { useState } from "react";
import { useGlobalState } from "../useGlobalState";
import Won from "./Won";
import Lost from "./Lost";
import NoMoney from "./NoMoney";
import ResultsTableContainer from './ResultsTableContainer'

export default function EndPageContainer(props) {
  const [state, dispatch] = useGlobalState();
  const { setIsStarted, setIsOver, setNewMessage, setIsDistracting } = props;
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isTableOpen, setIsTableOpen] = useState(false);

  const { result } = state;

  const openForm = () => {
    setIsFormOpen(true);
  };

  const hideForm = () => {
    setIsFormOpen(false);
  };

  const openTable = () => {
    setIsTableOpen(true);
  };

  if (isTableOpen === true) {
    return (
      <ResultsTableContainer
        state={state}
        dispatch={dispatch}
        setIsStarted={setIsStarted}
        setIsOver={setIsOver}
        setNewMessage={setNewMessage}
        setIsDistracting={setIsDistracting}
      />
    );
  } else if (result === true && state.money > 0) {
    return (
      <Won
        state={state}
        dispatch={dispatch}
        setIsStarted={setIsStarted}
        setIsOver={setIsOver}
        setNewMessage={setNewMessage}
        setIsDistracting={setIsDistracting}
        isFormOpen={isFormOpen}
        openForm={openForm}
        hideForm={hideForm}
        openTable={openTable}
      />
    );
  } else if (result === true) {
    return (
      <NoMoney
        state={state}
        dispatch={dispatch}
        setIsStarted={setIsStarted}
        setIsOver={setIsOver}
        setNewMessage={setNewMessage}
        setIsDistracting={setIsDistracting}
        openTable={openTable}
      />
    );
  } else {
    return (
      <Lost
        state={state}
        dispatch={dispatch}
        setIsStarted={setIsStarted}
        setIsOver={setIsOver}
        setNewMessage={setNewMessage}
        setIsDistracting={setIsDistracting}
      />
    );
  }
}
