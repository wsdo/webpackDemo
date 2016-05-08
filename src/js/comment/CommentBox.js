/*
* @Author: wshudong
* @Date:   2016-05-07 08:51:28
* @Last Modified by:   wshudong
* @Last Modified time: 2016-05-08 18:22:44
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
        $.ajax({
            url:this.props.url,
            type:"get",
            dataType: 'json',
            cache: false,
            success:comments => {
                this.setState({data: comments});
                console.log(comments);
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
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    }
}

export {CommentBox as default};
