import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { TopicForm } from '../TopicForm';

import { createTopic } from '../actions';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<TopicForm dispatch={() => {}} />, div);
});

it('shows a <textarea> when click on add topic button', () => {
  const wrapper = shallow(<TopicForm dispatch={() => {}} />);
  expect(wrapper.find('textarea')).toHaveLength(0);

  wrapper.find('button.btn-add-topic').simulate('click');
  expect(wrapper.state('showForm')).toBeTruthy();
  expect(wrapper.find('textarea')).toHaveLength(1);
});

it('maintains <textarea> value in state', () => {
  const wrapper = shallow(<TopicForm dispatch={() => {}} />);
  wrapper.setState({ showForm: true });

  wrapper.find('textarea').simulate('change', {
    target: { value: 'Foo bar' }
  });
  expect(wrapper.state('inputValue')).toBe('Foo bar');
});

it('hides and reset <textarea> when click on cancel link', () => {
  const wrapper = shallow(<TopicForm dispatch={() => {}} />);
  wrapper.setState({ showForm: true, inputValue: 'Foo' });

  wrapper.find('a.cancel-link').simulate('click', { preventDefault: () => {} });
  expect(wrapper.state()).toEqual({ showForm: false, inputValue: '' });
});

it('dispatches action to save topic from <textarea> content on submit', () => {
  const dispatch = jest.fn();
  const wrapper = shallow(<TopicForm dispatch={dispatch} />);
  wrapper.setState({ showForm: true, inputValue: 'Foo' });

  expect(dispatch).not.toHaveBeenCalled();

  wrapper.find('form').simulate('submit', { preventDefault: () => {} });

  expect(dispatch).toHaveBeenCalledTimes(1);
  expect(dispatch).toHaveBeenLastCalledWith(createTopic('Foo'));
  expect(wrapper.state()).toEqual({ showForm: false, inputValue: '' });
});