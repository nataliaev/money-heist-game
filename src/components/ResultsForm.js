import React from "react";

export default function ResultsFormContainer(props) {
  const {onSubmit, onChange, isName, hideForm} = props

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input-form"
          type="text"
          name="name"
          placeholder="name"
          value={isName}
          onChange={onChange}
        />
        <input className="input-button" type="submit" value="Submit" />
        <button className="call-your-team-button" onClick={hideForm}>
          Cancel
        </button>
      </form>
    </div>
  );
}
