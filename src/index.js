import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const formReducer = (state={}, action) => {
	let newState = {...state};
	if(action.type === "UPDATE_FORM"){
		// payload must be a feedback field object
		// eg: {feelings: 4}
		newState = {...newState, ...action.payload};
	} else if(action.type === "RESET_FORM"){
		newState = {};
	}
	return newState;
}

const feedbackReducer = (state=[], action) => {
	let newState = [...state];
	if(action.type === "UPDATE_FEEDBACK"){
		// payload must be an array of feedback objects from the server
		// eg: [feedbackObj1, feedbackObj2, ...]
		newState = action.payload;
	}
	return newState;
}

const storeInstance = createStore(
	combineReducers({
		form: formReducer,
		feedback: feedbackReducer,
	})
)

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
