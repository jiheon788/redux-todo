# Redux 연습
```
npm i redux
```
## 1. Action
```js
const actionCreator = (...args) => {
  return action
}
```
* Action Creator : 액션을 생성하는 함수
  - 함수를 통해 액션을 생성해서. 액션 객체를 리턴
  - 액션 생성자를 통해 액션을 만들어 낸다
  - 만들어낸 액션 객체를 리덕스 스토어에 보낸다
  - 리덕스 스토어가 액션 객체를 받으면 스토어의 상태 값이 변경
  - 변경된 상태 값에 의해 상태를 이용하고 있는 컴포넌트 변경
  - 스토어에 보낸는 일종의 인풋

## 2. Reducer
```js
const reducer = (prevState, action) => {
  return newState
}
```
 * 액션을 주면, 그 액션이 적용되어 달라진 결과를 만들어 줌
 * 리듀서를 통해 스테이트의 변화를 리덕스가 인지
 * 인자로 들어오는 prevState와 반환값 newState는 다른 참조를 가져야함

## 3. store
```js
store.getState()
// 스토어의 현재상태를 가져옴

store.dispatch(action)
store.dispatch(actionCreator())
//스토어의 상태를 변경

const unsubscribe = store.subscribe(()=>{})
// 스토어의 변경이 생겼을 때 함수실행 (like. useEffect)
// unsubscribe() 를 하면 제거

store.replaceReducer(otherReducer)
// 다른 리듀서로 변경 , 잘은 안씀
```

# react-redux
```
npm i react-redux
```
* Provider 컴포넌트 제공
* connect 함수를 통해 컨테이너 만듬
 > 컨테이너 : 스토어의 state & dispatch(action)을 연결한 컴포넌트에 props로 넣어주는 역할

#### 그렇다면 필요한 것은 ?
* 어떤 state를 어떤 props에 연결할 것인지 정의
* 어떤 디스패치(액션)을 어떤 프롭스에 연결할 것인지에 대한 정의
* 그 프롭스를 보낼 컴포넌트를 정의

# Redux Middleware
+ 미들웨어가 디스패치의 앞뒤에 코드 추가할 수 있게 해줌
+ 미들웨어가 여러개면 순차실행
+ 두 가지 단계있음
  1. 스토어 만들 때, 미들웨어설정부분
  > {createStore, applyMiddleware} from redux
  2. 디스패치 호출시, 실제로 미들웨어 통과 부분
+ 디스패치 메소드를 통해 스토어로 가고잇는 액션을 가로채는 코드

## redux-thunk
+ 리덕스 미들웨어
+ 리덕스에서 비동기 처리를 위한 라이브러리
+ 액션 생성자를 활용하여 비동기 처리
+ 액션 생성자가 액션리턴x, 함수를 리턴함
+ 함수를 리턴할때만 반응함
