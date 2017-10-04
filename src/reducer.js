import uuid from 'uuid/v1';

import {
  CREATE_TOPIC,
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC,
} from './actions';

export const INITIAL_STATE = {
  topics: {},
};

export function createTopicRecord(id, content) {
  return {
    id,
    content,
    votes: 0,
  };
}

/**
 * Helper function to sort and pick the 20 top-voted records from state.
 * Topic with a higher vote comes before a lower one.
 *
 * @param {object} state - the complete store state
 * @return {array}
 */
export function top20TopicsSelector(state) {
  if (!state) {
    return [];
  }

  const allTopicsArray = Object.values(state.topics);

  const top20Topics = allTopicsArray
    .sort((topicA, topicB) => topicB.votes - topicA.votes)
    .slice(0, 20);

  return top20Topics;
}

/**
 * Helper function to get the topic by ID.
 *
 * @param {object} state
 * @param {string} topicId
 * @return {Topic}
 */
export function topicSelector(state, topicId) {
  if (!state) {
    return null;
  }

  return state.topics[topicId];
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_TOPIC: {
      const newTopic = createTopicRecord(
        action.topicId || uuid(),
        action.content
      );

      return Object.assign({}, state, {
        topics: Object.assign({}, state.topics, {
          [newTopic.id]: newTopic,
        })
      });
    }

    case UPVOTE_TOPIC: {
      const topic = topicSelector(state, action.topicId);
      const updatedTopic = Object.assign({}, topic, { votes: topic.votes + 1 });

      return Object.assign({}, state, {
        topics: Object.assign({}, state.topics, {
          [action.topicId]: updatedTopic,
        })
      });
    }

    case DOWNVOTE_TOPIC: {
      const topic = topicSelector(state, action.topicId);
      const updatedTopic = Object.assign({}, topic, { votes: topic.votes - 1 });

      return Object.assign({}, state, {
        topics: Object.assign({}, state.topics, {
          [action.topicId]: updatedTopic,
        })
      });
    }

    default:
      return state;
  }
}

export default reducer;
