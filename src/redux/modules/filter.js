// 액션 타입 정의
export const SHOW_ALL = 'redux-start/filter/SHOW_ALL';
export const SHOW_COMPLETE = 'redux-start/filter/SHOW_COMPLETE';

// 액션 생성 함수
export const showAll = ()=>{
  return {type: SHOW_ALL}
}

export const showComplete = ()=>{
  return {type: SHOW_COMPLETE}
}

// 초기값
const initState = 'ALL';

//리듀서
const reducer = (prevState = initState, action) => {
  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE"
  }

  if (action.type === SHOW_ALL) {
    return "ALL"
  }
  // 아무 변화x
  return prevState; 
}

export default reducer