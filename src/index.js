import React from "react";
import ReactDOM from "react-dom";

import Root from "./containers/Root";

import configureStore from "./redux/configureStore";
const { store, actions } = configureStore();

ReactDOM.render(
    <Root store={store} actions={actions} />,
    document.getElementById("root")
);
