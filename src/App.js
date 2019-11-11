import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch
} from 'react-router-dom';
import AOS from 'aos';

import Header from './components/header/header';
import Home from './components/pages/home';
import Terminal from './components/terminal/terminal'
import About from './components/pages/about';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';
import My404 from './components/pages/404';

/* import list of projects */
import project01 from './components/projects/project01';
import project02 from './components/projects/project02';
import project03 from './components/projects/project03';
import project04 from './components/projects/project04';

import './App.css';

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 800, 
      once: true, 
      disable: "mobile"
    })
  }
  render() {
    return (
      <Router>
      <div className="App" id='page'>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/projects/marktplaats' component={project01} />
          <Route exact path='/projects/invoke' component={project02} />
          <Route exact path='/projects/tti' component={project03} />
          <Route exact path='/projects/fullhouse' component={project04} />

          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='*' component={My404} />
        </Switch>
        <Terminal/>
      </div>
      </Router>
    );
  }
}

export default App;
