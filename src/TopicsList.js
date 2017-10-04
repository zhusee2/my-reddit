import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

function TopicsList({ topics }) {
  return(
    <ul className="topics-list">
      {topics.map(topic => <li key={topic.id}>{topic.content}</li>)}
    </ul>
  );
}

TopicsList.propTypes = {
  topics: PropTypes.array,
};

function mapStateToProps(state) {
  // Clone the array first to prevent contamination.
  const allTopics = state.topics.slice();
  const sortedTop20Topics = allTopics
    .sort((topicA, topicB) => {
      const votesDiff = topicA.votes - topicB.votes;

      // If the share the same votes, prefer the recent-posted one.
      if (votesDiff === 0) {
        return topicB.id - topicA.id;
      }

      // Otherwise promote the one with higher votes.
      return votesDiff;
    })
    .slice(0, 20);

  return {
    topics: sortedTop20Topics,
  };
}

export default connect(mapStateToProps)(TopicsList);
