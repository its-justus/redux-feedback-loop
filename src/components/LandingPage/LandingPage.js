import React from "react";
import { withRouter } from "react-router";

class LandingPage extends React.Component {
  // startFeedback navigates to the first page of the feedback form. must be kept as an arrow func
  startFeedback = () => {
    this.props.history.push("/feedback/1");
  };

  render() {
    return (
      <div className="landing-page">
        <h2>Welcome to the Feedback App!</h2>
        <button type="button" onClick={this.startFeedback}>
          Add Feedback
        </button>
      </div>
    ); // end return
  } // end render
} // end LandingPage

export default withRouter(LandingPage);
