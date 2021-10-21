import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import Navigation from './components/Nav';
import Student from './components/Student';
import Redirect from './components/Redirect';
import history from './History';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  render() { 
    return (
      <BrowserRouter history={history}>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/student/:studentname/:studentno?" component={Student} />
            <Route component={Redirect}/>
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
