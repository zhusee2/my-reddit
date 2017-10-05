import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createTopic } from './actions';

import './styles/TopicForm.css';

export class TopicForm extends React.PureComponent {
  static propTypes= {
    dispatch: PropTypes.func.isRequired,
  };

  state = {
    inputValue: '',
    showForm: false,
  };

  hideAndResetForm() {
    this.setState({
      inputValue: '',
      showForm: false,
    });
  }

  handleTextareaChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  handleFormSubmit = (event) => {
    const action = createTopic(this.state.inputValue);
    this.props.dispatch(action);

    // Reset input for next submission
    this.hideAndResetForm();
    event.preventDefault();
  }

  handleAddTopicClick = () => {
    this.setState({ showForm: true });
  }

  handleFormCancelClick = (event) => {
    this.hideAndResetForm();
    event.preventDefault();
  }

  renderButton() {
    return (
      <button className="btn-add-topic" onClick={this.handleAddTopicClick}>
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
