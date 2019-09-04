import React from "react";
import { useGlobalState } from "../useGlobalState";
import countResult from "./countResult";

export default function ChooseMember(props) {
  const { setIsDistracting, setNewDay, setIsOver, setNewMessage } = props;
  const [state, dispatch] = useGlobalState();
  const { risk } = state;

  return (
    <div className="people-buttons-block">
      <h2 className="hello">
        Who will you send outside ro catch attention of police?
      </h2>
      {state.people.map(person => (
        <button
          key={person.name}
          value={person.name}
          onClick={() => {
            dispatch({ type: "EDIT_PEOPLE", payload: person });
            countResult(risk, dispatch, setIsOver, setNewDay, setNewMessage, setIsDistracting);
            if (risk < 70) {
              setNewDay(true);
              setNewMessage(false);
              setIsDistracting(false)
            }
          }}
        >
          <img
            className="people-img"
            src={person.url}
            alt="team"
          />
        </button>
      ))}
    </div>
  );
}
