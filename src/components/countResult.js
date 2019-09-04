export default function countResult(risk, dispatch) {
  if (risk > 60 && risk < 80) {
    if (Math.random() < risk / 150) {
      dispatch({ type: "SET_RESULT", payload: false });
    }
  } else if (risk > 60) {
    if (Math.random() < risk / 100) {
      dispatch({ type: "SET_RESULT", payload: false });
    }
  }
}
