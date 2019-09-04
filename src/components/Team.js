import React from "react";

export default function Team(props) {
  const { people } = props;

  return (
    <div className="people">
      {people.map(person => (
        <div key={person}>
          <img
            className="people-img"
            src="https://res.cloudinary.com/teepublic/image/private/s--GMnUN_vi--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1561482741/production/designs/5160588_0.jpg"
            alt="team"
          />
          <p className="person-name">{person}</p>
        </div>
      ))}
    </div>
  );
}
