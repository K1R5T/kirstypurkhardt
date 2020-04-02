import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import CodeNation from './components/CodeNation';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import ExternalLinks from './components/ExternalLinks';
import Welcome from './components/Welcome'
import Projects from './components/Projects';
import Counter from './components/Counter';
import AddressBook from './components/AddressBook';
import TodoList from './components/ToDoList';

class App extends Component {
  render(){
    return (
      <div className="App">

      <BrowserRouter>

      {/* <Navbar /> */}

      <Switch>

        <Route path="/" component={Welcome} exact/>

        <Route path="/home" component={Home} />

        <Route path="/aboutme" component={AboutMe}/>

        <Route path='/codenation' component={CodeNation}/>

        <Route path='/externallinks' component={ExternalLinks}/>

        <Route path='/projects' component={Projects}/>

        <Route path='/counter' component={Counter}/>

        <Route path="/AddressBook" component={AddressBook}/>

        <Route path="/ToDoList" component={TodoList}/>
       

      </Switch>

      </BrowserRouter>

      </div>
    );
  }
}

export default App;
