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
  const action = createTopic('foo-bar');
  const nextState = reducer(undefined, action);

  expect(nextState.topics).toHaveLength(1);
  expect(nextState.topics[0]).toEqual({
    id: 0,
    content: 'foo-bar',
    votes: 0,
  });
});
