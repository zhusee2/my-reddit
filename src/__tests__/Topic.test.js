import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Topic from '../Topic';
import { createTopicRecord } from '../reducer';

const mockedTopic = createTopicRecord('mocked-topic-id', 'foo');

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Topic
      topic={mockedTopic}
      onUpvote={() => {}}
      onDownvote={() => {}} />
  , div);
});

it('triggers onUpvote when click on upvote button', () => {
  const handleUpvote = jest.fn();

  const wrapper = shallow(
    <Topic
      topic={mockedTopic}
      onUpvote={handleUpvote}
      onDownvote={() => {}} />
  );
  expect(wrapper.find('.btn-upvote')).toHaveLength(1);
  expect(handleUpvote).not.toHaveBeenCalled();

  wrapper.find('.btn-upvote').simulate('click')
  expect(handleUpvote).toHaveBeenCalledTimes(1);
});

it('triggers onDownvote when click on downvote button', () => {
  const handleDownvote = jest.fn();

  const wrapper = shallow(
    <Topic
      topic={mockedTopic}
      onUpvote={() => {}}
      onDownvote={handleDownvote} />
  );
  expect(wrapper.find('.btn-downvote')).toHaveLength(1);
  expect(handleDownvote).not.toHaveBeenCalled();

  wrapper.find('.btn-downvote').simulate('click')
  expect(handleDownvote).toHaveBeenCalledTimes(1);
});
