import React from 'react';

import { Modal } from 'antd';

class Trainings extends React.Component {

    componentDidMount() {
        //this.props.fetchTrainings();
    }

    deleteTraining = (id) => {

        const deleteAction = () => {this.props.deleteTraining(id)};

        Modal.confirm({
            title: 'Delete training result',
            content: 'Do you want to delete the training result?',
            onOk() {
                deleteAction();
            }
        });
    };

    render() {
       /* const { trainings, error } = this.props.trainingList;
        const { groups } = this.props.groupList;
        const groupFilters = groups.map(group => { return {text: group.group, value: group.group}} );

        trainings.forEach(training => {
            training.groupName = groups.filter(group => group.groupId === training.groupId)[0].group;
        });

        if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        let content = <Table
            rowKey={record => record.trainingId}
            dataSource={trainings}
            columns={[
                {
                    title: 'Group',
                    dataIndex: 'groupName',
                    key: 'groupName',
                    filters: groupFilters,
                    onFilter: (value, record) => record.groupName.includes(value),
                    //sorter: (a, b) => compareItems(a.groupName.toLowerCase(), b.groupName.toLowerCase())
                },
                {
                    title: 'Date',
                    dataIndex: 'trainingDate',
                    key: 'trainingDate',
                    //sorter: (a, b) => compareItems(a.trainingDate.toLowerCase(), b.trainingDate.toLowerCase()),
                    render:  (text, record) => {
                        return new Date(record.trainingDate).toLocaleString();
                    }
                },
                {
                    title: 'Result',
                    dataIndex: 'result',
                    key: 'result',
                    //sorter: (a, b) => compareItems(a.result, b.result),
                    render:  (text, record) => `${record.result}%`
                },
                {
                    title: '',
                    dataIndex: '',
                    key: '',
                    width: '80px',
                    render: (text, record) => {
                        if (record.result >= 65) {
                            return <span className="color-green">Passed</span>;
                        } else {
                            return <span className="color-red">Failed</span>;
                        }
                    }
                },
                {
                    title: '',
                    dataIndex: 'delete',
                    key: 'delete',
                    width: '20px',
                    render: (text, record) => (
                        <Button id="deleteTraining" shape="circle" icon="delete" onClick={() => this.deleteTraining(record.trainingId)} />
                    )
                }]}
            size="middle"
            pagination={false}/>;
*/
        return (
            <div>
                {/*<b>Training result:</b>*/}
                {/*{content}*/}
                <p>This application can be used as online dictionary for learning foreign languages.</p>
            </div>
        )
    }
}

export default Trainings;
