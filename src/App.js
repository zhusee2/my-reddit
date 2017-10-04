import React, { Component } from 'react';

import TopicForm from './TopicForm';
import TopicsList from './TopicsList';

class App extends Component {
  render() {
    return (
      <div className="my-reddit">
        <h1>MyReddit</h1>

        <TopicForm />

        <h2>Top 20 Topics</h2>

        <TopicsList />
      </div>
    );
  }
}

export default App;
