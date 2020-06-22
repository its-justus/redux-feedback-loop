import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Grid, Button, Slider } from "@material-ui/core";

class NumberFeedback extends React.Component {
  /* Required Props
		- fieldName
		- sequenceNumber
		- question
	*/
	constructor(props) {
		super(props);
		this.props = props;
		this.marks = [];
		for (let i = 1; i <= 5; i++) {
			this.marks.push({ value: i, label: i });
		}
	}

	// componentDidUpdate and componentWillUnmount are required for this particular feedback
	// form due to redux storing being tied to the slider onChange function which is not triggered
	// in the case a user does not move the slider at all. 

	// componentDidUpdate handles cases where the user did not change the slider at all
	// and we moved to another NumberFeedback page. Navigating between two instances
	// of a class does NOT trigger componentWillUnmount, so we need to use componentDidUpdate
	componentDidUpdate = (prevProps, prevState) => {
		// if the previous fieldname and the current field name don't match AND we didn't store our value in Redux
		if(prevProps.fieldName !== this.props.fieldName && !prevProps.form[prevProps.fieldName]){
			// store the default value in redux
			const { fieldName, sequenceNumber } = prevProps;
			this.props.dispatch({
				type: "UPDATE_FORM",
				payload: { [fieldName]: { value: 3, sequence: sequenceNumber } },
			});
		}
	}

	// componentWillUnmount handles cases where the user did not change the slider and we are
	// navigating to a different component. Navigating from one component to another does
	// not trigger componentDidUpdate so we need to use this to send a default value to Redux
	componentWillUnmount = () => {
		// if there is no object in form with the current field name
		if(!this.props.form[this.props.fieldName]){
			// update the Redux store with the default value
			const { fieldName, sequenceNumber } = this.props;
			this.props.dispatch({
				type: "UPDATE_FORM",
				payload: { [fieldName]: { value: 3, sequence: sequenceNumber } },
			});
		}
	}

  // we keep our state entirely in the redux store. more overhead processing but far simpler
  handleChange = (event, value) => {
    const { fieldName, sequenceNumber } = this.props;
    //let value = event.target.value;
    console.log(value);

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

  // navigate to the previous page
  back = (event) => {
    event.preventDefault();
    // if we are the first page in the sequence, go back to the landing page
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
    const fieldValue = form[fieldName]?.value || 3;

    return (
      <Grid item xs={6} className="number-feedback">
        <Grid item xs={12}>
          <h2>{question}</h2>
        </Grid>
        <Grid item xs={12}>
          <p>Please select a number</p>
        </Grid>
        <form onSubmit={this.next}>
          <Grid item xs={12}>
            <Slider
              value={fieldValue}
              onChangeCommitted={this.handleChange}
              step={1}
              min={1}
              max={5}
              marks={this.marks}
            />
          </Grid>
          <br />
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
} // end NumberFeedback

const mapStateToProps = (state) => {
  return { form: state.form };
};

export default withRouter(connect(mapStateToProps)(NumberFeedback));
