import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Topic from './Topic';

import { top20TopicsSelector } from './reducer';

function TopicsList({ topics }) {
  return(
    <ul className="topics-list">
      {topics.map(topic => <Topic key={topic.id} topic={topic} />)}
    </ul>
  );
}

TopicsList.propTypes = {
  topics: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    topics: top20TopicsSelector(state),
  };
}

export default connect(mapStateToProps)(TopicsList);
