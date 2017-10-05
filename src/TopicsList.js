import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Topic from './Topic';

import { upvoteTopic, downvoteTopic } from './actions';
import { top20TopicsSelector, topicPropTypes } from './reducer';

function TopicsList({ topics, onUpvote, onDownvote }) {
  const topicViews = topics.map((topic) => (
    <Topic
      key={topic.id}
      topic={topic}
      onUpvote={() => onUpvote(topic.id)}
      onDownvote={() => onDownvote(topic.id)} />
  ));


  return(
    <ul className="topics-list">
      {topicViews}
    </ul>
  );
}

TopicsList.propTypes = {
  topics: PropTypes.arrayOf(topicPropTypes),
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    topics: top20TopicsSelector(state),
  };
}

function mapDispatchToProps(dispacth) {
  return {
    onUpvote: topicId => dispacth(upvoteTopic(topicId)),
    onDownvote: topicId => dispacth(downvoteTopic(topicId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);
