import React from "react";
import ButtonNewGame from "./ButtonNewGame";

export default function ResultsTable(props) {
  const { money, daysInside } = props.state;

  const {
    setIsStarted,
    setIsOver,
    setNewMessage,
    setIsDistracting,
    dispatch,
    tableMoney
  } = props;

  return (
    <div className="rules-container">
      <h2 className="hello">Your results: {money}€ / {daysInside} days inside</h2>
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Money</th>
              <th>Days</th>
            </tr>
            {tableMoney === false
              ? console.log("Loading")
              : tableMoney.map(player => (
                  <tr key={player.id}>
                    <td>{player.name}</td>
                    <td>{player.money}</td>
                    <td>{player.days}</td>
                  </tr>
                ))}
          </tbody>
        </table>
        <img className="table-img" src="https://www.thetvdb.com/banners/actors/421516.jpg" alt="Professor" />
      </div>
      <ButtonNewGame
        dispatch={dispatch}
        setIsStarted={setIsStarted}
        setIsOver={setIsOver}
        setNewMessage={setNewMessage}
        setIsDistracting={setIsDistracting}
      />
    </div>
  );
}
