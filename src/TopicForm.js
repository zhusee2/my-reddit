import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createTopic } from './actions';

class TopicForm extends React.PureComponent {
  static propTypes= {
    dispatch: PropTypes.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  handleTextareaChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  handleFormSubmit = (event) => {
    const action = createTopic(this.state.inputValue);
    this.props.dispatch(action);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <textarea
          maxLength={255}
          value={this.state.inputValue}
          onChange={this.handleTextareaChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default connect()(TopicForm);
