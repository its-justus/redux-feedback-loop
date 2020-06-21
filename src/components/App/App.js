import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import NumberFeedback from "../NumberFeedback/NumberFeedback";
import TextFeedback from "../TextFeedback/TextFeedback";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";
import ThankYou from "../ThankYou/ThankYou";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/feedback/1">
              <NumberFeedback
                fieldName="feeling"
                sequenceNumber={1}
                question="How are you feeling today?"
              />
            </Route>
            <Route exact path="/feedback/2">
              <NumberFeedback
                fieldName="understanding"
                sequenceNumber={2}
                question="How well are you understanding the content?"
              />
            </Route>
            <Route exact path="/feedback/3">
              <NumberFeedback
                fieldName="support"
                sequenceNumber={3}
                question="How well are you being supported?"
              />
            </Route>
            <Route exact path="/feedback/4">
              <TextFeedback
                fieldName="comments"
                sequenceNumber={4}
                question="Any comments you would like to add?"
              />
            </Route>
            <Route exact path="/feedback/5">
              <ReviewFeedback />
            </Route>
            S
            <Route exact path="/thank-you">
              <ThankYou />
            </Route>
            <Route exact path="/admin-panel">
              {/* admin panel page */}
            </Route>
          </Switch>
        </Router>
        <br />
      </div>
    );
  }
}

export default App;
