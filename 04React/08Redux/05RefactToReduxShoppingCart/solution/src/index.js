import "bootstrap";
import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
