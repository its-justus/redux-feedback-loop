## Components

[ ] - NumberFeedback
	[ ] - fieldName
	[ ] - sequenceNumber
	[ ] - question
	[ ] - response (number)
		[ ] - label
		[ ] - validation
	[ ] - nextButton
[ ] - TextFeedback
	[ ] - fieldName
	[ ] - sequenceNumber
	[ ] - question
	[ ] - response (text)
		[ ] - label
		[ ] - validation
	[ ] - nextButton
[ ] - ReviewFeedback
	[ ] - sequenceNumber
	[ ] - map feedback object to text
		[ ] - fieldName
		[ ] - response
	[ ] - submit button
[ ] - ThankYou
	[ ] - Thank you message
	[ ] - leave new feedback button

## Data Structure
[ ] - Redux store
	[ ] - formReducer state={}
		[ ] - state.feelings
		[ ] - state.understanding
		[ ] - state.support
		[ ] - state.comments
	[ ] - action.type="UPDATE_FORM"
		[ ] - action.payload.feedback
	[ ] - action.type="RESET_FORM"

## Stretch Goals
[ ] - Update scores
	[ ] - add back button to feedback components
[ ] - Material.ui
	[ ] - NumberFeedback conversion
	[ ] - TextFeedback conversion
	[ ] - ReviewFeedback conversion
	[ ] - ThankYou feedback conversion
[ ] - AdminDisplay Component
	[ ] - add feedbackReducer to Redux
	[ ] - pull data from server and store in reducer
	[ ] - Title
	[ ] - Table (M.ui)
		[ ] - generate from header from data
		[ ] - generate rows and data
		[ ] - delete button
			[ ] - confirm delete before axios request
			[ ] - axios delete request
			[ ] - refresh data
		[ ] - flag for review
			[ ] - toggle "flagged" field
[ ] - Deploy to Heroku