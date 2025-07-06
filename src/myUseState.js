import { useReducer } from "react";

function myUseState(initialValue) {
  const [state, dispatch] = useReducer(
    (prevState, newState) => newState,
    initialValue
  );

  function setState(newValue) {
    let updatedValue;
    if (typeof newValue === "function") {
      //callback is being passed in state updater functioon
      updatedValue = newValue(state);
    } else {
      updatedValue = newValue;
    }

    const isStateValueUpdated = !Object.is(state, updatedValue);
    if (isStateValueUpdated) {
      dispatch(updatedValue);
    }
  }

  return [state, setState];
}

export default myUseState;
