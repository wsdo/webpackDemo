'use strict';
import React from 'react'
// import 'semantic-ui/semantic.min.css!';
// require('../../js/lib/semantic/dist/semantic.min.css');
// import semantic from 'semantic-ui-css'

import CommentBox from './comment/CommentBox';
import ReactDOM from 'react-dom';
// import {render} from 'react-dom';

var comments = [
	{"author": "王树东","date": "5 分钟前", "text": "天气不错啊！"},
	{"author": "小雪", "date": "3 分钟前", "text": "出去玩啊！"}
];
ReactDOM.render (
    <CommentBox data={comments} />,
    document.getElementById('app')
);
