import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import TopBar from './components/navigation/TopBar';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopBar />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
