import React from "react";
import { useGlobalState } from "../useGlobalState";

export default function Team(props) {
  const { setIsDistracting, setNewDay } = props;
  const [state, dispatch] = useGlobalState();

  return (
    <div className="people-buttons-block">
      <h2 className="hello">Who will you send outside ro catch attention of police?</h2>
      {state.people.map(person => (
        <button
          value={person}
          onClick={() => {
            dispatch({ type: "EDIT_PEOPLE", payload: person });
            setNewDay(true);
            setIsDistracting(false);
          }}
        >
          <img
            id={person}
            className="people-img"
            src="https://res.cloudinary.com/teepublic/image/private/s--GMnUN_vi--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1561482741/production/designs/5160588_0.jpg"
          />
          <p className="person-name">{person}</p>
        </button>
      ))}
    </div>
  );
}
