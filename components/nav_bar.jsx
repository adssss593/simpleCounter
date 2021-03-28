import React, { Component } from 'react';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">
                        Simple Counter
                </span>
                </div>
                <div>
                    <span style={{ fontSize: 30, fontWeight: 'bold' }} >
                        {this.props.totalCounters}
                    </span>
                </div>
            </nav>
        );
    }
}

export default NavBar;