import React from "react";
import { useGlobalState } from "../useGlobalState";
import Won from './Won'
import Lost from './Lost'
import NoMoney from './NoMoney'

export default function EndPageContainer(props) {
  const [state, dispatch] = useGlobalState();
  const { setIsStarted, setIsOver } = props;

  const result = true

  if (result === true && state.money > 0) {
    return <Won state={state} dispatch={dispatch} setIsStarted={setIsStarted} setIsOver={setIsOver} />
  } else if (result === true) {
    return <NoMoney state={state} dispatch={dispatch} setIsStarted={setIsStarted} setIsOver={setIsOver} />
  } else {
    return <Lost state={state} dispatch={dispatch} setIsStarted={setIsStarted} setIsOver={setIsOver} />
  }
}
