import React from 'react';
import { withRouter } from 'react-router';
import { Grid, Button } from '@material-ui/core';

class ThankYou extends React.Component {
	// startFeedback navigates to the first page of the feedback form. must be kept as an arrow func
	startOver = () => {
		this.props.history.push('/');
	}

	render() {
		return (
			<Grid item xs={6} className="thank-you-page">
				<h2>Thank you for submitting your feedback!</h2>
				<Button variant="contained" color="primary" type="button" onClick={this.startOver}>Start Over</Button>
			</Grid>
		) // end return
	} // end render
} // end ThankYou

export default withRouter(ThankYou);