import uuid from 'uuid/v1';
import reducer, { INITIAL_STATE } from '../reducer';

import {
  createTopic,
} from '../actions';

it('returns initial state on init action with no state given', () => {
  const action = {
    type: '@@INIT',
  };

  expect(reducer(undefined, action)).toEqual(INITIAL_STATE);
});

it('creates a topic record and adds to topics array on create action', () => {
  const topicId = uuid();
  const action = createTopic('foo-bar', topicId);
  const nextState = reducer(undefined, action);

  expect(nextState.topics).toEqual({
    [topicId]: {
      id: topicId,
      content: 'foo-bar',
      votes: 0,
    }
  });
});
