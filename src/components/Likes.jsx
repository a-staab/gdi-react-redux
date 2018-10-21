// Exercise 2: Set It Up
	// write a functional component
	// make it a div with a class name of Likes
	// write a span and a button element inside
	// export default the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: Class It Up
// Turn Likes from a functional to a class component.
	 // handle import/inheritance
	 // add a render method
	 // change props from function argument to object attribute

// Exercise 5: State It
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
	 // add a constructor with initial state
	 // add a button to the rendered JSX with an onClick attribute
	 // add a method to handle the click/ change the state
	 // hook up the button text to the state
// BONUS: Create a likes counter
	 // take in a prop for the number of likes
	 // increase or decrease the likes based on whether button click is like/ unlike
	 // hint: take the total likes as a prop, and convert it to state

import React, { Component } from 'react';

class Likes extends Component {
	constructor (props) {
		super(props)
		this.state = {
			notLiked: true
		}
	}
	render(){
		const { likes } = this.props;
		return (
		<div>
			Likes: <span>{ likes }</span>
			<button onClick={(e) =>
				this.setState({ notLiked: !this.state.notLiked})
			}>
				{ this.state.notLiked
					? "Not liked"
					: "Liked"
				}
			</button>
		</div>
		);
	}
}

// <LikesCounter likesCount={likes} />
// class LikesCounter extends Component {
// 		constructor (props) {
// 			super(props)
// 			this.state = {
// 				numLikes: props.likes
// 			}
// 		}
// 		render(){
// 		return(
// 			<div>
// 				Likes: <span>{ this.state.numLikes }</span>
// 			</div>
// 			)
// 	}
//}

export default Likes;