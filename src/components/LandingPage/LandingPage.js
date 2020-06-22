import React from "react";
import { withRouter } from "react-router";
import {Button, Grid} from "@material-ui/core";

class LandingPage extends React.Component {
  // startFeedback navigates to the first page of the feedback form. must be kept as an arrow func
  startFeedback = () => {
    this.props.history.push("/feedback/1");
  };

  render() {
    return (
      <Grid item xs={12} className="landing-page">
        <h2>Welcome to the Feedback App!</h2>
        <Button variant="contained" color="primary" type="button" onClick={this.startFeedback}>
          Add Feedback
        </Button>
      </Grid>
    ); // end return
  } // end render
} // end LandingPage

export default withRouter(LandingPage);
