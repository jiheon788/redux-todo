import { applyMiddleware, createStore } from "redux";
import todoApp from "./modules/reducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
// import createBrowserHistory from 'history'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
thunk.withExtraArgument({history})

const store = createStore(
  todoApp, 
  composeWithDevTools(applyMiddleware(thunk, promise))
);

export default store