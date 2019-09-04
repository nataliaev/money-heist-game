import React from "react";

export default function Stats(props) {
  const { money, daysInside, risk } = props.state;

  const riskShown = risk => {
    if (risk > 100) {
      return 100;
    } else if (risk < 0) {
      return 0;
    } else {
      return risk
    }
  }

  return (
    <div className="stats-block">
      <h2>Money: {money}€</h2>
      <h2>Days inside: {daysInside}</h2>
      <h2>Risk level: {riskShown(risk)}%</h2>
    </div>
  );
}
