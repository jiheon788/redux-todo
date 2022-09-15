import React from 'react';
import ReactDOM from 'react-dom/client';

import store from "./redux/store";

import App from "./App"
import ReduxContext from './contexts/ReduxContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
      <App/>
    </ReduxContext.Provider>
  </React.StrictMode>
);

