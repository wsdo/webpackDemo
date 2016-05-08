/*
* @Author: wshudong
* @Date:   2016-05-07 08:51:28
* @Last Modified by:   wshudong
* @Last Modified time: 2016-05-08 17:29:07
*/

'use strict';

import React from 'react';
import $ from 'jquery';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
// require("jquery");


    //
        // $.ajax({
        //     url:"http://localhost:8090/index.php?url=itnote.cn",
        //     type:"get",
        //     dataType: 'json',
        //     cache: false,
        //     success:function(data){
        //         // console.log(data);
        //         $("#info").html(data.WordPress.confidence);
        //         console.log(data.WordPress.confidence);
        //     },
        //     error: (xhr,status, error) => {
        //         console.log(error);
        //     }

        // });
// var app = $("#app");

// console.log(app);

// let tem = "111";
// $("#info").text("11111111");
// console.log($("#info"));
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data:[]};
        $.ajax({
            // url:"http://localhost:8090/index.php?url=itnote.cn",
            url:"commonts.json",
            type:"get",
            dataType: 'json',
            cache: false,
            success:comments => {
                this.setState({data: comments});
            },
            error: (xhr,status, error) => {
                console.log(error);
            }

        });
     $("#info").text("11111111");
     console.log($("#info").html("111111"));
    }


    render() {
        return (
            <div className="ui comments">
                <h1> 评论 </h1>
                <div className="ui divider"></div>
                <CommentList date="this.props.data"/>
                <CommentForm />
            </div>
        );
    }
}

export {CommentBox as default};
