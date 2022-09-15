import { useContext, useEffect, useState } from "react";
import ReduxContext from "../contexts/ReduxContext";

const useReduxDispatch = () => {
  const store = useContext(ReduxContext)
  return store.dispatch
}

export default useReduxDispatch
