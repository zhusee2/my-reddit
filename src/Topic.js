import * as React from 'react';
import * as PropTypes from 'prop-types';

import './styles/Topic.css';

function Topic({ topic, onUpvote, onDownvote }) {
  return (
    <li className="topic-record">
        <div className="topic-record-body">
        {topic.content}
      </div>
      <div className="topic-record-votes">
        {topic.votes}
      </div>
      <div className="topic-record-actions">
        <button
          type="button"
          className="btn-upvote"
          title="Upvote"
          onClick={onUpvote}>
          +
        </button>
        <br />
        <button
          type="button"
          className="btn-downvote"
          title="Downvote"
          onClick={onDownvote}>
          -
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
