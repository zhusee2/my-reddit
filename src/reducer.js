import {
  CREATE_TOPIC,
} from './actions';

export const INITIAL_STATE = {
  topics: [],
};

function createTopicRecord(id, content) {
  return {
    id,
    content,
    votes: 0,
  };
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_TOPIC: {
      const newTopic = createTopicRecord(
        state.topics.length,
        action.content
      );

      // Clone the `state.topics` array before push so the old state won't be dirty.
      const newTopicsArray = state.topics.slice();
      newTopicsArray.push(newTopic);

      return Object.assign({}, state, {
        topics: newTopicsArray,
      });
    }

    default:
      return state;
  }
}

export default reducer;
