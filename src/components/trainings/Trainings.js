import React from 'react';

import { Table, Button } from 'antd';

class Trainings extends React.Component {

    //constructor(props) {
    //    super(props);

        //this.handelEditClick = this.handelEditClick.bind(this);
    //}

    componentDidMount() {
        this.props.fetchTrainings();
    }

    render() {
        const { trainings, error } = this.props.trainingList;

        if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        let content = <Table
            rowKey={record => record.trainingId}
            dataSource={trainings}
            columns={[{
                    title: '',
                    dataIndex: '',
                    key: '',
                    width: '80px',
                    render: (text, record) => {
                        if (record.result >= 65) {
                            return 'Passed';
                        } else {
                            return 'Failed';
                        }
                    }
                },
                {
                    title: 'Group',
                    dataIndex: 'groupName',
                    key: 'groupName',
                    //sorter: (a, b) => this.compareWord(a, b),
                    //render:  (text, record) => {record.groupName}
                },
                {
                    title: 'Result',
                    dataIndex: 'result',
                    key: 'result',
                    //sorter: (a, b) => this.compareTranslation(a, b)
                    render:  (text, record) => `${record.result}%`
                },
                {
                    title: 'Date',
                    dataIndex: 'trainingDate',
                    key: 'trainingDate',
                    render:  (text, record) => {
                        return new Date(record.trainingDate).toLocaleString();
                    }
                },
                {
                    title: '',
                    dataIndex: 'delete',
                    key: 'delete',
                    width: '20px',
                    render: (text, record) => (
                        <Button id="deleteTraining" shape="circle" icon="delete" />
                    )
                }]}
            size="middle"
            pagination={false}/>;

        return (
            <div>
                {content}
            </div>
        )
    }
}

export default Trainings;
