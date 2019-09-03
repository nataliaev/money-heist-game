import React from "react";
import { useGlobalState } from "../useGlobalState";
import Stats from "./Stats";

export default function MessageContainer(props) {
  const [state, dispatch] = useGlobalState();

  return (
    <div>
      <Stats state={state} />
    </div>
  );
}
