import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
				<Router>
					<Switch>
						<Route exact path="/">
							<LandingPage />
						</Route>
						<Route exact path="/feedback/1">
							{/* Feelings page */}
						</Route>
						<Route exact path="/feedback/2">
							{/* Understanding page */}
						</Route>
						<Route exact path="/feedback/3">
							{/* Support page */}
						</Route>
						<Route exact path="/feedback/4">
							{/* Comments page */}
						</Route>
						<Route exact path="/feedback/5">
							{/* Review page */}
						</Route>
						<Route exact path="/feedback/thank-you">
							{/* Thank you page */}
						</Route>
						<Route exact path="/admin-panel">
							{/* admin panel page */}
						</Route>
					</Switch>
				</Router>
        <br/>
      </div>
    );
  }
}

export default App;
