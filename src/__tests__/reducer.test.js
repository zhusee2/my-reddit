import uuid from 'uuid/v1';
import reducer, {
  INITIAL_STATE,
  createTopicRecord,
  top20TopicsSelector,
} from '../reducer';

import {
  createTopic,
  upvoteTopic,
  downvoteTopic,
} from '../actions';

function generateMockedTopics(topicsCount = 25) {
  const mockedTopics = {};

  for (let i = 0; i < topicsCount; i++) {
    const topic = createTopicRecord(`topic-${i}`, 'foo content');
    const randomVotesCount = Math.floor(Math.random() * 20);
    topic.votes = randomVotesCount;

    mockedTopics[topic.id] = topic;
  }

  return mockedTopics;
}

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

it('increases votes on a topic on upvote action', () => {
  const topicId = uuid();
  const createAction = createTopic('foo-bar', topicId);
  let state = reducer(undefined, createAction);

  expect(state.topics[topicId].votes).toBe(0);

  const upvoteAction = upvoteTopic(topicId);
  state = reducer(state, upvoteAction);

  expect(state.topics[topicId].votes).toBe(1);
});

it('decreases votes on a topic on downvote action', () => {
  const topicId = uuid();
  const createAction = createTopic('foo-bar', topicId);
  let state = reducer(undefined, createAction);

  expect(state.topics[topicId].votes).toBe(0);

  const downvoteAction = downvoteTopic(topicId);
  state = reducer(state, downvoteAction);

  expect(state.topics[topicId].votes).toBe(-1);
});

it('offers helper to select top 20 topics ordered by votes', () => {
  const mockedState = {
    topics: generateMockedTopics(),
  };
  const selectedTopics = top20TopicsSelector(mockedState);

  expect(selectedTopics).toHaveLength(20);
  expect(selectedTopics[0].votes >= selectedTopics[1].votes).toBeTruthy();

  // If no state given an empty array is expected.
  expect(top20TopicsSelector()).toEqual([]);
});

