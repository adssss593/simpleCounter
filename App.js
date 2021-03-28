import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/nav_bar';
import Counters from './components/counters';
import { render } from '@testing-library/react';




class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  };

  /*
  makes a new countrs array, mapping the id's of the all counters apart from the one with the given id 
  */
  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id != id);
    this.setState({ counters: counters });//sets the counters array to our new array, also called counters
  };

  /**
   * param - counter. An element of the counters array
   * Increments the value displayed when the adjacent increment button is pressed
   */
  handleIncrement = counter => {
    const counters = [...this.state.counters];//clones the counters array, also calling it counters
    const index = counters.indexOf(counter);//finds the index of the entry passed
    counters[index] = { ...counter };//clones the entry passed
    counters[index].value++;//increments it by one
    this.setState({ counters });//updates the state of our new entry
  };

  /**
   * restes the values of all the counters
   */
  handleReset = () => {
    const counters = this.state.counters.map(c => {//maps each entry of the counters array onto a new array
      c.value = 0;//sets each value of that new array to 0
      return c;
    });
    this.setState({ counters })//updates our new array
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );

  }

}


export default App;
