import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PostingDetails from './pages/PostingDetails';
import Profile from './pages/Profile';
import consumerMatching from './pages/consumer-matching';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/postingDetails" component={PostingDetails} />
          <Route path="/profile" component={Profile} />
          <Route path="/consumerMatching" component={consumerMatching} />
        </div>
      </Router>
    );
  }
}

export default App;
