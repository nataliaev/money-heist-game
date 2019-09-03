import React from "react";
import { connect } from "react-redux";
import { addMoney, addDayOnVault } from "../actions";
import NewDay from "./NewDay";

function NewDayContainer(props) {
  const openingVault = () => {
    return null
  }

  return (
    <div>
      {/* <Team /> */}
      {/* <Stats /> */}
      <NewDay
        addMoney={addMoney}
        addDayOnVault={addDayOnVault}
        setNewDay={props.setNewDay}
        setIsOver={props.setIsOver}
        setNewMessage={props.setNewMessage}
        openingVault={openingVault}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  money: state.money,
  people: state.people,
  risk: state.risk,
  daysInside: state.daysInside,
  daysOnVault: state.daysOnVault
});

export default connect(
  mapStateToProps,
  { addMoney, addDayOnVault }
)(NewDayContainer);
