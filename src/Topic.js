import * as React from 'react';
import * as PropTypes from 'prop-types';

function Topic({ topic, onUpvote, onDownvote }) {
  return (
    <li className="topic-record">
      <div className="topic-record-votes">
        {topic.votes}
      </div>
      <div className="topic-record-body">
        {topic.content}
      </div>
      <div className="topic-record-actions">
        <button type="button" onClick={onUpvote}>
          ^ upvote
        </button>
        <button type="button" onClick={onDownvote}>
          v downvote
        </button>
      </div>
    </li>
  );
}

Topic.propTypes = {
  topic: PropTypes.object,
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired,
};

export default Topic;
