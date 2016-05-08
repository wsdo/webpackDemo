'use strict';
import React from 'react'
// import 'semantic-ui/semantic.min.css!';
// require('../../js/lib/semantic/dist/semantic.min.css');
// import semantic from 'semantic-ui-css'

import CommentBox from './comment/CommentBox';
import ReactDOM from 'react-dom';
// import {render} from 'react-dom';

ReactDOM.render (
    <CommentBox url="app/comments.json"/>,
    document.getElementById('app')
);
