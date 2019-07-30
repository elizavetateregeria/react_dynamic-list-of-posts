import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <div className="post_comment-list">
      <p>Comments: </p>
      {comments.map(comment => (
        <Comment
          comment={comment}
          key={comment.id}
        />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;