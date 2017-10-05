import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createTopic } from './actions';

import './styles/TopicForm.css';

class TopicForm extends React.PureComponent {
  static propTypes= {
    dispatch: PropTypes.func.isRequired,
  };

  state = {
    inputValue: '',
    showForm: false,
  };

  handleTextareaChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  handleFormSubmit = (event) => {
    const action = createTopic(this.state.inputValue);
    this.props.dispatch(action);

    // Reset input for next submission
    this.setState({
      inputValue: '',
      showForm: false,
    });
    event.preventDefault();
  }

  handleAddTopicClick = () => {
    this.setState({ showForm: true });
  }

  handleFormCancelClick = (event) => {
    this.setState({ showForm: false });
    event.preventDefault();
  }

  renderButton() {
    return (
      <button onClick={this.handleAddTopicClick}>
        Add Topic
      </button>
    );
  }

  renderForm() {
    return (
      <form className="topic-form" onSubmit={this.handleFormSubmit}>
        <textarea
          autoFocus
          rows="6"
          maxLength={255}
          value={this.state.inputValue}
          onChange={this.handleTextareaChange} />
        <br />

        <a href="#cancel" className="cancel-link" onClick={this.handleFormCancelClick}>
          Cancel
        </a>

        <button type="submit">Submit</button>
      </form>
    );
  }

  render() {
    const content = this.state.showForm
      ? this.renderForm()
      : this.renderButton();

    return <div>{content}</div>;
  }
}

export default connect()(TopicForm);
