import React from "react";
import Sound from 'react-sound';
import ButtonNewGame from "./ButtonNewGame";
import ResultsFormContainer from "./ResultsFormContainer";

export default function Won(props) {
  const {
    setIsStarted,
    setIsOver,
    setNewMessage,
    setIsDistracting,
    state,
    dispatch,
    isFormOpen,
    openForm,
    hideForm,
    openTable
  } = props;

  return (
    <div className="rules-container">
      <h2 className="hello">You won, Professor!</h2>
      <h2>You've got {state.money}€</h2>
      <h2>Your team spent {state.daysInside} days inside!</h2>
      {isFormOpen ? (
        <ResultsFormContainer hideForm={hideForm} openTable={openTable}/>
      ) : (
        <img
          className="end-game-img"
          src="https://www.pausefun.com/wp-content/uploads/2018/04/denver-cover.jpg"
          alt="won"
        />
      )}
      <div className="buttons-won-page">
        {!isFormOpen ? (
          <button className="call-your-team-button" onClick={openForm}>
            Save results
          </button>
        ) : <div />}
        <ButtonNewGame
          dispatch={dispatch}
          setIsStarted={setIsStarted}
          setIsOver={setIsOver}
          setNewMessage={setNewMessage}
          setIsDistracting={setIsDistracting}
        />
      </div>
      <Sound
      url="/cool_sound.mp3"
      playStatus={Sound.status.PLAYING}
    />
    </div>
  );
}
