import React, { Component } from 'react';
import Navbar from './Navbar';

class Counter extends Component {
  render() {
    return (
      <div className="counterWrapper">
        <div className="counterapp">
          <CounterApp />
        </div>
      </div>
    );
  }
}

class CounterApp extends Component {
  state = {
    count: 0
  };


  increment = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  }
  decrease = () => {
    this.setState(({ count }) => ({
      count: count - 1
    }));
  }

  render() {
    return (
    <div className="counterContainer">
    <Navbar/>
      <h1 className="counterTitle">Counter Project</h1>

      <p className="counterText">
        Here is a simple counter. It has an increment function and a decrease function. <br></br>
        This was a task set by my tutor during the 12 week Master Coding course.
      </p>

      <div className="btn-container">
        
        <div className="up">
        <button className="up-btn" onClick={this.increment}>increase</button>
        </div>

        <div className="num">
        <button className="num-btn">{this.state.count}</button>
        </div>

        <div className="down">
        <button className="down-btn" onClick={this.decrease}>decrease</button>
        </div> 
      </div>

    </div>
    );
  }
}
export default Counter;