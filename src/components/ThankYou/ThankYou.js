import React from 'react';
import { withRouter } from 'react-router';

class ThankYou extends React.Component {
	// startFeedback navigates to the first page of the feedback form. must be kept as an arrow func
	startOver = () => {
		this.props.history.push('/');
	}

	render() {
		return (
			<div className="thank-you-page">
				<h2>Thank you for submitting your feedback!</h2>
				<button type="button" onClick={this.startOver}>Start Over</button>
			</div>
		) // end return
	} // end render
} // end ThankYou

export default withRouter(ThankYou);