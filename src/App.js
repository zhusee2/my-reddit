import React, { Component } from 'react';

import TopicForm from './TopicForm';
import TopicsList from './TopicsList';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="my-reddit">
        <header className="app-header">
          <h1>MyReddit</h1>
        </header>

        <div className="container">
          <TopicForm />

          <h2>Top 20 Topics</h2>
          <TopicsList />
        </div>
      </div>
    );
  }
}

export default App;
