import React, { Component } from 'react';
import { Link } from 'react-router';

import Groups from "../groups/Groups";
import {AppSettings} from '../common/AppSettings'

class App extends Component {
  render() {
    return (
        <div className='container'>
            <div className="page-header">
                <Link to='/'><h1>En-Words</h1></Link> <small>Version: ({AppSettings.VERSION})</small>
            </div>
            <div className="row">
                <div className="col-sm-3 border-right">
                    <Groups />
                </div>
                <div className="col-sm-9">
                    {this.props.children}
                </div>
            </div>
        </div>
    );
  }
}

export default App;
