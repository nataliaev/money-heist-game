import React, { useState } from "react";
import Rules from './Rules'
// import EndPageContainer from './EndPageContainer'
import NewDayContainer from './NewDayContainer'
// import MessageContainer from './MessageContainer'
import StartPage from './StartPage'

export default function Game() {
  const [isStarted, setIsStarted] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [isNewDay, setNewDay] = useState(false)
  const [isNewMessage, setNewMessage] = useState(false)

  if (isStarted === true) {
    return <Rules setIsStarted={setIsStarted} setNewDay={setNewDay}/>
  // } else if (isOver === true) {
  //   return <EndPageContainer setIsStarted={setIsStarted} setIsOver={setIsOver}/>
  } else if (isNewDay === true) {
     return <NewDayContainer setNewMessage={setNewMessage} setIsOver={setIsOver} setNewDay={setNewDay}/>
  // } else if (isNewMessage === true) {
  //   return <MessageContainer setNewDay={setNewDay} setNewMessage={setNewMessage} setIsOver={setIsOver}/>
  } else {
    return <StartPage setIsStarted={setIsStarted}/>
  }
}
