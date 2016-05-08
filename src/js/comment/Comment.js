/*
* @Author: wshudong
* @Date:   2016-05-08 17:10:58
* @Last Modified by:   wshudong
* @Last Modified time: 2016-05-08 17:24:24
*/

'use strict';
import React from 'react';

class Comment extends React.Component {
	render() {
		return (
			<div className="comment">
				<div className="content">
					<span className="author">{this.props.author} </span>
					<div className="metadata">
						<span className="date"> {this.props.date}</span>
					</div>
				<div className="text">{this.props.children} </div>
				</div>
			</div>
		);
	}
}

export { Comment as default };