// Exercise 2: Set It Up
	// write a functional component
	// make it a div with class name FeedList
	// import FeedItem and include it inside the div
	// export default the component!

// Exercise 3: Prop It Up
	// FeedList should accept props as params
	// destructure photos from props
	// iterate over the data and map each photo data to a FeedItem

import React from 'react';
import FeedItem from './FeedItem.jsx'

const FeedList = (props) => {
	const { photos } = props
	const photosData = photos.map((photo, i) =>
		<FeedItem key={i} photoInfo={photo}/>
	)
	return (
		<div className="FeedList">
			{photosData}
		</div>
	)
}

export default FeedList