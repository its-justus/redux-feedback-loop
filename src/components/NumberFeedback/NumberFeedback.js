import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class NumberFeedback extends React.Component {
  /* Required Props
		- fieldName
		- sequenceNumber
		- question
	*/

  // we keep our state entirely in the redux store. more overhead processing but far simpler
  handleChange = (event) => {
    const { fieldName, sequenceNumber } = this.props;
    let value = event.target.value;

    // make value an integer and ensure it is between 1 and 5
    value = parseInt(value);
    if (value < 1) {
      value = 1;
    } else if (value > 5) {
      value = 5;
    }
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
    const { fieldName, sequenceNumber, question, form } = this.props;
    const fieldValue = form[fieldName]?.value || "";

    return (
      <div className="number-feedback">
        <h2>{question}</h2>
        <p>Please enter a number between 1 and 5</p>
        <form onSubmit={this.next}>
          <input
            required
            onChange={this.handleChange}
            value={fieldValue}
            type="number"
            min={1}
            max={5}
            step={1}
          />
          <button type="button" onClick={this.back}>
            Previous
          </button>
          <button type="submit">Next</button>
        </form>
      </div>
    ); // end return
  } // end render
} // end NumberFeedback

const mapStateToProps = (state) => {
  return { form: state.form };
};

export default withRouter(connect(mapStateToProps)(NumberFeedback));
