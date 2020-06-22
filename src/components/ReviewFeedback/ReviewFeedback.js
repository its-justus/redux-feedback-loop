import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import axios from "axios";
import { Grid, Button, List, ListItem, ListItemText } from "@material-ui/core";

class ReviewFeedback extends React.Component {
  // submit feedback to the server and navigate to the thank you page upon success
  submitFeedback = () => {
    // construct the data object for our axios request
    const data = {};
    const { form } = this.props;
    for (let key in form) {
      data[key] = form[key].value;
    }

    // axios request
    axios
      .post("/api/feedback", data)
      .then((response) => {
        // reset form
        this.props.dispatch({ type: "RESET_FORM" });
        // navigate back to the thank you page
        this.props.history.push("/thank-you");
      })
      .catch((error) => {
        console.log(error);
        alert("Server error, please try again later.");
      });
  };

  // navigate to the previous page
  back = (event) => {
    event.preventDefault();
    // if we are the first page in the sequence, go back to root
    if (this.props.sequenceNumber === 1) {
      this.props.history.push(`/`);
    } else {
      // otherwise go back one in the sequence
      this.props.history.push(
        `/feedback/${Number(this.props.sequenceNumber) - 1}`
      );
    }
  };

  render() {
    // pull our form data from props
    const { form } = this.props;

    // generate an array from our feedback object
    let feedbackArray = [];
    for (let key in form) {
      const seq = form[key].sequence;
      const val = form[key].value;
      feedbackArray.push({ field: key, value: val, sequence: seq });
    }
    // sort by sequence just in case things got mixed up somehow
    feedbackArray.sort((a, b) => a.sequence - b.sequence);

    return (
      <Grid item xs={6} className="number-feedback">
        <Grid item xs={12}>
          <h2>Review Your Feedback</h2>
        </Grid>
        <Grid item xs={12}>
					<List>
            {feedbackArray.map((field, index) => {
              return (
                <ListItem key={`rli-${index}`}>
                  <ListItemText>
                    {field.field.charAt(0).toUpperCase() + field.field.slice(1)}
                    : {field.value}
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={12}>
          <Button type="button" variant="contained" color="primary" onClick={this.submitFeedback}>
            Submit
          </Button>
        </Grid>
      </Grid>
    ); // end return
  } // end render
} // end ReviewFeedback

const mapStateToProps = (state) => {
  console.log("ReviewFeedback.mapStateToProps()", state);
  return { form: state.form };
};

export default withRouter(connect(mapStateToProps)(ReviewFeedback));
