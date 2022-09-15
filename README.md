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
