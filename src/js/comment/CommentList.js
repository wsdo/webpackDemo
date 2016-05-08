'use strict'

import React from 'react';
import Comment from './Comment';
class CommentList extends React.Component {
	render() {
		// let commentNodes = this.props.data;
		let commentNodes = this.props.data.map(comment => {
			return (
				<Comment author={comment.author} date={comment.date} >
					{comment.text}
				</Comment>
			)
		});
		console.log(this.props.data);
		return (
			<div> 
				{commentNodes}
			</div>
		);	
	}
}

export { CommentList as default };