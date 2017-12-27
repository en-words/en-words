import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './../containers/HeaderContainer';
import Groups from "../../groups/containers/GroupPageContainer";

import './App.css';
import Dashboard from "../../dashboard/components/Dashboard";
import Words from "../../words/containers/WordPageContainer";

class App extends Component {

    render() {
        return (
            <div className='container'>
                <Header />

                <div className="row">
                    <div className="col-sm-3 align-text-center ">
                        <Groups />
                    </div>
                    <div className="col-sm-9">
                        <Switch>
                            <Route path='/dashboard' component={Dashboard} />
                            <Route path='/words/:groupId' component={Words} />
                            <Route exac path='/' component={Dashboard} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
