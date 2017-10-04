import * as React from 'react';
import * as PropTypes from 'prop-types';

function TopicsList({ topics }) {
  return(
    <ul className="topics-list">
      <li>Topic</li>
    </ul>
  );
}

TopicsList.propTypes = {
  topics: PropTypes.array,
};

export default TopicsList;
