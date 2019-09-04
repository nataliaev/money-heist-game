import React from "react";
import { useGlobalState } from "../useGlobalState";
import Won from './Won'
import Lost from './Lost'
import NoMoney from './NoMoney'

export default function EndPageContainer(props) {
  const [state, dispatch] = useGlobalState();
  const { setIsStarted, setIsOver, setNewMessage, setIsDistracting } = props;

  const { result } = state

  if (result === true && state.money > 0) {
    return <Won state={state} dispatch={dispatch} setIsStarted={setIsStarted} setIsOver={setIsOver} setNewMessage={setNewMessage} setIsDistracting={setIsDistracting}/>
  } else if (result === true) {
    return <NoMoney state={state} dispatch={dispatch} setIsStarted={setIsStarted} setIsOver={setIsOver} setNewMessage={setNewMessage} setIsDistracting={setIsDistracting}/>
  } else {
    return <Lost state={state} dispatch={dispatch} setIsStarted={setIsStarted} setIsOver={setIsOver} setNewMessage={setNewMessage} setIsDistracting={setIsDistracting}/>
  }
}
