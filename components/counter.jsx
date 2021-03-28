import React, { Component } from 'react';

/**
 * A counter that shows a value, increment and delete button
 */
class Counter extends Component {

    styles = {
        fontSize: 30,
        fontWeight: "bold",
    }

    render() {
        return (
            <div>
                <span style={this.styles} className={this.classes()} >{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn-danger btn-sm m-2">
                    Delete
                </button>

            </div>
        );
    }

    /*
    sets the colour of an element to yellow if the counter is zero or blue if above zero (called in counter display)
    */
    classes() {
        let classes = "badge m-2 badge-";
        return classes += this.props.counter.value === 0 ? "warning" : "primary";
    }

    /*
    if count is zero return 'zero' otherwise count
    */
    formatCount() {
        const value = this.props.counter.value;
        return value === 0 ? "zero" : value;
    }

}

export default Counter;