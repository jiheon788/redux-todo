import { SHOW_COMPLETE, SHOW_ALL } from "../action";

const initState = 'ALL';

const filter = (prevState = initState, action) => {
  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE"
  }

  if (action.type === SHOW_ALL) {
    return "ALL"
  }
  // 아무 변화x
  return prevState; 
}

export default filter