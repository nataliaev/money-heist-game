export default function countResult(
  risk,
  dispatch,
  setIsOver,
  setNewDay,
  setNewMessage,
  setIsDistracting
) {
  if (risk > 60 && risk < 80) {
    if (Math.random() < risk / 150) {
      dispatch({ type: "SET_RESULT", payload: false });
      setIsOver(true);
    } else {
      setNewDay(true);
      setNewMessage(false);
      setIsDistracting(false)
    }
  } else if (risk > 60) {
    if (Math.random() < risk / 100) {
      dispatch({ type: "SET_RESULT", payload: false });
      setIsOver(true);
    } else {
      setNewDay(true);
      setNewMessage(false);
      setIsDistracting(false)
    }
  }
}
