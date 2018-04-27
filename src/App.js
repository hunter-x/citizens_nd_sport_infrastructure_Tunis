import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home' ;
import About from './components/About' ;
import Contact from './components/Contact' ;
export default class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      </Switch>
    );
  }
}
