/*
* @Author: wshudong
* @Date:   2016-05-07 08:51:28
* @Last Modified by:   wshudong
* @Last Modified time: 2016-05-08 19:26:22
*/

'use strict';

import React from 'react';
import $ from 'jquery';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data:[]};
        this.getComments();
        // setInterval(() => this.getComments(),5000);
    }

    handleCommentSubmit(comment) {
        let comments = this.state.data,
            newComments = comments.concat(comment);
        // console.log(comments);

        this.setState({data: newComments});
    }

    getComments(){
        $.ajax({
            url:this.props.url,
            type:"get",
            dataType: 'json',
            cache: false,
            success:comments => {
                this.setState({data: comments});
            },
            error: (xhr, status, error) => {
                console.log(error);
            }

        });
    }

    render() {
        return (
            <div className="ui comments">
                <h1> 评论 </h1>
                <div className="ui divider"></div>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
            </div>
        );
    }
}

export {CommentBox as default};
