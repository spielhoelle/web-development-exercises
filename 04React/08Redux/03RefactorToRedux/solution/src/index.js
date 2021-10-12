import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

import "./sass/style.scss";

const store = createStore(
  reducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#main"));
