import React from 'react';
import Comment from './comment';
import * as _ from 'lodash'

export default class CommentList extends React.Component {
    render() {
        let commentNodes = _.map(this.props.data, comment => {
          return (
            <Comment author={comment.author} key={comment.id}>
              {comment.text}
            </Comment>
          );
        });
        return (
          <div className="commentList">
            {commentNodes}
          </div>
        );
    }
};
