import React, { Component } from 'react';

import Header from './Header';
import Groups from "./Groups";

import './App.css';

class App extends Component {

    render() {
        return (
            <div className='container'>
                <Header />

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
