'use strict'

import React from 'react';
import Comment from './Comment';
class CommentList extends React.Component {
	render() {

		let commentNodes = this.props.data.map(comment => {
			return (
				<Comment author={comment.author} date={cmment.date}>
					{comment.text}
				</Comment>
			)
		});
		return (
			<div> 
				评论列表 
				<Comment author="王树东" date="5 分钟前">  天气不错啊！ </Comment> 
				<Comment author="王梅蕊" date="10 分钟前">  出去玩啊！ </Comment> 
			 </div>
			);	
	}
}

export { CommentList as default };