//import classes from '*.module.css';
import React, { Component } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import Counter from './counter.jsx';

class Counters extends Component {

    render() {
        return (
            <div>
                <button className="btn btn-primary btn-sml m-2"
                    onClick={this.props.onReset}>
                    Reset
                </button>
                {this.props.counters.map(counter =>
                (<Counter
                    key={counter.id}
                    counter={counter}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}></Counter>))}
            </div>
        );
    }
}

export default Counters;