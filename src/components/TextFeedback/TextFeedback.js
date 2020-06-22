import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Grid, Button, TextField } from "@material-ui/core";

class TextFeedback extends React.Component {
  /* Required Props
		- fieldName
		- sequenceNumber
		- question
	*/

  // handle changes to input, storing them in the Redux store
  handleChange = (event) => {
    const { fieldName, sequenceNumber } = this.props;
    let value = event.target.value;

    this.props.dispatch({
      type: "UPDATE_FORM",
      payload: { [fieldName]: { value: value, sequence: sequenceNumber } },
    });
  };

  // navigate to the next page in the sequence
  next = (event) => {
    event.preventDefault();
    this.props.history.push(
      `/feedback/${Number(this.props.sequenceNumber) + 1}`
    );
  };

  // navigate to the previous page in the sequence
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
    const { fieldName, question, form } = this.props;
    const fieldValue = form[fieldName]?.value || "";

    return (
      <Grid item xs={6} className="number-feedback">
				<Grid item xs={12}>
        <h2>{question}</h2>
				</Grid>
        <form onSubmit={this.next}>
				<Grid item xs={12}>
          <TextField
						multiline
						fullWidth
						rows={4}
						variant="filled"
						required
						label={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
            onChange={this.handleChange}
            value={fieldValue}
            type="text"
          />
					</Grid>
					<br/>
          <Grid container justify="space-evenly" spacing={2}>
            <Grid item xs={3}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={this.back}
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button type="submit" variant="contained" color="primary">
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    ); // end return
  } // end render
} // end TextFeedback

const mapStateToProps = (state) => {
  return { form: state.form };
};

export default withRouter(connect(mapStateToProps)(TextFeedback));
