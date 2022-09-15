import { useContext, useEffect, useState } from "react";
import ReduxContext from "../contexts/ReduxContext";

const useReduxState = ()=>{
  const store = useContext(ReduxContext)
  const [state, setState] = useState(store.getState())

  useEffect(()=>{
    const unsubscribe = store.subscribe(()=>{
      setState(store.getState())
    })
    return ()=>{
      unsubscribe();
    }
  },[store])

  return state;
}

export default useReduxState