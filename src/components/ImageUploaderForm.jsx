// Exercise 2: Set It Up
	// write a functional component
	// make it a form element with class name ImageUploaderForm
	// write one input element and button element inside
	// export default the component!

// Exercise 4: Class It Up
// Turn Likes from a functional to a class component.
	 // handle import/inheritance
	 // add a render method
	 // change props from function argument to object attribute

// Exercise 6: Get InFormation
// Rewrite this component to accept user input
// When the user inputs a url, the component should log it to the console
	 // create internal state, to hold the user inputted value
	 // render a form element containing:
			// input element with a onChange attribute
			// button with an onSubmit() attribute
	 // write a handleChange() function to store the input
	 // write a handleSubmit() function to print to the console

// Exercise 6: BONUS
// Goal: make this form actually upload an image to the feed!
// When a user inputs a full image url, it should update the
// feed to include the image as a FeedItem!
    // All the data for the photos are located in HomePage -
    // so how do you get data from the user input of the ImageUploaderForm
    // to the HomePage component and update the photo data?
    // If photos data on the homepage is changing, then you will need to set it state.
    // And then, in Homepage, you will need to create a function called
    // handleAddPhoto that updates photos state by accepting a url and creating
    // a new object in photos data.
    // Then pass in that function as props to ImageUploaderForm
    // and when the user submits, call that function with the user submitted url.

import React, { Component } from 'react';

class ImageUploaderForm extends Component {
	constructor (props) {
		super(props)
		this.state = {
			newUrl: ""
		}
	}

	handleChange = (evt) => {
		this.setState({ newUrl: evt.target.value });
	}
	
	handleClick = (evt) => {
		evt.preventDefault();
		this.props.handleAddPhoto(this.state.newUrl);
	}

	render(){
		const { handleAddPhoto } = this.props;
		return (
		<form className="ImageUploaderForm">
			<input type="text" value={this.state.newUrl} onChange={this.handleChange}></input>
			<button onClick={this.handleClick}></button>
		</form>
		);
	}
}

export default ImageUploaderForm;