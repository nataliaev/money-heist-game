import React from "react";

export default function Team(props) {
  const { people } = props;

  return (
    <div className="people">
      {people.map(person => (
        <div key={person.name}>
          <img
            className="people-img"
            src={person.url}
            alt="team"
          />
        </div>
      ))}
    </div>
  );
}
