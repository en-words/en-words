import React, { Component } from 'react';
import Trainings from '../../containers/TrainingsContainer';

class Dashboard extends Component {
  render() {
    return (
        <div>
            <h3>En-Words</h3>
            <p>This application is used as online dictionary for English course.</p>
            <Trainings />
        </div>
    );
  }
}

export default Dashboard;
