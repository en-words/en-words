import React from 'react';
import { browserHistory } from 'react-router';
import { Button, Modal, Spin, Menu } from 'antd';
import GroupForm from '../../containers/GroupFormContainer';

const ButtonGroup = Button.Group;

class Trainings extends React.Component {

    constructor(props) {
        super(props);

        //this.handelEditClick = this.handelEditClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchTrainings();
    }

    render() {
        const { trainings, error, loading } = this.props.trainingList;

        if(loading) {
            return <Spin />
        } else if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div>
                { trainings.map(training =>
                    <div key={training.trainingId}>
                        <p>{training.result}</p>
                        <p>{training.groupId}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default Trainings;
