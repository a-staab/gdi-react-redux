// Exercise 2: Set It Up
	// write a functional component
	// make it a div with a class name of HomePage
	// import ImageUploaderForm and FeedList
	// include them inside of Homepage
	// export default the Homepage component!

// Exercise 3: Prop It Up
// Need to extract photos from data and then pass it into FeedList

// Exercise 4: Class It Up
// Turn HomePage from a functional to a class component
	// handle import/inheritance
	// add a render method

// Exercise 6: Let’s Get InFormation - BONUS
	// In order to get Homepage render the photo url you have uploaded to ImageUploader form,
	// you will need to create a function called handleAddPhoto that updates photos state by
	// accepting a url and creating a new object in photos state of the homepage component.
    // Then pass in that function as props to ImageUploaderForm
    // and when the user submits, call that function with the user submitted url.

import React, { Component } from 'react';
import data from '../../data.json';
import ImageUploaderForm from "../components/ImageUploaderForm.jsx";
import FeedList from "../components/FeedList.jsx"

const { photos } = data;

class HomePage extends Component {
	constructor (props) {
		super(props);
		this.state = {
			photos: photos
		};
		this.handleAddPhoto = this.handleAddPhoto.bind(this);
	}
	
	handleAddPhoto (url) {
		const newPhotos = this.state.photos;
		newPhotos.push({
							"id": this.state.photos.length + 1,
						 	"title": `User-uploaded img with id ${this.state.photos.length + 1}`,
						 	"url": url,
						 	"likes": 0,
						 	"userLiked": false
						});
		this.setState({photos: newPhotos});
	}

	render(){
		return (
			<div className="HomePage">
				<ImageUploaderForm 
					handleAddPhoto={this.handleAddPhoto}/>
				<FeedList 
					photos={this.state.photos}/> 
			</div>
		);
	}
}

export default HomePage;