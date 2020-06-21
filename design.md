## Data Structure
[x] - Redux store
	[x] - formReducer state={}
		[x] - state.feelings
		[x] - state.understanding
		[x] - state.support
		[x] - state.comments
		[x] - action.type="UPDATE_FORM"
			[x] - action.payload.feedback
		[x] - action.type="RESET_FORM"
	[x] - feedbackReducer state=[] list of feedback objects from server
		[x] - action.type="UPDATE_FEEDBACK"
			[x] - action.payload.newFeedbackList

## Routing

[ ] - React-Router
	[x] - Router
		[x] - Switch
			[x] - Route "/" (LandingPage)
			[x] - Route "/1" (Feelings)
			[x] - Route "/2" (Understanding)
			[x] - Route "/3" (Support)
			[x] - Route "/4" (Comments)
			[x] - Route "/5" (Review)
			[x] - Route "/thank-you" (ThankYou)
			[x] - Route "/admin-panel" (AdminPanel)

## Components

[x] - LandingPage
	[x] - Add Feedback button
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



## Stretch Goals
[ ] - Update scores
	[ ] - add back button to feedback components
[ ] - Material.ui
	[ ] - NumberFeedback conversion
	[ ] - TextFeedback conversion
	[ ] - ReviewFeedback conversion
	[ ] - ThankYou feedback conversion
[ ] - AdminPanel Component
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