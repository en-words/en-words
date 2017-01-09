import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
        <div className='container'>
            <h1>App</h1>
            <ul>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/words'>Words</Link></li>
            </ul>
            {this.props.children}
        </div>
    );
  }
}

export default App;
