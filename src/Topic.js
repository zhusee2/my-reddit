import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Topic({ topic }) {
  return (
    <li className="topic-record">
      <div className="topic-record-votes">
        {topic.votes}
      </div>
      <div className="topic-record-body">
        {topic.content}
      </div>
      <div className="topic-record-actions">
        <button type="button">
          v downvote
        </button>
        <button type="button">
          ^ upvote
        </button>
      </div>
    </li>
  );
}

export default connect()(Topic);
