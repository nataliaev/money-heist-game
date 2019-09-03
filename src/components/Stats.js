import React from "react";

export default function Stats(props) {
  const { money, daysInside, risk } = props.state;

  return (
    <div>
      <h2>Money: {money}</h2>
      <h2>Days inside: {daysInside}</h2>
      <h2>Risk level: {risk}</h2>
    </div>
  );
}
