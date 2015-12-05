import React from 'react'

import CommentList from './comment-list'



export default class Main extends React.Component {
    render() {
        return <CommentList data={this.props.data} />;
    }
}
