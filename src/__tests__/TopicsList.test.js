import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { TopicsList } from '../TopicsList';
import { createTopicRecord } from '../reducer';

const MOCKED_TOPICS = [
  createTopicRecord('id-1', 'Foo'),
  createTopicRecord('id-2', 'Bar'),
  createTopicRecord('id-3', 'Test'),
];

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <TopicsList
      topics={[]}
      onUpvote={() => {}}
      onDownvote={() => {}} />
  , div);
});

it('renders topics with <Topic>', () => {
  const wrapper = shallow(
    <TopicsList
      topics={MOCKED_TOPICS}
      onUpvote={() => {}}
      onDownvote={() => {}} />
  );

  expect(wrapper.find('Topic')).toHaveLength(3);
});

it('passes configured vote handlers to <Topic>', () => {
  const handleUpvote = jest.fn();
  const handleDownvote = jest.fn();

  const wrapper = shallow(
    <TopicsList
      topics={MOCKED_TOPICS}
      onUpvote={handleUpvote}
      onDownvote={handleDownvote} />
  );

  wrapper.find('Topic').at(0).prop('onUpvote')();
  expect(handleUpvote).toHaveBeenLastCalledWith('id-1');

  wrapper.find('Topic').at(2).prop('onDownvote')();
  expect(handleDownvote).toHaveBeenLastCalledWith('id-3');
});
