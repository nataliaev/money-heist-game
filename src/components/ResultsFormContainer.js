import React, { useState } from "react";
import { useGlobalState } from "../useGlobalState";
import ResultsForm from "./ResultsForm";
import * as request from "superagent";

export default function ResultsFormContainer(props) {
  const [isName, setIsName] = useState("");
  const [state] = useGlobalState();

  const onChange = event => {
    setIsName(event.target.value);
  };

  const onSubmit = async event => {
    event.preventDefault();
    await request
      .post("https://guarded-caverns-04375.herokuapp.com/result")
      .send({
        name: isName,
        money: state.money,
        days: state.daysInside
      })
      .catch(console.error);
    setIsName("");
    props.openTable();
  };

  return (
    <ResultsForm
      onSubmit={onSubmit}
      onChange={onChange}
      isName={isName}
      hideForm={props.hideForm}
    />
  );
}
