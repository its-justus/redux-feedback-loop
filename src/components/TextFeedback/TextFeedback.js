import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

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
      <div className="number-feedback">
        <h2>{question}</h2>
        <form onSubmit={this.next}>
          <input
            required
            onChange={this.handleChange}
            value={fieldValue}
            type="text"
          />
          <button type="button" onClick={this.back}>
            Previous
          </button>
          <button type="submit">Next</button>
        </form>
      </div>
    ); // end return
  } // end render
} // end TextFeedback

const mapStateToProps = (state) => {
  return { form: state.form };
};

export default withRouter(connect(mapStateToProps)(TextFeedback));
