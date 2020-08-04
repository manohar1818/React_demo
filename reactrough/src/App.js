import React from 'react';
import logo from './logo.svg';
import './App.css';

/*
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
    this.handleIncrement = this.handleIncrement.bind(this)
  }
  
  handleIncrement() {
    this.setState({
      counter: this.state.counter += 1
    })
  }
  
  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <hr />
        <button type="button" onClick={this.handleIncrement}>+</button>
     </div>
    ) 
  }
}




*/



import {useState} from 'react'

function App() {
  const [counter, incrementCounter] = useState(0)
  
  function handleIncrement() {
    incrementCounter(counter + 1)
  }

  return (
    <div>
      <div>{counter}</div>
      <h2>Learn React</h2>
      <hr />
      <button type="button" onClick={handleIncrement}>+</button>
    </div>
  ) 
}

export default App;




